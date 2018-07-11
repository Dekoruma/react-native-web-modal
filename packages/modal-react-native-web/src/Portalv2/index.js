import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { createUniversalPortal, removeUniversalPortals } from './client';

export default class Portal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  static removePortals = removeUniversalPortals;

  componentWillUnmount() {
    removeUniversalPortals();
  }

  renderPortal = (children) => <div aria-modal="true">{children}</div>;

  render() {
    const { children } = this.props;

    return createUniversalPortal(this.renderPortal(children));
  }
}
