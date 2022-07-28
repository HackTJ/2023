const Git = require('nodegit');

let authors = {};

Git.Repository.open('.')
	.then(function (repo) {
		// repo.getCurrentBranch, repo.getHeadCommit, repo.getMasterCommit
		return repo.getHeadCommit();
	})
	.then(function (firstCommit) {
		const history = firstCommit.history();

		history.on('end', async function (commits) {
			for await (const commit of commits) {
				var commitStats = 0;
				for (const diff of await commit.getDiff()) {
					const diffStats = await diff.getStats();
					commitStats += diffStats.insertions() + diffStats.deletions();
				}

				const author = commit.author();
				if (author in authors) {
					authors[author] += commitStats;
				} else {
					authors[author] = commitStats;
				}
			}

			// TODO: deduplicate by username and email
			for (const author of Object.keys(authors).sort(
				(author1, author2) => authors[author2] - authors[author1]
			)) {
				// sort descending
				console.log(`Co-authored-by: ${author}`);
			}
		});

		history.start();
	});
