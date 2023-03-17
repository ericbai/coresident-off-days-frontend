import { action } from '@ember/object';
import Component from '@glimmer/component';
import AirDatepicker from 'air-datepicker';
import localeEn from 'air-datepicker/locale/en';
import dayjs from 'dayjs';

// see https://air-datepicker.com/docs
export default class DatePickerComponent extends Component {
  picker;

  get selectedDate() {
    return dayjs(this.args.date).toDate();
  }

  // typically modifiers will run clean-up action via a returned function but this implementation
  // of these legacy hooks seems to NOT support this behavior
  @action
  initializePicker(el) {
    const { displayDateFormat, minDate, maxDate } = this.args;
    // store picker
    this.picker = new AirDatepicker('#' + el.id, {
      locale: localeEn,
      isMobile: true,
      autoClose: true,
      dateFormat: displayDateFormat,
      startDate: this.selectedDate,
      selectedDates: [this.selectedDate],
      minDate: dayjs(minDate).toDate(),
      maxDate: dayjs(maxDate).toDate(),
      onSelect: this.onChange,
      buttons: ['today'],
    });
  }

  // need to make sure that `did-insert` has `this.selectedDate` passed in
  // but the `updatePickerDate` function is only allowed to take on argument. If it takes multiple
  // arguments then it is NOT recognized by the plugin.
  // see https://github.com/emberjs/ember-render-modifiers#example-resizing-text-area
  @action
  updatePickerDate() {
    // make update silent to avoid trigger infinite `onChange` loop
    this.picker.selectDate(this.selectedDate, { silent: true });
  }

  @action
  cleanupPicker() {
    this.picker.destroy();
    this.picker = null;
  }

  @action
  onChange({ date }) {
    this.args?.onChange.call(null, date);
  }
}
