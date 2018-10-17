// @flow

import {fork} from 'redux-saga/effects';

import {productsSagaWatcher} from './general/data/products/productsSaga';

export default function* rootSaga(): Generator<*, *, *> {
  yield fork(productsSagaWatcher);
}
