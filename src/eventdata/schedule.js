import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
		description:
			'When you arrive at the building on the morning of HackTJ, you will enter through the main door and check in the lobby. From there, you will be directed to the elevators and your designated floor. Please make sure that ALL team members check in individually! This year, we will be implementing <b>staggered check-ins</b>, so please check your email for time assignments.',
		time: dayjs('3/4/2023 09:00', timeFormat)
	},
	{
		title: 'Sponsor Fair',
		time: dayjs('3/4/2023 09:00', timeFormat),
		end: dayjs('3/4/2023 11:00', timeFormat)
	},
	{
		title: 'Doors Close',
		time: dayjs('3/4/2023 11:00', timeFormat)
	},
	{
		title: 'Opening Ceremony',
		time: dayjs('3/4/2023 11:00', timeFormat),
		end: dayjs('3/4/2023 11:45', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('3/4/2023 11:45', timeFormat)
	},
	{
		title: 'Team Building',
		time: dayjs('3/4/2023 11:45', timeFormat),
		end: dayjs('3/4/2023 12:00', timeFormat)
	},
	{
		title: 'Submit Check-In Form',
		description:
			'<b>ONE</b> member from each team will fill out the team <a class="text-blue-500 font-bold" href="https://forms.gle/hUrPFt3J5EHEAUvWA" target="_blank">form</a>, which asks for the names and emails of all team members. Without this form filled, you will not be assigned a room!!! Please fill this form as soon as you can to ensure priority seating. <b>[REMEMBER teams must be 2-4 people, no individual pitches will be heard]</b>',
		time: dayjs('3/4/2023 12:30', timeFormat)
	},
	{
		title: 'Resources and Q&A for Beginners @ BLUE',
		description:
			'If you are a beginner or don’t know where to start, come ask some HackTJ team members general questions about the hackathon!',
		time: dayjs('3/4/2023 12:30', timeFormat),
		end: dayjs('3/4/2023 13:00', timeFormat)
	},
	{
		title: 'Lunch',
		description:
			'Potbelly Sandwiches: Italian, Turkey Swiss, Veggie<br />Panera Salads: Seasonal Greens, Greek, Caesar, Caesar with Chicken</li></ul>',
		time: dayjs('3/4/2023 13:00', timeFormat),
		end: dayjs('3/4/2023 14:00', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'WebRTC Wizardry: Mastering Real-Time Video Conferencing from Scratch and Beyond',
		description:
			'Participants will be introduced to WebRTC, learning how to create a peer-to-peer video conferencing service and gain knowledge on how to expand and scale it for larger meetings, equipping them with the skills and confidence to build their own WebRTC applications. This workshop is ideal for those interested in real-time communication and building advanced applications.<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)',
		time: dayjs('3/4/2023 14:00', timeFormat),
		end: dayjs('3/4/2023 15:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'Program on Mobile App Development',
		description:
			"Join Children's National Hospital researchers Kevin Cleary and Hadi Fooladi Talari as they cover the relationship mobile app development has to the hospital.",
		time: dayjs('3/4/2023 14:00', timeFormat),
		end: dayjs('3/4/2023 15:30', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'The Inner Workings of the Web',
		description:
			'Learn about how web servers and clients communicate, how web servers function, and the practical applications of these concepts through a presentation and demo by TJ Computer Security Club.<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)',
		time: dayjs('3/4/2023 14:30', timeFormat),
		end: dayjs('3/4/2023 15:30', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'Powering up your Website with Arduino',
		description:
			'Come create a website-based user interface for Arduino projects using Node.js with TJ Assistive Technology Club.<br /><br />Recommended Level: Advanced (many CS classes and comfortable with few languages) with a Basic knowledge of Arduino, HTML, and Javascript<br /><br /><b>Targeted to windows machines (discluding school laptops)</b>',
		time: dayjs('3/4/2023 15:30', timeFormat),
		end: dayjs('3/4/2023 16:30', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'Introduction to Competitive Coding',
		description:
			'Come to the workshop hosted by TJ’s Intermediate Computing team! Participants would learn about basic ASCL concepts and be introduced to USACO competition programming, as well as gain coding competition opportunities<br /><br />Recommended Level: Intermediate (some CS classes and basic knowledge of a programming language)',
		time: dayjs('3/4/2023 15:30', timeFormat),
		end: dayjs('3/4/2023 16:00', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'Intro to Quantum Computing',
		description:
			'Interested about the fascinating field of Quantum Computing? Join Physaurus to learn about superposition through hands-on activity/game.<br /><br />Recommended Level: Beginner (little to no experience)',
		time: dayjs('3/4/2023 16:00', timeFormat),
		end: dayjs('3/4/2023 17:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'Resume Building',
		description:
			'Join our signature Yext Talk workshop and gain the essential skills to perfect your resume for landing coveted internships in the tech industry and prestigious programs. Our expert instructors will guide you through crafting a compelling resume that showcases your unique strengths and experience, including how to highlight academic achievements, relevant coursework, extracurricular activities, and volunteer work, and insider advice on what tech companies and prestigious programs look for in their interns.<br /><br />Recommended Level: Beginner (little to no experience)',
		time: dayjs('3/4/2023 16:00', timeFormat),
		end: dayjs('3/4/2023 17:00', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'Storyboarding App Drafts in XCode',
		description:
			'Learn how to use XCode to create iOS app drafts easily!<br /><br />Recommended Level: Beginner/Intermediate (some to no experience)<br /><br /><b>Participants will need a Mac that can run XCode (Come to the RED room 15 minutes in advance if you haven’t downloaded XCode)</b>',
		time: dayjs('3/4/2023 17:00', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'How to Pitch your Product',
		description:
			'Join TJ Investment Club as they cover the basics of Value Proposition. Learn how to create a pitch that captures your audience and has them hooked. <br /><br />Recommended Level: Beginner (little to no experience)',
		time: dayjs('3/4/2023 17:00', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'Crash Course on Public Speaking',
		description:
			'Come to TJ MUN’s Crash Course on Public Speaking to learn presentation tips and tricks that will WOW your judges!',
		time: dayjs('3/4/2023 17:30', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'How to Use Design Thinking to make an Impact as a Student',
		description: 'Join the Ingenuity Foundation to learn how YOU can make an Impact.',
		time: dayjs('3/4/2023 18:00', timeFormat),
		end: dayjs('3/4/2023 18:30', timeFormat)
	},
	{
		title: 'Dinner',
		description:
			'Noodles & Co.: Pad Thai, Vegetarian Spaghetti, Meat Spaghetti, Wisconsin Mac & Cheese, Korean Spicy Noodles, Pesto Cavatappi',
		time: dayjs('3/4/2023 19:00', timeFormat),
		end: dayjs('3/4/2023 20:00', timeFormat)
	},
	{
		title: 'Women in Tech Panel',
		description:
			'Come to hear about the experiences, education/career paths, obstacles overcome, advice, and more of women working in technical fields. All student hackers are welcome to attend.',
		time: dayjs('3/4/2023 20:30', timeFormat),
		end: dayjs('3/4/2023 21:30', timeFormat)
	},
	{
		title: 'Submit Project Category',
		description:
			'You must submit your intended prize categories (MLH and sponsored prizes) and project details (project name and elevator pitch) to <a class="text-blue-500 font-bold" href="https://hacktj2023.devpost.com/" target="_blank">Devpost</a> by 11:30 PM on Saturday March 4th. You do not need to finish the Project Story section, but we encourage you to start it. You might need to add a temporary video URL before submitting, but you can edit your link after you submit on Devpost. You must click “Complete Submission” in order to save the prize categories you’d like to enter, but you can, again, edit your submission after you submit it.',
		time: dayjs('3/4/2023 23:30', timeFormat)
	},
	{
		title: 'Ping Pong Tournament',
		description:
			'Come play off the stress of submitting your project in our nail-biting singles ping-pong tournament. Spots are limited to 35 people, so make sure to sign up fast!',
		time: dayjs('3/4/2023 23:45', timeFormat)
	},
	// // Day 2
	{
		title: 'Midnight Snack',
		description: 'Pizza!',
		time: dayjs('3/5/2023 00:00', timeFormat)
	},
	{
		title: 'Chess Tournament',
		description: 'Join us online for our traditional 1AM Chess Tournament.',
		time: dayjs('3/5/2023 01:00', timeFormat)
	},
	{
		title: 'Online Codenames',
		description: 'Bring your computers and find a team to play Codenames!',
		time: dayjs('3/5/2023 02:00', timeFormat)
	},
	{
		title: 'Poker Tournament',
		description: 'In-person poker tournament! Come for a chance to win prizes and raffle tickets!',
		time: dayjs('3/5/2023 03:00', timeFormat)
	},
	{
		title: 'Breakfast',
		description:
			'Einstein Bros. Bagels: Honey, Blueberry, Chocolate Chip, Cinnamon Raisin, Plain, Everything<br /><br />Blueberry Muffins',
		time: dayjs('3/5/2023 06:30', timeFormat),
		end: dayjs('3/5/2023 08:00', timeFormat)
	},

	{
		title: 'Hacking Ends',
		description:
			'Visit <a class="text-blue-500 font-bold" href="https://hacktj2023.devpost.com/" target="_blank">Devpost</a> to submit your project.<br /><br />You can only opt into one category of: Mobile, Web, and AI/ML, and you will have to choose one of the 5 categories to enter a hack in. Additionally, you will also be prompted to state whether or not that you are a beginner.  You can enter as many sponsor categories as you want.  Judges will nominate you for the HackTJ prizes of best design, social impact, and best overall.<br /><br />Your Devpost submission will require your team to record a three-minute-long video demonstrating your hack, the reasoning or inspiration behind the hack, and how you built it.',
		time: dayjs('3/5/2023 08:00', timeFormat)
	},
	{
		title: 'Judging',
		description:
			'Judges will be going around each team by room, so make sure to stay in the vicinity of your room and be ready to present during the judging period.<br /><br />If you win: we’re going to choose 3 groups to present for 3 minutes each at the closing ceremony.  You can use slides if you’d like, or you can just talk to us. We will notify you if you are presenting at the ceremony around 30-45 minutes after judging ends.',
		time: dayjs('3/5/2023 08:30', timeFormat),
		end: dayjs('3/5/2023 11:30', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('3/5/2023 11:30', timeFormat),
		end: dayjs('3/5/2023 12:00', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('3/5/2023 12:00', timeFormat)
	}
];

export default scheduleItems;
