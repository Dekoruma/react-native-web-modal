import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export default class Portal extends Component {
  static propTypes = {
    el: PropTypes.string,
    target: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.instanceOf(Element),
    ]),
    children: PropTypes.node.isRequired,
  };

  static defaultProps = {
    el: 'div',
    target: document.body,
  };

  constructor(props) {
    super(props);
    this.el = document.createElement(props.el);
  }

  componentDidMount() {
    const target = this.target;
    if (target) target.appendChild(this.el);
  }

  componentWillUnmount() {
    const target = this.target;
    if (target) target.removeChild(this.el);
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

    return ReactDOM.createPortal(children, this.el);
  }
}
