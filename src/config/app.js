const mongoConfig = {
  mongoServerUrl: 'mongodb://localhost:27017',
  dbName: 'daily_tweets',
};

const nerConfig = {
  host: 'localhost',
  port: '8080',
};

const geocoderConfig = {
  provider: 'google',
  httpAdapter: 'https',
  // apiKey: 'AIzaSyANkv6Rq2MyQMPGZ8he5dCSNI5IesEtICY',
  // apiKey: 'AIzaSyABsHHXsDcwV85IVLLnQiWqYZZ_afzt-J8',
  // apiKey: 'AIzaSyDxrxa-ZacB4CO84xJ0pVj_zeUjEy30q5g',
  //apiKey: 'AIzaSyAlS4gaR5Z55lSbbOOj9e6yW8sjxzQg6og',
  apiKey: 'AIzaSyAYdjWusWEWe1d2r_UNMWIRy5xkrGEVgkk',
  formatter: null,
};

module.exports = {
  mongoConfig,
  nerConfig,
  geocoderConfig,
};
