/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'diaspora-vote',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' *.googleapis.com maps.gstatic.com",
      'font-src': "'self' fonts.gstatic.com themes.googleusercontent.com",
      'connect-src': "'self' maps.gstatic.com",
      'img-src': "'self' *.googleapis.com maps.gstatic.com csi.gstatic.com data:",
      'style-src': "'self' 'unsafe-inline' fonts.googleapis.com maps.gstatic.com assets-cdn.github.com"
    },

    'place-autocomplete': {
      exclude: true,
      key: 'AIzaSyAke6PgEJri7ee9OakTxofAAXuH7VF3eLs',
      client: '1025219867212-644cg90a3sgo1iq7tcfohg4ks0fuco13.apps.googleusercontent.com'
    },

    'g-map': {
      exclude: true,
      libraries: ['places'],
      key: 'AIzaSyAke6PgEJri7ee9OakTxofAAXuH7VF3eLs',
      client: '1025219867212-644cg90a3sgo1iq7tcfohg4ks0fuco13.apps.googleusercontent.com'
    },

    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
