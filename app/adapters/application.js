import RESTAdapter from '@ember-data/adapter/rest';
import config from 'coresident-off-days-frontend/config/environment';
import kebabCase from 'lodash.kebabcase';

export default class ApplicationAdapter extends RESTAdapter {
  host = config.ENV.API_ROOT;

  pathForType(type) {
    return kebabCase(type);
  }
}
