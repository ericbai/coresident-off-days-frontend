import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class DayRoute extends Route {
  @service session;
  @service dateDisplay;

  beforeModel(transition) {
    this.session.requireAuthentication(transition, 'login');
  }
  redirect(model, transition) {
    if (transition.to.name === 'day.index') {
      this.dateDisplay.transitionToToday();
    }
  }
}
