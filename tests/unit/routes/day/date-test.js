import { setupTest } from 'coresident-off-days-frontend/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Route | day/date', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:day/date');
    assert.ok(route);
  });
});
