/**
 * This File contains all information needed for the FAQ page
 */

import { FAQCodeOfConduct, FAQPrizes, FAQRegister, FAQDeadline } from './FAQComponents';

/**
 * Each object should be in the format
 * {question, answer} or {question, answerCoponent}
 * answer will just be a simple string, while answerComponent is a svelte component in FAQComponents
 * Reasons we might want to use FAQComponents is so we can do things like links and lists
 */

export default [
	{
		question: 'What is HackTJ?',
		answer:
			'HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or work with your friends to make your idea come to life.'
	},
	{
		question: 'When is HackTJ?',
		answer: 'HackTJ will start on Saturday, April 16 and run until Sunday, April 17.'
	},
	{
		question: 'Who can attend?',
		answer:
			"HackTJ is open to any and all current high school students. If you're not a high school student but would like to attend, consider coming as a judge, mentor, or volunteer."
	},
	{
		question: 'Is there any cost?',
		answer: 'Nope! Thanks to our sponsors, HackTJ is completely free!'
	},
	{
		question: 'Is there a deadline?',
		answerComponent: FAQDeadline
	},
	{
		question: 'Is there a code of conduct?',
		answerComponent: FAQCodeOfConduct
	},
	{
		question: "Isn't hacking illegal?",
		answer:
			'In the context of a hackathon, "hacking" is to build a real application over the length of the event. It\'s important to not confuse this with illegal hacking, which is gaining unauthorized access to a computer.'
	},
	{
		question: 'Do I need a team?',
		answer:
			"If you already have a team of 2-4 people you want to work with, that's awesome! If not don't worry because we'll have an opportunity for people to join a team if they need one."
	},
	{
		question: 'What prizes can I win?',
		answerComponent: FAQPrizes
	},
	{
		question: 'How do I register?',
		answerComponent: FAQRegister
	},
	{
		question: 'How are ticket decisions made?',
		answer:
			'Tickets decisisons are made based on a variety of factors, including the registration time. Sign up quickly to increase the chance that you are given a HackTJ 9.0 ticket!'
	}
];
