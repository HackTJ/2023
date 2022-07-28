<script>
	import { base } from '$app/paths';

	import Home from '@svicons/ionicons-solid/home.svelte';
	import RegistrationColumn from '../components/Registration/RegistrationColumn.svelte';
	import Footer from '../components/Footer.svelte';
</script>

<section class="text-blueberry-200 flex flex-col justify-between min-h-screen">
	<div class="p-8 md:p-12 flex flex-col grow">
		<a href="{base}/"><Home width="32px" class="text-theme-100 hover:text-theme-200" /></a>
		<h1 class="text-5xl font-black text-white mt-8 mb-2">Registration</h1>
		<p>
			Registration for participants closed on March 20, 2022 at 11:59 pm EST. You may still register
			to be a mentor, judge, volunteer, or photographer. All attendees must adhere to the <a
				class="text-theme-100 underline"
				href="https://static.mlh.io/docs/mlh-code-of-conduct.pdf"
				target="_blank"
				rel="noreferrer">MLH Code of Conduct</a
			>.
		</p>
		<div
			class="flex flex-col lg:flex-row space-y-4 lg:space-y-0 space-x-0 lg:space-x-12 mt-4 h-full grow"
		>
			<RegistrationColumn
				title="Mentor/Judge/Volunteer"
				link="https://forms.gle/R5cgvRmeKSaVhZNY9"
				linkText="Mentor/Judge/Volunteer Registration"
			>
				<p>
					Judges must be present during the entire judging process (9:00 a.m. to 11:00 a.m. on
					Sunday), but not necessarily during the entire hackathon. Computer science and engineering
					experience is preferred but not required.
				</p>
				<br />
				<p>
					Mentors help students if they have any technical questions, and don't have to be present
					online the entire time. Computer science and engineering experience is required.
				</p>
			</RegistrationColumn>
			<RegistrationColumn
				title="Photographer"
				link="https://docs.google.com/forms/d/e/1FAIpQLSd-Q9vTl-xkA2DhxWSOO2GcBXTD9CcCr-juxe27faky3gLHdw/viewform?usp=sf_link"
				linkText="Photographer"
			>
				<p>
					Photographers are only needed for 2 hours at a time (aside from the 2.5 hr shift on
					Sunday), but can sign up for multiple shifts. Participants can also be photographers.
				</p>
				<br />
				<p>
					Photographers who are not participants will be given food and sponsor swag, but are NOT
					allowed to sign up for the 10pm-12am or 12am-2pm shifts.
				</p>
				<br />
				<p>
					This year, because of county regulations, only photographers who are part of Fairfax
					County Public Schools will be able to attend the in-person event.
				</p>
			</RegistrationColumn>
		</div>
	</div>
	<Footer class="mt-8" />
</section>
