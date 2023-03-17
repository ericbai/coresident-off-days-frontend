import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;
  @service router;

  async beforeModel(transition) {
    // see https://github.com/mainmatter/ember-simple-auth/blob/master/guides/upgrade-to-v4.md
    await this.session.setup();
    // if staying on this home page, transition to login. The login page will automatically
    // transition to the schedule display page if already logged in
    if (transition.to.name === 'index') {
      this.router.transitionTo('login');
    }
  }
}
