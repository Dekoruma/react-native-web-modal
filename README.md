<h1 align="center">
  <br>
  React Native Web Modal
  <br>
  <br>
</h1>

<p align="center">
  <br />
  This repository contains NPM Packages for React Native Modal Implementation for Web
  <br />
  <br />
  RNW version : <b>^0.8.6</b>
</p>

---

## Inspiration

[React Native Modal](https://facebook.github.io/react-native/docs/modal.html) is not yet implemented in [React Native Web](https://github.com/necolas/react-native-web). This is just replacement of React Native Modal with the same API, behavior, and design. If you want to create a more enhanced modal, use React Native Web Modal Enhanced with the same code as [React Native Modal](https://github.com/react-native-community/react-native-modal) implementation by React Native Community.

---

## Setup

This libraries is available on npm, install it with: `npm install --save modal-react-native-web` or `yarn add modal-react-native-web` for the basic modal.

If you want to use the enhanced version, install it with `npm install --save modal-enhanced-react-native-web` or `yarn add modal-enhanced-react-native-web`.

## Usage

1. React Native Web Modal

Since r-web-modal is an implemantion of the original react native modal, it works in a similar fashion with [react-native modal](https://facebook.github.io/react-native/docs/modal.html). But of course, some APIs are limited (not all props are suppported).

```javascript

import React, { Component } from 'react';
import { Text, TouchableHighlight, View } from 'react-native';

import Modal from 'modal-react-native-web';

export default class Example extends Component {
  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{marginTop: 22}}>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onDismiss={() => {
            alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
```

_Taken from [React Native Modal Example](https://facebook.github.io/react-native/docs/modal.html) with some changes_

2. Modal Enhanced for React Native Web

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
      NPM : <a href="https://npm.im/modal-react-native-web">modal-react-native-web</a>
      <br />
    </th>
    <th>
      <h3><a href="https://github.com/rayandrews/react-native-web-modal/tree/master/packages/modal-enhanced-react-native-web">Enhanced Modal React Native Web</a></h3>
      NPM : <a href="https://npm.im/modal-enhanced-react-native-web">modal-enhanced-react-native-web</a>
      <br />
    </th>
  <tr>
  <tr>
    <th align="right">Version</th>
    <td align="center">0.1.0</td>
    <td align="center">0.1.0</td>
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
* **Louis David** [Louis David](https://github.com/louvidc)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details