#!/usr/bin/env node

const _ = require('lodash');

// Array of possible answers
const answers = [
  'It is certain.',
  'It is decidedly so.',
  'Without a doubt.',
  'Yes - definitely.',
  'You may rely on it.',
  'As I see it, yes.',
  'Most likely.',
  'Outlook good.',
  'Yes.',
  'Signs point to yes.',
  'Reply hazy, try again.',
  'Ask again later.',
  'Better not tell you now.',
  'Cannot predict now.',
  'Concentrate and ask again.',
  'Don\'t count on it.',
  'My reply is no.',
  'My sources say no.',
  'Outlook not so good.',
  'Very doubtful.'
];

// Function to get a random answer
function askMagicBall(question) {
  if (question) {
    const answer = _.sample(answers); // Use lodash to get a random answer
    console.log(answer);
  } else {
    console.log('Please ask a yes-or-no question.');
  }
}

// Get the question from the command line arguments
const question = process.argv[2];

// Use the magic ball function to get an answer
askMagicBall(question);