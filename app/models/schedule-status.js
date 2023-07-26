import Model, { attr } from '@ember-data/model';
import dayjs from 'dayjs';

export default class ScheduleStatusModel extends Model {
  @attr('string') fetchedDate;
  @attr('string') minDate;
  @attr('string') maxDate;

  // Objects with keys `blockName`, `isA`, and `dayNumber`
  @attr internBlockInfo;
  @attr residentBlockInfo;

  // Arrays of objects with keys `name`, `role`, and `assignment`
  @attr off;
  @attr maybeOff;
  @attr likelyNotOff;

  get readableDate() {
    return dayjs(this.fetchedDate).format('ddd, MMM D');
  }
}
