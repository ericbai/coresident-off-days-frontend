import { setupTest } from 'coresident-off-days-frontend/tests/helpers';
import { module, test } from 'qunit';

module('Unit | Service | wormhole', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let service = this.owner.lookup('service:wormhole');
    assert.ok(service);
  });
});
