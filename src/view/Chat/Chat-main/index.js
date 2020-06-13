import * as React from 'react';
import {
  NativeModules,
  LayoutAnimation,
  Text,
  TouchableOpacity,
  SectionList,
  FlatList,
  TouchableHighlight,
  View,
  StyleSheet,
  KeyboardAvoidingView,
  TextInput,
  Modal,
  MaskedViewIOS,
  Picker,
  ProgressBarAndroid,
  SafeAreaView,
  RefreshControl ,
  ScrollView,
} from 'react-native';

import MaskedView from '@react-native-community/masked-view';


import { connect } from 'react-redux'
import { pursecardFun } from '../../../redux/actions'
import styles from './css'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  state = {
    modalVisible:false
  }


  componentDidMount(){

  }
  _onPress = () => {
 
  }
  _onRefresh = () => {
    this.setState({ modalVisible: true });
    setTimeout(() => {
      this.setState({ modalVisible: false });
    }, 2000);
  }
  



  render() {
    return (
      <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollView}
        androidoverScrollMode  = {'auto'}
        iosalwaysBounceHorizontal   = {true}
        onScroll={() => { console.log('onScroll!'); }}
        // refreshControl={
        //   <RefreshControl 
        //     refreshing = {this.state.modalVisible} 
        //     onRefresh={this._onRefresh} 
        //     // colors={['#ff0000', '#00ff00', '#0000ff']}
        //   />
        // }
      >
        <Text style={styles.text}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Text>
 
      </ScrollView>
     </SafeAreaView>
 
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

