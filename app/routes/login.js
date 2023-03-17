import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class LoginRoute extends Route {
  @service session;
  @service dateDisplay;

  beforeModel() {
    this.session.prohibitAuthentication(this.dateDisplay.transitionToToday);
  }
}
