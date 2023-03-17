import { action } from '@ember/object';
import Service, { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import config from 'coresident-off-days-frontend/config/environment';
import dayjs from 'dayjs';

export default class DateDisplayService extends Service {
  @service router;

  @tracked isInitialized = false;
  @tracked currentDate;
  @tracked minDate;
  @tracked maxDate;

  @action
  transitionToDate(newDate) {
    const newDay = dayjs(newDate);
    if (dayjs().isSame(newDay, 'day')) {
      this.transitionToToday();
    } else {
      this.router.transitionTo(
        'day.date',
        newDay.format(config.ENV.FORMAT_DATE)
      );
    }
  }

  @action
  transitionToToday() {
    this.router.transitionTo('day.date', config.ENV.SLUG_TODAY);
  }
}
