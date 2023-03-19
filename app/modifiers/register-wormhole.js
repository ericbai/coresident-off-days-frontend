import { registerDestructor } from '@ember/destroyable';
import { service } from '@ember/service';
import Modifier from 'ember-modifier';

export default class RegisterWormholeModifier extends Modifier {
  @service wormhole;

  #name;

  modify(element, [name]) {
    const thisName = String(name);
    // if stored name is null (first run) or is different than new value
    if (this.#name !== thisName) {
      // unregister prior name if we're updating the name
      if (this.#name) {
        this.wormhole.unregister(this.#name);
      }
      // register new name
      this.wormhole.register(thisName, element);
      registerDestructor(this, () => this.wormhole.unregister(thisName));
      this.#name = thisName;
    }
  }
}
