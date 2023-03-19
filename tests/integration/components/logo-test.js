import { render } from '@ember/test-helpers';
import { setupRenderingTest } from 'coresident-off-days-frontend/tests/helpers';
import { hbs } from 'ember-cli-htmlbars';
import { module, test } from 'qunit';

module('Integration | Component | logo', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Logo />`);

    assert.dom(this.element).hasText('');

    // Template block usage:
    await render(hbs`
      <Logo>
        template block text
      </Logo>
    `);

    assert.dom(this.element).hasText('template block text');
  });
});
