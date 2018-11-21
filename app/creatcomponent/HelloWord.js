
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
var createReactClass = require('create-react-class')
var HelloWord = createReactClass({
    render: function() {
        return  <Text style={{fontSize:26}}>Hello Word</Text>
    }
});
module.exports = HelloWord;



// //ES6
// export default class HelloWord extends Component{
//     render(){
//     return  <Text style={{fontSize:26}}>Hello Word</Text>
//     }
// }
