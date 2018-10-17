// @flow

import React from 'react';
import {View} from 'react-native';
import {ConnectedRouter} from 'react-router-redux';
import {history} from '../DataStore';
import Routing from '../general/helpers/routing';

type Props = {
  sceneList: Array<Route>,
};

const RouteComponent = Routing.Route;

export default function Router(props: Props) {
  let {sceneList} = props;
  return (
    <ConnectedRouter history={history}>
      <View style={{flex: 1}}>
        {sceneList.map((scene) => {
          return (
            // TODO: check
            // $FlowFixMe
            <RouteComponent
              exact
              key={scene.path}
              path={scene.path}
              title={scene.title}
              render={({match}) => {
                let Component = scene.component;
                let props = match.params || {};
                return <Component {...props} />;
              }}
            />
          );
        })}
      </View>
    </ConnectedRouter>
  );
}
