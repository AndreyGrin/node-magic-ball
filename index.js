#!/usr/bin/env node
require('dotenv').config();

const _ = require('lodash');
const axios = require('axios');
const { answers } = require('./answers');
const { logger } = require('./logger');

// Function to get a random answer
function askMagicBall(question) {
  let answer = 'Please ask a yes-or-no question';

  if (question) {
    answer = process.env.REPLY_WITH_JOKE ? getJoke().toString() : _.sample(answers);
  }

  return answer;
}

function getJoke() {
  return axios.get('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single')
    .then(response => {
      logger.info(response.data.joke);
      return response.data.joke;
    })
    .catch(error => {
      return 'Oops, I couldn\'t get a joke for you.';
    });
}

// Get the question from the command line arguments
const question = process.argv[2];

// Use the magic ball function to get an answer (wrapped in an IIFE to use async/await)
(async () => {
  await askMagicBall(question);
})();

const _askMagicBall = askMagicBall;

module.exports = { askMagicBall: _askMagicBall };