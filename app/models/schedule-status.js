import Model, { attr } from '@ember-data/model';
import dayjs from 'dayjs';

export default class ScheduleStatusModel extends Model {
  @attr('string') fetchedDate;
  @attr('string') minDate;
  @attr('string') maxDate;

  @attr('string') blockName;
  @attr('number') dayNumber;

  // Arrays of objects with keys `name` and `assignment`
  @attr off;
  @attr maybeOff;

  get readableDate() {
    return dayjs(this.fetchedDate).format('ddd, MMM D');
  }
}
