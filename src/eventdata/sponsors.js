/**
 * This file contains all the sponsor information for the sponsor section of the index
 */

import { base } from '$app/paths';

const sponsors = {
	platinum: [
		{
			src: `${base}/sponsorlogos/roam.png`,
			alt: 'Roam Logo',
			href: 'https://ro.am/'
		}
	],
	gold: [],
	silver: [
		{
			src: `${base}/sponsorlogos/janestreet.png`,
			alt: 'Jane Street Logo',
			href: 'https://www.janestreet.com/'
		}
	],
	bronze: [
		{
			src: `${base}/sponsorlogos/collinsaero.png`,
			alt: 'Collins Aerospace Logo',
			href: 'https://www.collinsaerospace.com/'
		},
		{
			src: `${base}/sponsorlogos/blueridge.png`,
			alt: 'Blue Ridge Networks Logo',
			href: 'https://www.blueridgenetworks.com/'
		},
		{
			src: `${base}/sponsorlogos/alarmcom.png`,
			alt: 'Alarm.com Logo',
			href: 'https://alarm.com/'
		},
		{
			src: `${base}/sponsorlogos/cvent.png`,
			alt: 'Cvent Logo',
			href: 'https://www.cvent.com/'
		},
		{
			src: `${base}/sponsorlogos/daggeranalytics.png`,
			alt: 'Dagger Analytics Logo',
			href: 'https://www.daggeranalytics.com/'
		},
		{
			src: `${base}/sponsorlogos/mindpointgroup.png`,
			alt: 'MindPoint Group Logo',
			href: 'https://www.mindpointgroup.com/'
		},
		{
			src: `${base}/sponsorlogos/ultrapress.png`,
			alt: 'UltraPress Logo',
			href: 'https://ultrapress.com/'
		},
		{
			src: `${base}/sponsorlogos/mapbox.png`,
			alt: 'Mapbox Logo',
			href: 'https://www.mapbox.com/'
		},
		{
			src: `${base}/sponsorlogos/yext.png`,
			alt: 'Yext Logo',
			href: 'https://www.yext.com/'
		}
	],
	prize: [
		{
			src: `${base}/sponsorlogos/echo3d.png`,
			alt: 'echo3D Logo',
			href: 'https://www.echo3d.co/'
		},
		{
			src: `${base}/sponsorlogos/jetbrains.png`,
			alt: 'JetBrains Logo',
			href: 'https://www.jetbrains.com/'
		},
		{
			src: `${base}/sponsorlogos/replit.png`,
			alt: 'Replit Logo',
			href: 'https://replit.com/'
		}
	],
	partners: [
		{
			src: `${base}/sponsorlogos/tjpartnership.png`,
			alt: 'TJ Partnership Fund Logo',
			href: 'https://www.tjpartnershipfund.org/'
		}
	]
};

const platinumTierData = {
	title: 'PLATINUM TIER',
	bg: 'bg-[#C9D4E5]',
	cards: sponsors.platinum
};
const goldTierData = {
	title: 'GOLD TIER',
	bg: 'bg-[#D6B570]',
	cards: sponsors.gold
};
const silverTierData = {
	title: 'SILVER TIER',
	bg: 'bg-zinc-400',
	cards: sponsors.silver
};
const bronzeTierData = {
	title: 'BRONZE TIER',
	bg: 'bg-[#AF7A6D]',
	cards: sponsors.bronze
};
const prizeTierData = {
	title: 'PRIZE TIER',
	bg: 'bg-[#DEDBD2]',
	cards: sponsors.prize
};
const partnershipData = {
	title: 'PARTNERS',
	bg: 'bg-spruce-200',
	cards: sponsors.partners
};
const sponsorData = [
	platinumTierData,
	goldTierData,
	silverTierData,
	bronzeTierData,
	prizeTierData,
	partnershipData
];

export default sponsorData;
