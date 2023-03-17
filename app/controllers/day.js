import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class DayController extends Controller {
  @service dateDisplay;
  @service session;

  @action
  onDateChange(newDate) {
    this.dateDisplay.transitionToDate(newDate);
  }

  @action
  logout() {
    this.session.invalidate();
  }
}
