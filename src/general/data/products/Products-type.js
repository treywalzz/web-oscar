// @flow

export type Products = {name: string, uri: string};

export type ProductsState = $Exact<{
  products: Array<Products>,
}>;

export type ProductsAction =
  | {
      type: 'FETCH_PRODUCTS_REQUESTED',
    }
  | {
      type: 'FETCH_PRODUCTS_SUCCEEDED',
      payload: {
        products: Array<Products>,
      },
    };
