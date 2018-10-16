// @flow

import type {Styles} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';
import type {StyleObj} from 'react-native/Libraries/StyleSheet/StyleSheetTypes';

declare type StyleSet = number | Styles | StyleObj | Array<StyleSet>;

declare type ReactNode = React$Node;

declare type ObjectOf<T> = {[string]: T};
