import { module, test } from 'qunit';

import { setupTest } from 'coresident-off-days-frontend/tests/helpers';

module('Unit | Model | schedule status', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('schedule-status', {});
    assert.ok(model);
  });
});
