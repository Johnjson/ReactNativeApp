/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, {Component} from 'react';
import CodePush from "react-native-code-push"; // 引入code-push
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Alert} from 'react-native';


  const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
    });


    type Props = {};
      export default class App extends Component<Props> {

        syncImmediate() {
          CodePush.sync( {
            //安装模式
            //ON_NEXT_RESUME 下次恢复到前台时
            //ON_NEXT_RESTART 下一次重启时
            //IMMEDIATE 马上更新
            installMode : CodePush.InstallMode.IMMEDIATE ,
            //对话框
            updateDialog : {
              //是否显示更新描述
              appendReleaseDescription : true ,
              //更新描述的前缀。 默认为"Description"
              descriptionPrefix : "更新内容：" ,
              //强制更新按钮文字，默认为continue
              mandatoryContinueButtonLabel : "立即更新" ,
              //强制更新时的信息. 默认为"An update is available that must be installed."
              mandatoryUpdateMessage : "必须更新后才能使用" ,
              //非强制更新时，按钮文字,默认为"ignore"
              optionalIgnoreButtonLabel : '稍后' ,
              //非强制更新时，确认按钮文字. 默认为"Install"
              optionalInstallButtonLabel : '后台更新' ,
              //非强制更新时，检查到更新的消息文本
              optionalUpdateMessage : '有新版本了，是否更新？' ,
              //Alert窗口的标题
              title : '更新提示'
              } ,
              } ,
              );


            }

            componentWillMount() {
              CodePush.disallowRestart();//禁止重启
              this.syncImmediate(); //开始检查更新
            }

            componentDidMount() {
              CodePush.allowRestart();//在加载完了，允许重启
            }



            render() {
              return (
                <ScrollView style ={styles.container} contentContainerStyle={styles.content}>
                {
                  dataList.map((item, index) => {
                    return (
                      <TouchableHighlight key={index} underlayColor={'#dcdcdc'} >
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
                }


                const dataList = [
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
                        fontWeight:'bold',
                        color:'#101010',
                        marginTop: 30,
                        marginLeft: 10,
                        marginBottom: 10,
                        marginRight: 10
                        },
                        flexItem: {
                          backgroundColor:'white',
                          flexDirection:'row',
                          alignItems:'center',
                          padding: 10,
                          borderBottomColor: '#d4d5d6',
                          borderBottomWidth: 1,
                          },
                          itemTitle: {
                            fontSize: 16,
                            color:'#666'
                          }
                          });
