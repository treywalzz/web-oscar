import React from 'react';
import ReactDOM from 'react-dom';
import {Text, View} from 'react-native';
import './index.css';
import App from './App';
import {unregister} from './serviceWorker';
import {createDataStore} from './DataStore';

import type {Store} from './types';

const Default = () => (
  <View>
    <Text>Open up src/App.js to start working on your app!</Text>
    <Text>Changes you make will automatically reload.</Text>
    <Text>Shake your phone to open the developer menu.</Text>
  </View>
);

// ReactDOM.render(<App />, document.getElementById('root'));
async function init() {
  let rootElement = document.getElementById('root');
  if (rootElement) {
    try {
      const store: Store = createDataStore();
      if (rootElement) {
        ReactDOM.render(<App store={store} />, rootElement);
      }
    } catch (error) {
      ReactDOM.render(<Default />, rootElement);
    }
  }
}
init();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
unregister();
