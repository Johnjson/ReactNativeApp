
import React, { Component } from 'react';
import {
  View,
} from 'react-native';
import HelloWord from "./HelloWord";

export default class ViewCreat extends Component {

  render() {
   
    return (
      <View>
       <HelloWord></HelloWord> 
      </View>
    );
  }
}