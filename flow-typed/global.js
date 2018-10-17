// @flow

import React from 'react';
import type {Styles} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {StyleObj} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

declare type StyleSet = number | Styles | StyleObj | Array<StyleSet>;

declare type ReactNode = React.Node;
declare type ReactEl = React.Element<*>;

declare type Route = {
  path: string,
  component: ReactEl,
  title: string,
  baseLink?: string,
  props?: {[key: string]: mixed},
  search?: string,
};

declare type ObjectOf<T> = {[string]: T};
