import React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  StyleSheet,
  View,
} from 'react-native';

import { connect } from 'react-redux'

import {pursecardFun} from '../redux/actions'



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
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 200,
    height: 200,
    backgroundColor: 'red',
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 15,
    marginTop: 15,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
const mapDispatchToProps = dispatch => {
  return {
    inclick: () => dispatch(pursecardFun('CCC')),
  }
}
const mapStateToProps = (state) => {
  return state
}
export default connect( mapStateToProps, mapDispatchToProps)(App)
