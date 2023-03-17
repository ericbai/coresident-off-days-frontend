import EmberRouter from '@ember/routing/router';
import config from 'coresident-off-days-frontend/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('not-found', { path: '/*' });
  this.route('login');
  this.route('day', function () {
    this.route('date', { path: '/:date' });
  });
});
