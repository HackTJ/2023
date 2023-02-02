import dayjs from 'dayjs';

const timeFormat = 'M/DD/YYYY HH:mm';
const scheduleItems = [
	// Day 1
	{
		title: 'Doors Open',
		time: dayjs('3/4/2022 09:00', timeFormat),
		end: null
	},
	{
		title: 'Doors Close',
		time: dayjs('3/4/2022 11:00', timeFormat),
		end: null
	},
	{
		title: 'Opening Ceremony',
		time: dayjs('3/4/2022 11:00', timeFormat),
		end: dayjs('3/4/2022 11:45', timeFormat)
	},
	{
		title: 'Hacking Begins',
		time: dayjs('3/4/2022 11:45', timeFormat),
		end: null
	},
	{
		title: 'Team Building',
		time: dayjs('3/4/2022 11:45', timeFormat),
		end: dayjs('3/4/2022 12:00', timeFormat)
	},
	{
		title: 'Lunch',
		time: dayjs('3/4/2022 13:00', timeFormat),
		end: dayjs('3/4/2022 14:00', timeFormat)
	},
	{
		title: 'Dinner',
		time: dayjs('3/4/2022 19:00', timeFormat),
		end: dayjs('3/4/2022 20:00', timeFormat)
	},
	{
		title: 'Submit Project Category',
		time: dayjs('3/4/2022 23:30', timeFormat),
		end: null
	},
	// // Day 2
	{
		title: 'Hacking Ends',
		time: dayjs('3/5/2022 08:00', timeFormat),
		end: null
	},
	{
		title: 'Judging',
		time: dayjs('3/5/2022 08:30', timeFormat),
		end: dayjs('3/5/2022 11:30', timeFormat)
	},
	{
		title: 'Closing Ceremony',
		time: dayjs('3/5/2022 11:30', timeFormat),
		end: dayjs('3/5/2022 12:15', timeFormat)
	},
	{
		title: 'Hackathon Ends',
		time: dayjs('3/5/2022 12:15', timeFormat)
	}
];

export default scheduleItems;
