import { setupTest } from 'coresident-off-days-frontend/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | date-display', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:date-display');
    assert.ok(service);
  });
});
