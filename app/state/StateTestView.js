
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    Image
} from 'react-native';


export default class StateTestView extends Component {

    state = {
        size: 70,
    }

    constructor(props) {
        super(props);
        // this.state ={
        //     size:60,
        // }
    }
    render() {

        return <View>
            <Text
                style={{ fontSize: 26 }}
                onPress={() => {
                    this.setState({
                        size: this.state.size + 10
                    })
                }}
            >我打呀打呀 </Text>
            <Image style={{ width:this.state.size, height:this.state.size ,top:30}} source={require('../state/image/qiqiu.png')} />
        </View>
    }
}