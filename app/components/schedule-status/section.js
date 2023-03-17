import Component from '@glimmer/component';

export default class ScheduleStatusSectionComponent extends Component {
  get shouldShow() {
    return this.args.shouldShow === undefined ? true : this.args.shouldShow;
  }
}
