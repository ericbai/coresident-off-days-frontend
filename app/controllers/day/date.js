import Controller from '@ember/controller';
import dayjs from 'dayjs';

export default class DayDateController extends Controller {
  get readableDate() {
    return dayjs(this.model).format('ddd, MMM D');
  }
}
