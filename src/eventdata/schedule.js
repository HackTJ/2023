import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
		time: dayjs('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Sponsorship Fair',
		time: dayjs('4/16/2022 10:00', timeFormat)
	},
	{
		title: 'Opening Ceremony',
		time: dayjs('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Doors Close',
		time: dayjs('4/16/2022 11:00', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('4/16/2022 11:30', timeFormat)
	},
	{
		title: 'Team Building',
		time: dayjs('4/16/2022 11:30', timeFormat)
	},
	{
		title: 'Lunch',
		time: dayjs('4/16/2022 13:00', timeFormat)
	},
	{
		title: 'Workshop - Intro to Web Development',
		time: dayjs('4/16/2022 14:00', timeFormat)
	},
	{
		title: 'Workshop - Intro to iOS Development',
		time: dayjs('4/16/2022 14:00', timeFormat)
	},
	{
		title: 'Workshop - Intro to Cloud Computing',
		time: dayjs('4/16/2022 15:00', timeFormat)
	},
	{
		title: 'Workshop - Convolutional Neural Networks',
		time: dayjs('4/16/2022 15:00', timeFormat)
	},
	{
		title: 'Workshop - NuVoice (Assistive Tech)',
		time: dayjs('4/16/2022 15:00', timeFormat)
	},
	{
		title: 'Afternoon Snack',
		time: dayjs('4/16/2022 16:00', timeFormat)
	},
	{
		title: 'Workshop - Intro to Unity',
		time: dayjs('4/16/2022 16:30', timeFormat)
	},
	{
		title: 'Workshop - echo3D',
		time: dayjs('4/16/2022 16:30', timeFormat)
	},
	{
		title: 'MLH Werewolf',
		time: dayjs('4/16/2022 17:30', timeFormat)
	},
	{
		title: 'Easter Egg Hunt',
		time: dayjs('4/16/2022 18:00', timeFormat)
	},
	{
		title: 'Dinner',
		time: dayjs('4/16/2022 19:00', timeFormat)
	},
	{
		title: 'Women in Tech Panel',
		time: dayjs('4/16/2022 20:00', timeFormat)
	},
	{
		title: 'Hackers Leave',
		time: dayjs('4/16/2022 22:45', timeFormat)
	},
	// Day 2
	{
		title: 'Hacking Ends',
		time: dayjs('4/17/2022 08:00', timeFormat)
	},
	{
		title: 'Judging Starts',
		time: dayjs('4/17/2022 09:30', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('4/17/2022 11:30', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('4/17/2022 12:00', timeFormat)
	}
];

export default scheduleItems;
