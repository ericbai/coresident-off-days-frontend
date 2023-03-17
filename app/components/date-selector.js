import { action } from '@ember/object';
import Component from '@glimmer/component';
import dayjs from 'dayjs';

export default class DateSelectorComponent extends Component {
  // see https://air-datepicker.com/docs
  pickerDateFormat = 'E, MMM d';

  get today() {
    return dayjs();
  }
  get dayPrior() {
    return dayjs(this.args.currentDate).subtract(1, 'day');
  }
  get dayAfter() {
    return dayjs(this.args.currentDate).add(1, 'day');
  }

  get disableToday() {
    return (
      this.args.currentDate &&
      this.today.isSame(dayjs(this.args.currentDate), 'day')
    );
  }
  get disableBack() {
    return this.dayPrior.isBefore(dayjs(this.args.minDate));
  }
  get disableForward() {
    return this.dayAfter.isAfter(dayjs(this.args.maxDate));
  }

  @action
  parseDate(dateString) {
    return dayjs(dateString).toDate();
  }
}
