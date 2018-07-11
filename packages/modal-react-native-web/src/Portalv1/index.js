import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  static propTypes = {
    el: PropTypes.string,
    target: PropTypes.any,
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    el: 'div',
    target: '#root-modal',
  };

  state = {
    el: null,
  };

  componentDidMount() {
    this.setState({ el: document.createElement('div') }, () => {
      console.log('uyeah');
      this.target.appendChild(this.state.el);
    });
  }

  componentWillUnmount() {
    this.target.removeChild(this.state.el);
  }

  get target() {
    const { target } = this.props;

    if (typeof target === 'string') {
      return document.querySelector(target);
    }

    return target;
  }

  render() {
    const { children } = this.props;

    console.log('wtf moment');
    if (this.state.el) {
      console.log('uge');
      return ReactDOM.createPortal(children, this.state.el);
    }

    return null;
  }
}
