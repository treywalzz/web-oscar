// @flow

import type {AppConfigAction, AppConfigState} from './AppConfig-type';

const initialState: AppConfigState = {
  windowWidth: 0,
  isDrawerVisible: false,
};

export default function appConfigReducer(
  state: AppConfigState = initialState,
  action: AppConfigAction,
) {
  switch (action.type) {
    case 'WINDOW_WIDTH_CHANGED': {
      let {windowWidth} = action.payload;
      return {...state, windowWidth};
    }
    case 'OPEN_DASHBOARD_DRAWER': {
      return {...state, isDrawerVisible: true};
    }
    case 'CLOSE_DASHBOARD_DRAWER': {
      return {...state, isDrawerVisible: false};
    }
    default: {
      return state;
    }
  }
}
