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


export default class PageThree extends Component {

  render() {
    return (
      <View>
        <Text style={styles.textview} onPress={Actions.pop({ refresh: ({ data: '我是反向传值' }) })}>我是Page Three </Text>
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


AppRegistry.registerComponent('PageThree', () => PageThree);
