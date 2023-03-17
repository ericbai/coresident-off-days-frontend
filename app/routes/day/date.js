import { action } from '@ember/object';
import Route from '@ember/routing/route';
import { service } from '@ember/service';
import config from 'coresident-off-days-frontend/config/environment';
import dayjs from 'dayjs';

export default class DayDateRoute extends Route {
  @service dateDisplay;
  @service store;

  model({ date }) {
    // need to set initialized hook to here because if we set in `afterModel` will result
    // in an infinite loop if the today date is after the pre-determined valid range
    this.dateDisplay.isInitialized = true;
    // query the store for the schedule status corresponding to the parameter date
    const thisDay = date === config.ENV.SLUG_TODAY ? dayjs() : dayjs(date);
    return this.store.findRecord(
      config.ENV.MODEL_SCHEDULE_STATUS,
      thisDay.format(config.ENV.FORMAT_DATE)
    );
  }
  afterModel(model) {
    this.dateDisplay.currentDate = model.fetchedDate;
    this.dateDisplay.minDate = model.minDate;
    this.dateDisplay.maxDate = model.maxDate;
  }

  @action
  error(error) {
    // TODO disable to style error state?
    // if error on first initialization, then transition to today
    // only display error state if transitioning to invalid state after successful initial load
    if (!this.dateDisplay.isInitialized) {
      this.dateDisplay.transitionToToday();
    }
    // allow propagation to continue to display error template
    return true;
  }
}
