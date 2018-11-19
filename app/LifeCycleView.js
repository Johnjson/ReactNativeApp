
import React, { Component } from 'react';
import {
  Text
} from 'react-native';

export default class LifeCycleView extends Component{

    constructor(props){
        super(props)
    }

    componentWillMount(){
        console.log('-LifeCycleView--componentWillMount---')
    }

    componentDidMount(){
        console.log('-LifeCycleView--componentDidMount---')
    }


    componentWillReceiveProps(){
        console.log('-LifeCycleView--componentWillReceiveProps---')
    }

    shouldComponentUpdate(nestProps,nextState){
        console.log('-LifeCycleView--shouldComponentUpdate---')
    }

    componentWillUpdate(nestProps,nextState){
        console.log('-LifeCycleView--componentWillUpdate---')
    }

    componentDidUpdate(nestProps,nextState){
        console.log('-LifeCycleView--componentDidUpdate---')
    }

    componentWillUnmount(){
        console.log('-LifeCycleView--componentWillUnmount---')
    }


    render(){
     console.log('---render---')
    return  <Text style={{fontSize:26}}>LifeCycleView 组件的生命周期</Text>
    }
}