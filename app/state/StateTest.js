
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import StateTestView from './StateTestView';

export default class StateTest extends Component {

    render() {

        return <View>
            <StateTestView />
        </View>
    }
}