import PropTypes from 'prop-types';
import { Platform } from 'react-native';

import { canUseDOM } from './utils';

export const SafeHTMLElement = canUseDOM ? HTMLElement : PropTypes.any;

export const propTypes = {
  animationType: PropTypes.oneOf(['none', 'slide', 'fade']),
  transparent: PropTypes.bool,
  visible: PropTypes.bool,
  onRequestClose:
    Platform.isTV || Platform.OS === 'android'
      ? PropTypes.func.isRequired
      : PropTypes.func,
  onShow: PropTypes.func,
  onDismiss: PropTypes.func,
  children: PropTypes.node.isRequired,
  appElement: PropTypes.instanceOf(SafeHTMLElement),
  ariaHideApp: PropTypes.bool,
};

export const defaultProps = {
  animationType: 'none',
  transparent: false,
  visible: true,
  onShow: () => {},
  onRequestClose: () => {},
  onDismiss: () => {},
  ariaHideApp: true,
};
