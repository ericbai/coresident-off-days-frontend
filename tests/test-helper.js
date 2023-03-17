import { setApplication } from '@ember/test-helpers';
import Application from 'coresident-off-days-frontend/app';
import config from 'coresident-off-days-frontend/config/environment';
import { start } from 'ember-qunit';
import * as QUnit from 'qunit';
import { setup } from 'qunit-dom';

setApplication(Application.create(config.APP));

setup(QUnit.assert);

start();
