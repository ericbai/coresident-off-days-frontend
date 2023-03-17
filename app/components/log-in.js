import { action } from '@ember/object';
import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class LogInComponent extends Component {
  @tracked pin;
  @tracked errorMessage;

  @action
  updatePin(event) {
    this.pin = event.target.value;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    if (this.pin) {
      try {
        await this.args.onSubmit?.call(null, this.pin);
        this.args.onSuccess?.call(null);
      } catch (error) {
        this.errorMessage = error;
      }
    }
  }
}
