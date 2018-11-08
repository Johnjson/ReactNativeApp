/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';

import {
  StyleSheet,
  Text,
  View,
  AppRegistry,
} from 'react-native';


export default class PageTwo extends Component {

  render() {
    const data = this.props.data || "null";
    return (
      <View>
        <Text style={styles.textview} onPress={() => Actions.three({ data: "从 two 传递到 three" })}>数据传输页面 第2个界面</Text>

        <Text > refresh:{data}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  textview: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:"center",
    marginLeft:70,
    padding: 10,
    borderBottomColor: '#d4d5d6',
    fontSize: 18,
    color: '#664'

  },

});


AppRegistry.registerComponent('PageTwo', () => PageTwo);
