import React from 'react';
import {
  View, 
  Text,
  SectionList,
  RefreshControl,
} from 'react-native';
import { connect } from 'react-redux'
import { pursecardFun } from '../../../redux/actions'
import styles from './css'
import Sidebar from './sidebar'

const DATA = [
  {
    title: "Main dishes",
    data: ["Pizza", "Burger", "Risotto"]
  },
  {
    title: "Sides",
    data: ["French Fries", "Onion Rings", "Fried Shrimps"]
  },
  {
    title: "Drinks",
    data: ["Water", "Coke", "Beer"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
  {
    title: "Desserts",
    data: ["Cheese Cake", "Ice Cream"]
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);


class App extends React.Component {
  constructor(props) {
      super(props);
      this.state={
        refreshing:false,
        sectionObject:''
      }
  }
  _onRefresh = () =>{
    // 设置ture 让loading出来
    this.setState({refreshing:true});
    // 做出刷新的操作，然后设置false让loading消失
    // () => {
      this.setState({refreshing:false})
    // };
    console.log(this.state.sectionObject)
  }

  render() {
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
          <SectionList
            ref={(ref) =>{
              this.setState({sectionObject:ref})
            }}
            style={styles.container}
              sections={DATA}
              keyExtractor={(item, index) => item + index}
              renderItem={({ item }) => <Item title={item} />}
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
              ListEmptyComponent={() => (
                <Text style={styles.header}>快去添加好友吧</Text>
              )}
              // 设置下拉刷新,使用RefreshControl组件来完成刷新
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
              }
       

            />
            {/* <Sidebar sectionObject = {this.coss}></Sidebar> */}
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
