<h1 align="center">
  <br>
  React Native Web Modal
  <br>
  <br>
  <a href="https://codesandbox.io/s/kxmx8w08jv">
    <img alt="Edit kxmx8w08jv" src="https://codesandbox.io/static/img/play-codesandbox.svg">
  </a>
</h1>

<p align="center">
  <br />
  This repository contains NPM Packages for React Native Modal Implementation for Web
  <br />
  <br />
  <a href="https://nodei.co/npm/modal-react-native-web/"><img src="https://nodei.co/npm/modal-react-native-web.png?downloads=true&downloadRank=true&stars=true" /></a>
</p>

---

## Inspiration

[React Native Modal](https://facebook.github.io/react-native/docs/modal.html) is not yet implemented in [React Native Web](https://github.com/necolas/react-native-web). This is just replacement of React Native Modal with the same API, behavior, and design.

---

## Setup

This libraries is available on npm, install it with: `npm install --save modal-react-native-web` or `yarn add modal-react-native-web` for the basic modal.

## Usage

Since react native web modal is an implementation of the original react native modal, it works in similar fashions with [react-native modal](https://facebook.github.io/react-native/docs/modal.html). But of course, some APIs are limited (not all props are suppported).

Here's example code:

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