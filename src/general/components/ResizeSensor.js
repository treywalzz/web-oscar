// @flow
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';

import type {Dispatch} from '../../types';

type Props = {
  onResize: (width: number) => void,
};

export class ResizeSensor extends Component<Props> {
  _id = 'rn-' + Math.random().toString() + '-' + Date.now().toString();
  frame: HTMLIFrameElement;

  componentDidMount() {
    this.frame = document.createElement('iframe');
    this.frame.style.display = 'block';
    this.frame.style.borderWidth = '0';
    this.frame.style.width = '100%';
    this.frame.style.height = '1px';
    // $FlowFixMe
    this.frame.addEventListener('load', this._frameLoaded);
    this.frame.src = 'about:blank';
    let el = document.getElementById(this._id);
    if (el) {
      el.appendChild(this.frame);
    }
  }

  componentWillUnmount() {
    // $FlowFixMe
    this.frame && this.frame.removeEventListener('load', this._frameLoaded);
  }

  shouldComponentUpdate() {
    return false;
  }

  render() {
    return (
      <View
        id={this._id}
        style={{position: 'absolute', height: 0, left: 0, top: 0, right: 0}}
      />
    );
  }

  // TODO: check this
  // $FlowFixMe
  _frameLoaded = (event) => {
    let frame = event.target;
    let window = frame.contentWindow;
    window.addEventListener('resize', this._onResize);
    this.props.onResize(window.innerWidth);
  };

  // TODO: check this
  // $FlowFixMe
  _onResize = (event) => {
    let window = event.target;
    this.props.onResize(window.innerWidth);
  };
}

let mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    onResize: (windowWidth: number) => {
      dispatch({
        type: 'WINDOW_WIDTH_CHANGED',
        payload: {windowWidth},
      });
    },
  };
};

export default connect(
  null,
  mapDispatchToProps,
)(ResizeSensor);
