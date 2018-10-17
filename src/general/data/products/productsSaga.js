//  @flow

import {takeLatest} from 'redux-saga/effects';

import type {ProductsAction} from './Products-type';

export function* productsSagaWatcher(): Generator<*, *, *> {
  yield takeLatest('FETCH_PRODUCTS_REQUESTED', fetchProductsFromSheet);
}

function* fetchProductsFromSheet(action: ProductsAction): Generator<*, *, *> {}
