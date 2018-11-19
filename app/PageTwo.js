/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
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

