
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import StateTestView from './StateTestView';

export default class StateTest extends Component {

    // state = {
    //     size:70,
    // }
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         size: 60,
    //     }
    // }
    render() {

        return <View>
            <StateTestView />
        </View>
    }
}