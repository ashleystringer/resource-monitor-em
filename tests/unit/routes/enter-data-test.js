import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | enter-data', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:enter-data');
    assert.ok(route);
  });
});
