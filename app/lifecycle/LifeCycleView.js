
import React, { Component } from 'react';
import {
    Text,
    View
} from 'react-native';

export default class LifeCycleView extends Component {

    constructor(props) {
        super(props)
        this.state = {
            count: 0,
        }
        console.log('-组件的生命周期--constructor---')
    }

    componentWillMount() {
        console.log('-组件的生命周期--componentWillMount---')
    }

    componentDidMount() {
        console.log('-组件的生命周期--componentDidMount---')
    }


    componentWillReceiveProps() {
        console.log('-组件的生命周期--componentWillReceiveProps---')
    }

    shouldComponentUpdate(nestProps, nextState) {
        console.log('-组件的生命周期--shouldComponentUpdate---')
        return true;
    }

    componentWillUpdate(nestProps, nextState) {
        console.log('-组件的生命周期--componentWillUpdate---')
    }

    componentDidUpdate(nestProps, nextState) {
        console.log('-组件的生命周期--componentDidUpdate---')
    }

    componentWillUnmount() {
        console.log('-组件的生命周期--componentWillUnmount---')
    }


    render() {
        console.log('-组件的生命周期--render---')
        return <View>
            <Text style={{ fontSize: 26,height:50 }}
                onPress={() => {
                    this.setState({
                        count: this.state.count + 1,
                    })
                }}
                >LifeCycleView 组件的生命周期</Text>
            <Text style={{ fontSize: 20 }}>点击{this.state.count}次数</Text>
        </View>
    }
}