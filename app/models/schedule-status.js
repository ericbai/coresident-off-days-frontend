import Model, { attr } from '@ember-data/model';

export default class ScheduleStatusModel extends Model {
  @attr('string') fetchedDate;
  @attr('string') minDate;
  @attr('string') maxDate;

  @attr('string') blockName;
  @attr('number') dayNumber;

  // Arrays of objects with keys `name` and `assignment`
  @attr off;
  @attr maybeOff;
}
