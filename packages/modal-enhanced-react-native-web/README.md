<h1 align="center">
  <br>
  Enhanced Modal React Native Web
  <br>
  <br>
  <a href="https://codesandbox.io/s/kxmx8w08jv">
    <img alt="Edit kxmx8w08jv" src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>
</h1>

<p align="center">
  <br />
  This repository contains NPM Packages for Enhanced Modal for React Native Web
  <br />
  <br />
  <a href="https://nodei.co/npm/modal-enhanced-react-native-web/"><img src="https://nodei.co/npm/modal-enhanced-react-native-web.png?downloads=true&downloadRank=true&stars=true"></a>
</p>

---

## Inspiration

Enhanced modal with the same code as [React Native Modal](https://github.com/react-native-community/react-native-modal) implementation by React Native Community.

---

## Setup

If you want to use the enhanced version, install it with `npm install --save modal-enhanced-react-native-web` or `yarn add modal-enhanced-react-native-web`.

## Usage

Here's example code :

```javascript
import React, { Component } from "react";
import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import Modal from 'modal-enhanced-react-native-web';

export default class Example extends Component {
  state = {
    visibleModal: null
  };

  _renderButton = (text, onPress) => (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text>{text}</Text>
      </View>
    </TouchableOpacity>
  );

  _renderModalContent = () => (
    <View>
      <Text>Hello!</Text>
      {this._renderButton("Close", () => this.setState({ visibleModal: false }))}
    </View>
  );

  _handleOnScroll = event => {
    this.setState({
      scrollOffset: event.nativeEvent.contentOffset.y
    });
  };

  _handleScrollTo = p => {
    if (this.scrollViewRef) {
      this.scrollViewRef.scrollTo(p);
    }
  };

  render() {
    return (
      <View>
        {this._renderButton("Modal that can be closed on backdrop press", () =>
          this.setState({ visibleModal: true })
        )}
        <Modal
          isVisible={this.state.visibleModal}
          onBackdropPress={() => this.setState({ visibleModal: false })}
        >
          {this._renderModalContent()}
        </Modal>
      </View>
    );
  }
}
```

The `isVisible` prop is the only prop you'll really need to make the modal work: you should control this prop value by saving it in your state and setting it to `true` or `false` when needed.

_Taken from [React Native Modal Example](https://snack.expo.io/@kulack/react-native-modal-example) and [RN Modal by React Native](https://github.com/react-native-community/react-native-modal) with some changes_

See [React Native Modal by React Native Community](https://github.com/react-native-community/react-native-modal) for APIs.

### Available animations

_Taken From [React Native Modal by React Native Community](https://github.com/react-native-community/react-native-modal)_

Take a look at [react-native-animatable](https://github.com/oblador/react-native-animatable) to see the dozens of animations available out-of-the-box. You can also pass in custom animation definitions and have them automatically register with react-native-animatable. For more information on creating custom animations, see the react-native-animatable [animation definition schema](https://github.com/oblador/react-native-animatable#animation-definition-schema).

---

## Packages

<table width="100%">
  <tr>
    <th>&nbsp;</th>
    <th>
      <h3><a href="https://github.com/rayandrews/react-native-web-modal/tree/master/packages/modal-react-native-web">React Native Web Modal</a></h3>
    </th>
    <th>
      <h3><a href="https://github.com/rayandrews/react-native-web-modal/tree/master/packages/modal-enhanced-react-native-web">Enhanced Modal React Native Web</a></h3>
    </th>
  <tr>
  <tr>
    <th align="right">NPM</th>
    <td align="center">
      <a href="https://nodei.co/npm/modal-react-native-web/"><img src="https://nodei.co/npm/modal-react-native-web.png?downloads=true&downloadRank=true&stars=true" /></a>
    </td>
    <td align="center">
      <a href="https://nodei.co/npm/modal-enhanced-react-native-web/"><img src="https://nodei.co/npm/modal-enhanced-react-native-web.png?downloads=true&downloadRank=true&stars=true" /></a>
    </td>
  </tr>
  <tr>
    <th align="right">Description</th>
    <td align="center"><a href="">React Native Modal</a> implemented for Web.<br />
    Implemented using
    <a href="https://github.com/necolas/react-native-web">React Native Web Animated</a> and <a href="https://reactjs.org/docs/portals.html">React DOM Portal</a><br />
    </td>
    <td align="center"><a href="https://github.com/react-native-community/react-native-modal">Enhanced Version of React Native Modal</a>, <b>implemented</b> for web<br />
    </td>
  </tr>
  <tr>
    <th align="right">Inspired by</th>
    <td align="center">
      <a href="https://github.com/kiurchv/react-native-web-modal">RNW Modal by Kiurchv</a>
    </td>
    <td align="center">
      <a href="https://github.com/react-native-community/react-native-modal">React Native Modal by React Native Community</a><br />
      MIT License by React Native Community</a>
    </td>
  </tr>
  <tr>
    <th align="right">Not yet supported</th>
    <td align="left">
      - onRequestClose<br />
      - supportedOrientations<br />
      - hardwareAccelerated<br />
      - onOrientationChange<br />
      - presentationStyle<br />
    </td>
    <td align="center">-</td>
  </tr>
</table>

## Author

* **Ray Andrew** - [Ray Andrew](https://github.com/rayandrews)

## Special Thanks

* **Natan Elia** - [Natan Elia](https://github.com/natanelia)
* **Louis David** - [Louis David](https://github.com/louvidc)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details