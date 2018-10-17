// @flow

import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Provider} from 'react-redux';

import Router from './routes/Router';
import Toolbar from './general/components/Toolbar';
import ResizeSensor from './general/components/ResizeSensor';

import {ROUTE_LIST} from './routes/routeList';

import type {Store} from './types';

type Props = {
  store: Store,
};

export default class App extends React.Component<Props> {
  render() {
    let {store} = this.props;
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Toolbar />
          <ResizeSensor />
          <Router sceneList={ROUTE_LIST} />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';

// class App extends Component<{}> {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

// export default App;
