import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { polyfill } from 'react-lifecycles-compat';

import { propTypes, defaultProps, SafeHTMLElement } from './modalPropTypes';
import { canUseDOM, isReact16, createPortal } from './utils';

import * as ariaAppHider from './ariaAppHider';
import ModalPortal from './Portal';

function getParentElement(parentSelector) {
  return parentSelector();
}

class Modal extends Component {
  static setAppElement(element) {
    ariaAppHider.setElement(element);
  }

  static propTypes = {
    target: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(SafeHTMLElement),
    ]),
    appElement: PropTypes.instanceOf(SafeHTMLElement),
    parentSelector: PropTypes.func,
    ...propTypes,
  };

  static defaultProps = {
    target: null,
    parentSelector: () => document.body,
    ...defaultProps,
  };

  componentDidMount() {
    if (!canUseDOM) return;

    if (!isReact16) {
      this.node = document.createElement('div');
    }

    const parent = getParentElement(this.props.parentSelector);
    parent.appendChild(this.node);

    if (!isReact16) this.renderPortal(this.props);
  }

  getSnapshotBeforeUpdate(prevProps) {
    const prevParent = getParentElement(prevProps.parentSelector);
    const nextParent = getParentElement(this.props.parentSelector);
    return { prevParent, nextParent };
  }

  componentDidUpdate(prevProps, _, snapshot) {
    const { visible } = this.props;

    if (!canUseDOM) return;

    const { prevParent, nextParent } = snapshot;
    if (nextParent !== prevParent) {
      prevParent.removeChild(this.node);
      nextParent.appendChild(this.node);
    }

    if (!prevProps.visible && !visible) return;

    if (!isReact16) this.renderPortal(this.props);
  }

  componentWillUnmount() {
    if (!canUseDOM || !this.node || !this.portal) return;

    this.removePortal();
  }

  portalRef = (ref) => {
    this.portal = ref;
  };

  renderPortal = (props) => {
    const portal = createPortal(this, <ModalPortal {...props} />, this.node);
    this.portalRef(portal);
  };

  removePortal = () => {
    if (!isReact16) ReactDOM.unmountComponentAtNode(this.node);
    const parent = getParentElement(this.props.parentSelector);
    parent.removeChild(this.node);
  };

  render() {
    if (!canUseDOM || !isReact16) {
      return null;
    }

    if (!this.node && isReact16) {
      this.node = document.createElement('div');
    }

    return createPortal(
      <ModalPortal ref={this.portalRef} {...this.props} />,
      this.node
    );
  }
}

polyfill(Modal);

export default Modal;
