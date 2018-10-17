// @flow

import {Platform} from 'react-native';

export let isWeb = Platform.OS === 'web';
export let isEmbedded = isWeb ? window.parent !== window : false;
