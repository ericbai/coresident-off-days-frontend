'use strict';

// TODO selectively fill out tests and deleted unused ones
// TODO delete unnecessary files

module.exports = function (environment) {
  const ENV = {
    modulePrefix: 'coresident-off-days-frontend',
    environment,
    rootURL: '/',
    locationType: 'history',
    EmberENV: {
      EXTEND_PROTOTYPES: false,
    },
    APP: {},
    ENV: {
      API_ROOT: 'https://iafxygsbc1.execute-api.us-east-1.amazonaws.com',
      MODEL_SCHEDULE_STATUS: 'schedule-status',
      FORMAT_DATE: 'YYYY-MM-DD',
      SLUG_TODAY: 'today',
    },
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
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
