import test from 'tape';

import { put, call } from 'redux-saga/effects'
import { delay } from 'redux-saga'
import { authorize } from './sagas'

import * as Api from './api'

test('authorize Saga test', (assert) => {
  const iterator = fetchUsers();
});