import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
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
		title: 'Lunch',
		time: dayjs('3/4/2023 13:00', timeFormat),
		end: dayjs('3/4/2023 14:00', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'Roam',
		time: dayjs('3/4/2023 14:00', timeFormat),
		end: dayjs('3/4/2023 15:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'Program on Mobile App Development',
		time: dayjs('3/4/2023 14:00', timeFormat),
		end: dayjs('3/4/2023 15:30', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'The Inner Workings of the Web',
		time: dayjs('3/4/2023 14:30', timeFormat),
		end: dayjs('3/4/2023 15:30', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'Powering up your Website with Arduino',
		time: dayjs('3/4/2023 15:30', timeFormat),
		end: dayjs('3/4/2023 16:30', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'Intro to Quantum Computing and Superposition',
		time: dayjs('3/4/2023 16:00', timeFormat),
		end: dayjs('3/4/2023 17:00', timeFormat)
	},
	{
		title: 'Workshop @ RED',
		subtitle: 'Storyboarding App Drafts in XCode',
		time: dayjs('3/4/2023 17:00', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'How to Pitch',
		time: dayjs('3/4/2023 17:00', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ GRAY',
		subtitle: 'Pitching Practice',
		time: dayjs('3/4/2023 17:30', timeFormat),
		end: dayjs('3/4/2023 18:00', timeFormat)
	},
	{
		title: 'Workshop @ BLUE',
		subtitle: 'How to Use Design Thinking to make an Impact as a Student',
		time: dayjs('3/4/2023 18:00', timeFormat),
		end: dayjs('3/4/2023 18:30', timeFormat)
	},
	{
		title: 'Dinner',
		time: dayjs('3/4/2023 19:00', timeFormat),
		end: dayjs('3/4/2023 20:00', timeFormat)
	},
	{
		title: 'Submit Project Category',
		time: dayjs('3/4/2023 23:30', timeFormat)
	},
	// // Day 2
	{
		title: 'Breakfast',
		time: dayjs('3/5/2023 07:00', timeFormat)
	},

	{
		title: 'Hacking Ends',
		time: dayjs('3/5/2023 08:00', timeFormat)
	},
	{
		title: 'Judging',
		time: dayjs('3/5/2023 08:30', timeFormat),
		end: dayjs('3/5/2023 11:30', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('3/5/2023 11:30', timeFormat),
		end: dayjs('3/5/2023 12:15', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('3/5/2023 12:15', timeFormat)
	}
];

export default scheduleItems;
