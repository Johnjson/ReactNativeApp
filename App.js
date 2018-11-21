/**
* Sample React Native App
* https://github.com/facebook/react-native
*
* @format
* @flow
*/

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import CodePush from "react-native-code-push"; // 引入code-push
import {
  Platform,
} from 'react-native';


import SetUp from "./app/SetUp";
import PageTwo from "./app/other/PageTwo";
import PageThree from "./app/other/PageThree";
import ViewCreat from "./app/creatcomponent/ViewCreat";
import LifeCycleView from "./app/lifecycle/LifeCycleView";
import PropsView from "./app/props/PropsView";

export default class App extends Component {

  syncImmediate() {

    CodePush.sync({
      //安装模式
      //ON_NEXT_RESUME 下次恢复到前台时
      //ON_NEXT_RESTART 下一次重启时
      //IMMEDIATE 马上更新
      installMode: CodePush.InstallMode.IMMEDIATE,
      //对话框
      updateDialog: {
        //是否显示更新描述
        appendReleaseDescription: true,
        //更新描述的前缀。 默认为"Description"
        descriptionPrefix: "更新内容：",
        //强制更新按钮文字，默认为continue
        mandatoryContinueButtonLabel: "立即更新",
        //强制更新时的信息. 默认为"An update is available that must be installed."
        mandatoryUpdateMessage: "必须更新后才能使用",
        //非强制更新时，按钮文字,默认为"ignore"
        optionalIgnoreButtonLabel: '稍后',
        //非强制更新时，确认按钮文字. 默认为"Install"
        optionalInstallButtonLabel: '后台更新',
        //非强制更新时，检查到更新的消息文本
        optionalUpdateMessage: '有新版本了，是否更新？',
        //Alert窗口的标题
        title: '更新提示'
      },
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
      <Router>
        {/* 这种写法是将全部的跳转页面都放在Root下面 */}
        <Scene key="root">
          {/* key 就是给页面的标签,供Actions使用 */}
          {/* component 设置关联的页面 */}
          {/* title 就是给页面标题 */}
          {/* initial 就是设置默认页面*/}
          <Scene
            key="setup"
            component={SetUp}
            title="React Native学习之路"
            initial={true}
          />
          <Scene key="two" component={PageTwo} title="PageTwo" />
          <Scene key="three" component={PageThree} title="PageThree" />
          <Scene key="viewCreat" component={ViewCreat} title="ViewCreat" />
          <Scene key="lifeCycleView" component={LifeCycleView} title="LifeCycleView" />
          <Scene key="propsview" component={PropsView} title="PropsView" />


        </Scene>
      </Router>
    );
  }

}
