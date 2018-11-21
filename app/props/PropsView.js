import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropsUse from './PropsUse';
export default class PropsView extends Component {
    render() {

        return <View>
                <PropsUse name="张三"/>
            </View>
    }
}