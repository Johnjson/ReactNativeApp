import React, { Component } from 'react';
import {
    View,
    Text
} from 'react-native';
import PropsUse from './PropsUse';
export default class PropsView extends Component {
    render() {
        var  params = {name:'zhangsan', age:19,sex:'女'}
        var {name,sex} = params;
        return <View>
                {/* <PropsUse {...params}/> */}
                <PropsUse name={name} sex={sex}/>
            </View>
    }
}