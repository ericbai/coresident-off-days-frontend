import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class LoginController extends Controller {
  @service session;
  @service dateDisplay;

  @action
  login(pin) {
    return this.session.authenticate('authenticator:pin', pin);
  }

  @action
  onSuccess() {
    this.session.attemptedTransition
      ? this.session.attemptedTransition.retry()
      : this.dateDisplay.transitionToToday();
  }
}
