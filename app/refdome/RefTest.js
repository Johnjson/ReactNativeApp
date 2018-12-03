
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text
} from 'react-native';
import RefTestView from './RefTestView';

export default class RefTest extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            size: 0
        })
    }

    render() {

        return <View>
            <Text style={{ fontSize: 26 }}
                onPress={() => {
                    var size = this.refs.reftest.getSize();
                    // this.ref[reftest]
                    this.setState({
                        size: size
                    })
                }
                }> 获取气球大小:{this.state.size}</Text>
            <RefTestView ref="reftest" />
        </View>
    }
}