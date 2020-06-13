import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

import { connect } from 'react-redux'

import { pursecardFun } from '../../../redux/actions'

import styles from './css'

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    w: 100,
    h: 100,
  };
 

  componentDidMount(){

  }
  _onPress = () => {
    // Animate the update
    LayoutAnimation.spring();
    this.setState({w: this.state.w + 15, h: this.state.h + 15})
  }

  _handleAddTodo = () => {
    
    this.props.inclick();
    console.log(this.props);
  }

  render() {
    const { APP_UI_TREE } = this.props;
    const { navigation } = this.props;
    // APP_UI_TREE.SHOW_PURSECARD
    return (
      <View style={styles.container}>
        <View style={[styles.box, {width: this.state.w, height: this.state.h}]} />
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Press me!{APP_UI_TREE.SHOW_PURSECARD}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={this._handleAddTodo}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{APP_UI_TREE.SHOW_PURSECARD}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Homes')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>{APP_UI_TREE.SHOW_PURSECARD}</Text>
          </View>
        </TouchableOpacity>
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
