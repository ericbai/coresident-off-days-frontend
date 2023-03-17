import { setupTest } from 'coresident-off-days-frontend/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Controller | day/date', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:day/date');
    assert.ok(controller);
  });
});
