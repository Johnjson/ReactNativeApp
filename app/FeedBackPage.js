/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Keyboard,
  Image,
  Alert,
  View
} from 'react-native';




export default class FeedBackPage extends Component {

  render() {
    return (

      <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <TextInput
          style={styles.textInput}
          // 输入提示内容
          placeholder="请输入数据"
          maxLength={200}
          numberOfLines={10}
          multiline = {true}

        />

        <ScrollView style={styles.container} contentContainerStyle={styles.content}>
        <View style={styles.flex} style={styles.flexDirection}  >

          {/* <Image style={styles.imageView} source={require('./img/guide_1.webp')} /> */}
          <Image style={styles.imageView} source={{uri:'http://newtab.firefoxchina.cn/img/sitenav/logo.png'}} />
          <Image style={styles.imageView} source={require('./img/icon_2.png')} />
          <Image style={styles.imageView} source={require('./img/icon_3.png')} />
          <Image style={styles.imageView} source={require('./img/icon_4.png')} />
          </View>
          </ScrollView>
        
        <View style={styles.flex} style={styles.flexDirection}  >
          <Text style={styles.textshow} onPress={this.dissmissKeyboardEvent.bind(this)}> 联系电话 </Text>
          <TextInput
            style={styles.backgroundColor}
            style={styles.textPhone}
            // 输入提示内容
            placeholder="选填,便于联系我们"
          />
        </View>

        <Text style={styles.flex} style={styles.flexDirection} style={styles.textshow1}   onPress={() => this.showAlert("直接与客服联系")}> 直接与客服联系 </Text>
      </ScrollView>

    );
  }

  showAlert(msg) {
    Alert.alert("显示结果", msg, [{text:'确定'}], {cancelable: false});
  }


  //设置一些初始值
  constructor(props) {
    super(props);
    this.state = {
      KeyboardShown: false,
      keyboardDidShowListener: null,
      keyboardDidHideListener: null
    }
    this.keyboardDidShowEvent = this.keyboardDidShowEvent.bind(this)
    this.keyboardDidHideEvent = this.keyboardDidHideEvent.bind(this)
  }

  /*添加监听事件*/
  componentWillMount() {
    //监听键盘弹出事件
    this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', this.keyboardDidShowEvent);
    //监听键盘隐藏事件
    this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', this.keyboardDidHideEvent);
  }

  //=====在这些监听事件中我们写一个label 来标志 =============
  //监听键盘弹出事件
  keyboardDidShowEvent() {
    console.log('监听键盘弹出事件')
    this.setState({
      KeyboardShown: true
    });
  }
  //监听键盘隐藏事件
  keyboardDidHideEvent() {
    console.log('监听键盘隐藏事件')
    this.setState({
      KeyboardShown: false
    });
  }

  /*移除监听事件*/
  componentWillUnmount() {
    //卸载键盘弹出事件监听
    if (this.keyboardDidShowListener != null) {
      this.keyboardDidShowListener.remove();
    }
    //卸载键盘隐藏事件监听
    if (this.keyboardDidHideListener != null) {
      this.keyboardDidHideListener.remove();
    }
  }


  /*键盘消失*/
  dissmissKeyboardEvent() {
    Keyboard.dismiss();
  }

}


const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexDirection: {
    flexDirection: 'row'
  },
  backgroundColor: {
    marginTop: 10,
    backgroundColor: '#fff',
  },
  flexTitle: {
    marginLeft: 70,
    padding: 10,
    borderBottomColor: '#d4d5d6',
    fontSize: 18,
    color: '#664'
  },
  textInput: {
    marginTop: 10,
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 260,
    paddingLeft: 5,
    paddingTop: 5,
    borderBottomColor: '#d4d5d6',
    fontSize: 18,
    color: '#664',
    textAlignVertical: 'top',
    borderBottomWidth: 1
  },
  imageView: {
    height: 60,
    width: 60,
    borderWidth: 1,
    borderColor: '#d4d5d6',
  },
  textPhone: {
    backgroundColor: '#fff',
    height: 40,
    width: 280,
    padding: 10,
    alignContent: 'flex-end',
    borderBottomColor: '#d4d5d6',
    marginTop: 20,
    marginRight: 20,
    color: '#664',
    borderBottomWidth: 1,
    textAlign: "right",
    
  },
  textshow: {
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    justifyContent: "flex-start",
    borderBottomColor: '#d4d5d6',
    marginTop: 20,
    color: '#664',
    borderBottomWidth: 1
  },
  textshow1: {
    backgroundColor: '#fff',
    height: 40,
    padding: 10,
    borderBottomColor: '#d4d5d6',
    marginTop: 88,
    color: '#664',
    textAlignVertical: "center",
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 1,
    textAlign: "center",
  },
});


