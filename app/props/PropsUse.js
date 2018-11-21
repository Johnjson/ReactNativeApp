
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

export default class PropsUse extends Component{
    static defaultProps={
       name:'小红',
       age:10,
       sex:'男',
    }

    static propTypes={
       name:PropTypes.string,
       age:PropTypes.int,
       sex:PropTypes.string.isRequired,
    }
    render(){
       
        return <View>
                <Text style={{fontSize:26}}>你好， { this.props.name} </Text>
                <Text style={{fontSize:26}}>年龄： { this.props.age}</Text>
                <Text style={{fontSize:26}}>性别： { this.props.sex}</Text>
        </View> 
    }
}