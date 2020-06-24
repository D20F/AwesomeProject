import React from 'react';
import {
  View, Image, TouchableOpacity, Modal, Text, Platform,Dimensions,StyleSheet,Alert
} from 'react-native';
import { connect } from 'react-redux'
import { pursecardFun } from '../../../redux/actions'
import styles from './css'

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let city=[]//城市的数组
var that = null

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state={

      }
  }

  // 给父组件传递索引
  _clickIndex = (index) =>{
    this.props._clickIndex(index);
  }

  renderLetters(letter, index) {
      return (
          <TouchableOpacity key={index} activeOpacity={0.6} onPress={()=>{this._clickIndex(index)}}>
              <View >
                  <Text >{letter}</Text>
              </View>
          </TouchableOpacity>
      )
  }

  render() {
      return (
          <View style={{width:10, height: Dimensions.get('window').height,marginBottom:10}}>
              <View >
                  {letters.map((letter, index) => this.renderLetters(letter, index))}
              </View>
          </View>
      );
  }
}


const mapDispatchToProps = dispatch => {
  return {
    inclick: () => dispatch(pursecardFun('CCC')),
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect( mapStateToProps, mapDispatchToProps)(App)
