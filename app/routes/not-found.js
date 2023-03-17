import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class NotFoundRoute extends Route {
  @service router;

  beforeModel(transition) {
    transition.abort();
    // transition to application route if the user types in an invalid URL
    this.router.transitionTo('application');
  }
}
