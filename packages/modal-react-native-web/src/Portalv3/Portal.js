import React, { Component } from 'react';
import { Animated, Dimensions, Easing, StyleSheet } from 'react-native';

import * as ariaAppHider from './ariaAppHider';
import { propTypes, defaultProps } from './modalPropTypes';

let ariaHiddenInstances = 0;

export default class ModalPortal extends Component {
  static propTypes = propTypes;

  static defaultProps = defaultProps;

  constructor(props) {
    super(props);

    this.state = {
      animationSlide: null,
      animationFade: null,
      styleFade: { display: props.visible ? 'flex' : 'none' },
      opacityFade: new Animated.Value(0),
      slideTranslation: new Animated.Value(0),
    };
  }

  componentDidMount() {
    if (this.props.visible) this.handleShow();
  }

  componentWillReceiveProps({ visible }) {
    if (visible && !this.props.visible) this.handleShow();
    if (!visible && this.props.visible) this.handleClose();
  }

  handleShow() {
    const { animationType, onShow, appElement, ariaHideApp } = this.props;

    if (ariaHideApp) {
      ariaHiddenInstances += 1;
      ariaAppHider.hide(appElement);
    }

    if (animationType === 'slide') {
      this.animateSlideIn(onShow);
    } else if (animationType === 'fade') {
      this.animateFadeIn(onShow);
    } else {
      onShow();
    }
  }

  handleClose() {
    const { animationType, onDismiss, ariaHideApp, appElement } = this.props;

    if (animationType === 'slide') {
      this.animateSlideOut(onDismiss);
    } else if (animationType === 'fade') {
      this.animateFadeOut(onDismiss);
    } else {
      onDismiss();
    }

    if (ariaHideApp && ariaHiddenInstances > 0) {
      ariaHiddenInstances -= 1;

      if (ariaHiddenInstances === 0) {
        ariaAppHider.show(appElement);
      }
    }
  }

  // Fade Animation Implementation
  animateFadeIn = (callback) => {
    if (this.state.animationFade) {
      this.state.animationFade.stop();
    }

    const animationFade = Animated.timing(this.state.opacityFade, {
      toValue: 1,
      duration: 300,
    });

    this.setState(
      {
        animationFade,
      },
      () => {
        requestAnimationFrame(() => {
          this.setState({ styleFade: { display: 'flex' } }, () =>
            this.state.animationFade.start(callback)
          );
        });
      }
    );
  };

  animateFadeOut = (callback) => {
    if (this.state.animationFade) {
      this.state.animationFade.stop();
    }

    const animationFade = Animated.timing(this.state.opacityFade, {
      toValue: 0,
      duration: 300,
    });

    this.setState(
      {
        animationFade,
      },
      () => {
        requestAnimationFrame(() => {
          this.state.animationFade.start(() => {
            this.setState(
              {
                styleFade: { display: 'none' },
              },
              callback
            );
          });
        });
      }
    );
  };
  // End of Fade Animation Implementation

  // Slide Animation Implementation
  animateSlideIn = (callback) => {
    if (this.state.animationSlide) {
      this.state.animationSlide.stop();
    }

    const animationSlide = Animated.timing(this.state.slideTranslation, {
      toValue: 1,
      easing: Easing.out(Easing.poly(4)),
      duration: 300,
    });

    this.setState(
      {
        animationSlide,
      },
      () => {
        requestAnimationFrame(() => {
          this.setState({ styleFade: { display: 'flex' } }, () =>
            this.state.animationSlide.start(callback)
          );
        });
      }
    );
  };

  animateSlideOut = (callback) => {
    if (this.state.animationSlide) {
      this.state.animationSlide.stop();
    }

    const animationSlide = Animated.timing(this.state.slideTranslation, {
      toValue: 0,
      easing: Easing.in(Easing.poly(4)),
      duration: 300,
    });

    this.setState(
      {
        animationSlide,
      },
      () => {
        requestAnimationFrame(() => {
          this.state.animationSlide.start(() => {
            this.setState(
              {
                styleFade: { display: 'none' },
              },
              callback
            );
          });
        });
      }
    );
  };
  // End of Slide Animation Implementation

  getAnimationStyle() {
    const { visible, animationType } = this.props;
    const { styleFade } = this.state;

    if (animationType === 'slide') {
      return [
        {
          transform: [
            {
              translateY: this.state.slideTranslation.interpolate({
                inputRange: [0, 1],
                outputRange: [Dimensions.get('window').height, 0],
                extrapolate: 'clamp',
              }),
            },
          ],
        },
        styleFade,
      ];
    }
    if (animationType === 'fade') {
      return [{ opacity: this.state.opacityFade }, styleFade];
    }

    return [style[visible ? 'visible' : 'hidden']];
  }

  render() {
    const { transparent, children } = this.props;

    const transparentStyle = transparent
      ? style.bgTransparent
      : style.bgNotTransparent;
    const animationStyle = this.getAnimationStyle();

    return (
      <div aria-modal="true">
        <Animated.View
          style={[style.baseStyle, transparentStyle, animationStyle]}
        >
          {children}
        </Animated.View>
      </div>
    );
  }
}

const style = StyleSheet.create({
  baseStyle: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    zIndex: 9999,
  },
  bgTransparent: {
    backgroundColor: 'transparent',
  },
  bgNotTransparent: {
    backgroundColor: '#ffffff',
  },
  hidden: {
    display: 'none',
  },
  visible: {
    display: 'flex',
  },
});
