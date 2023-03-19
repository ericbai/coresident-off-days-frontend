import { service } from '@ember/service';
import Component from '@glimmer/component';

export default class WormholeComponent extends Component {
  @service wormhole;

  get destinationElement() {
    return this.wormhole.registry[this.args.name];
  }
}
