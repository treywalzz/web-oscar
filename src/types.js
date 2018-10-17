// @flow

import type {
  AppConfigAction,
  AppConfigState,
} from './general/data/appConfig/AppConfig-type';
import type {
  ProductsAction,
  ProductsState,
} from './general/data/products/Products-type';

export type RootState = {
  appConfig: AppConfigState,
  products: ProductsState,
};

export type Action = AppConfigAction | ProductsAction;

export type Dispatch = (action: Action) => void;

export type Store = {
  getState: () => RootState,
  dispatch: Dispatch,
};
