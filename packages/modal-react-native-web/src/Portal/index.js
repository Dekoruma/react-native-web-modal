import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

import { canUseDOM } from './utils';

const SafeHTMLElement = canUseDOM ? HTMLElement : PropTypes.any;

const isReact16 = ReactDOM.createPortal !== undefined;

const createPortal = isReact16
  ? ReactDOM.createPortal
  : ReactDOM.unstable_renderSubtreeIntoContainer;

export default class Portal extends Component {
  static propTypes = {
    node: PropTypes.string,
    target: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(SafeHTMLElement),
    ]),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    node: 'div',
    target: '#root-modal',
  };

  componentWillUnmount() {
    this.target.removeChild(this.node);
  }

  renderPortal = (children) => <div aria-modal="true">{children}</div>;

  render() {
    const { children, target, node } = this.props;

    if (!canUseDOM || !isReact16) return null;

    if (!this.node && isReact16) {
      this.node = document.createElement(node);
    }

    if (!target) {
      this.target = document.body;
    } else if (typeof target === 'string') {
      this.target = document.querySelector(target);
      this.target.appendChild(this.node);
    } else {
      this.target = target;
    }

    this.target.appendChild(this.node);

    return createPortal(this.renderPortal(children), this.node);
  }
}
