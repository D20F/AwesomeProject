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
 
 

  componentDidMount(){

  }

  render() {

    return (
      <View style={styles.container}>
            <Text >Press me!</Text>
            <Text >Press me!</Text>
            <Text >Press me!</Text>
            <Text >Press me!</Text>
            <Text >Press me!</Text>
            <Text >Press me!</Text>
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
