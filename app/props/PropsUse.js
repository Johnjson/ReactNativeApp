
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class PropsUse extends Component{
    render(){
       
        return  <Text style={{fontSize:26}}>你好， { this.props.name}</Text>
    }
}