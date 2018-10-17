// @flow

import React from 'react';
import {Image, StyleSheet, TouchableOpacity, Text, View} from 'react-native';
import {connect} from 'react-redux';
import {push} from 'react-router-redux';

import {MENU_BAR} from '../../routes/routeList';

import type {Dispatch} from '../../types';

type Props = {
  onMenuPressed: (activeMenu: string) => void,
};

class Toolbar extends React.Component<Props> {
  render() {
    return (
      <View style={styles.root}>
        <View style={{flex: 1}}>
          <Image
            style={{height: 70, width: 400}}
            source={
              'http://www.scantruckmultico.com/wp-content/uploads/2017/12/Capture.png'
            }
          />
        </View>
        {this._renderMenus()}
      </View>
    );
  }

  _renderMenus() {
    let {onMenuPressed} = this.props;
    let activeMenu = window.location.pathname.slice(1);
    return (
      <View style={styles.menusWrapper}>
        {MENU_BAR.map((menu, i) => {
          let isActive = activeMenu === menu.path;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => onMenuPressed(menu.path)}
              style={[styles.menuWrapper, isActive && styles.menuWrapperActive]}
            >
              <Text style={[styles.menu, isActive && styles.menuActive]}>
                {menu.text}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onMenuPressed: (activeMenu) => {
      dispatch(push(`${activeMenu}`));
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(Toolbar);

const styles = StyleSheet.create({
  root: {
    width: '100%',
    height: 90,
    borderColor: 'grey',
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    paddingHorizontal: 25,
    backgroundColor: 'white',
    zIndex: 10,
    alignItems: 'center',
  },
  menusWrapper: {
    flexDirection: 'row',
    height: '100%',
  },
  menuWrapper: {
    height: '100%',
    justifyContent: 'center',
    marginLeft: 25,
  },
  menuWrapperActive: {
    borderBottomWidth: 2,
    borderBottomColor: 'blue',
  },
  menu: {
    color: '#0C2C5E',
    fontSize: 17,
  },
  menuActive: {
    fontWeight: '600',
  },
});
