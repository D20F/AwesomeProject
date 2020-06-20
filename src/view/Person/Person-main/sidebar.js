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

  _clickIndex = () =>{
    const { sectionObject } = this.props;
    console.log(sectionObject)
    // sectionObject.scrollToLocation({
    //   sectionIndex: 3,
    //   itemIndex: 3,
    //   viewOffset: 0,
    // })
  }
  renderLetters(letter, index) {
      return (
          <TouchableOpacity key={index} activeOpacity={0.6} onPress={this._clickIndex}>
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
