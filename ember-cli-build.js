'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function (defaults) {
  const app = new EmberApp(defaults, {
    // see https://github.com/adopted-ember-addons/ember-cli-sass
    sassOptions: {
      includePaths: ['node_modules/scut/dist'],
    },
    // see https://github.com/mainmatter/ember-simple-auth/blob/master/guides/upgrade-to-v4.md
    'ember-simple-auth': {
      useSessionSetupMethod: true,
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  app.import('node_modules/normalize.css/normalize.css');
  app.import('node_modules/air-datepicker/air-datepicker.css');

  return app.toTree();
};
