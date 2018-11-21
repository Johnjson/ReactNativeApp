/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import {

  ScrollView,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  TouchableHighlight,
  
} from 'react-native';



export default class SetUp extends Component {

  render() {
    return (

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <Text style={styles.flexTitle} onPress={() => Actions.two()} >React Native学习之路</Text>
        {
          dataList.map((item, index) => {
            return (
              <TouchableHighlight key={index} underlayColor={'#dcdcdc'} onPress={() => this.sectionOneItemClicked(index)}>
                <View style={styles.flexItem}>
                  <Text style={styles.itemTitle}>{item}</Text>
                </View>
              </TouchableHighlight>
            )
          })
        }
      </ScrollView>

    );
  }

  sectionOneItemClicked(index) {
    switch (index) {
      case 0:
        Actions.viewCreat()

        break;
      case 1:
        Actions.lifeCycleView();
        
        break;
      case 2:

        break;
      default:

        break;
    }
  }

}

const dataList = [
  'RN之组件生成的三种方式',
  'RN之组件的生命周期',
  'RN传递数据',
  'RN的ListView',
  'RN的FlatList',
  'RN的SectionList',
  'RN的PullRefresh',
  'RN的Navigattion',
  'RN的TextInput',
  'RN的VideoPlayer',
  'RN的IconFont',
  'RN的SqlistStorage',
  'RN的QRCodeScanGenerate',
  'RN的PushNotification',
  'RN的Wechat_lohin_share_pay',
  'RN的Animation'
];


const styles = StyleSheet.create({

  container: {
    flex: 1,
  },
  content: {
    backgroundColor: '#eeeeee',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 30,
    marginLeft: 10,
    marginBottom: 10,
    marginRight: 10
  },
  flexItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft:20,
    padding: 10,
    borderBottomColor: '#d4d5d6',
    borderBottomWidth: 1,
  },
  itemTitle: {
    fontSize: 16,
    color: '#666'
  },
  flexTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    alignContent:"center",
    marginLeft:70,
    padding: 10,
    borderBottomColor: '#d4d5d6',
    fontSize: 18,
    color: '#664'
  },
});


