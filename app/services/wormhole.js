import Service from '@ember/service';
import { TrackedObject } from 'tracked-built-ins';

export default class WormholeService extends Service {
  registry = new TrackedObject();

  register(name, element) {
    this.registry[name] = element;
  }
  unregister(name) {
    delete this.registry[name];
  }
}
