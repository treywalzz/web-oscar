// @flow

export type AppConfigState = {
  windowWidth: number,
};

export type AppConfigAction =
  | {
      type: 'WINDOW_WIDTH_CHANGED',
      payload: {
        windowWidth: number,
      },
    }
  | {
      type: 'OPEN_DASHBOARD_DRAWER',
    }
  | {
      type: 'CLOSE_DASHBOARD_DRAWER',
    };
