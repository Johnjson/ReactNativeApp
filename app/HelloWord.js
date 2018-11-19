
import React, { Component } from 'react';
import {
  Text
} from 'react-native';


//函数式
// function HelloWord(){
//     return <Text style={{fontSize:26}}>Hello Word</Text>
// }
// module.exports = HelloWord;



//ES5
// var HelloWord = React.createClass({
//     render(){
//     return  <Text style={{fontSize:26}}>Hello Word</Text>
//     }
// })
// module.exports = HelloWord;



// //ES6
export default class HelloWord extends Component{
    render(){
    return  <Text style={{fontSize:26}}>Hello Word</Text>
    }
}
