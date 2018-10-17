// @flow

import type {ProductsAction, ProductsState} from './Products-type';

const initialState: ProductsState = {
  products: [],
};

export default function productsReducer(
  state: ProductsState = initialState,
  action: ProductsAction,
) {
  switch (action.type) {
    case 'FETCH_PRODUCTS_REQUESTED': {
      return {...state};
    }
    case 'FETCH_PRODUCTS_SUCCEEDED': {
      let {products} = action.payload;
      return {...state, products};
    }
    default:
      return state;
  }
}
