// @flow

import React from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import type {RootState} from '../../types';

type Props = {
  windowWidth: number,
  maxWidth?: number,
  minWidth?: number,
  dispatch?: any,
};

export function Responsive(props: Props) {
  let {
    windowWidth: width,
    minWidth = 0,
    maxWidth = 10000,
    // eslint-disable-next-line no-unused-vars
    dispatch,
    ...otherProps
  } = props;
  return minWidth <= width && width <= maxWidth && <View {...otherProps} />;
}

function mapStateToProps(state: RootState) {
  return {
    windowWidth: state.appConfig.windowWidth,
  };
}

let ConnectedResponsive = connect(mapStateToProps)(Responsive);

export function Desktop(props: Object) {
  return <ConnectedResponsive {...props} minWidth={600} />;
}

export function Mobile({style, ...otherProps}: Object) {
  return (
    <ConnectedResponsive
      style={[{backgroundColor: 'white'}, style]}
      {...otherProps}
      maxWidth={599}
    />
  );
}

export default ConnectedResponsive;
