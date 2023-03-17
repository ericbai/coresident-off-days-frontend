import config from 'coresident-off-days-frontend/config/environment';
import dayjs from 'dayjs';
import Base from 'ember-simple-auth/authenticators/base';
import fetch from 'fetch';
import Promise from 'rsvp';

// see http://ember-simple-auth.com/api/classes/BaseAuthenticator.html
export default class PinAuthenticator extends Base {
  restore({ expiration }) {
    return dayjs().isBefore(expiration)
      ? Promise.resolve({ expiration })
      : Promise.reject('Your saved session has expired. Please log in again.');
  }
  authenticate(pin) {
    return fetch(config.ENV.API_ROOT + '/validate', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ pin }),
    }).then((response) => {
      return response.ok
        ? Promise.resolve({ expiration: dayjs().add(1, 'month').toISOString() })
        : response.json().then((error) => Promise.reject(error));
    });
  }
}
