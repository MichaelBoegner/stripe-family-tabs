const path = require('path');

const SERVER_PORT = 'https://stripe-family-tab.herokuapp.com/';

const SERVER_CONFIGS = {
  PRODUCTION: process.env.NODE_ENV === 'production',
  PORT: SERVER_PORT,
};

module.exports = SERVER_CONFIGS;


