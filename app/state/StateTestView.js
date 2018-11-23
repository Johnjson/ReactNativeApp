
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  View,
  Text
} from 'react-native';

export default class StateTestView extends Component{

    state = {
        size:70,
    }

    constructor(props){
        super(props);
        // this.state ={
        //     size:60,
        // }
    }
    render(){
       
        return <View>
                <Text style={{fontSize:26}}>你好， { this.props.name} </Text>
                <Text style={{fontSize:26}}>年龄： { this.props.age}</Text>
                <Text style={{fontSize:26}}>size： { this.state.size}</Text>
        </View> 
    }
}