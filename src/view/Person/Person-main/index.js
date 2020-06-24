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

      }
  }
  // 刷新函数
  _onRefresh = () =>{
    // 设置ture 让loading出来
    this.setState({refreshing:true});
    // 做出刷新的操作，然后设置false让loading消失
    // () => {
      this.setState({refreshing:false})
    // };
  
  }
  // 子组件侧边栏滚动点击
  _clickIndex = (index) =>{
    this._assignment.scrollToLocation({
      itemIndex: index,
      viewOffset: 0,
    })
  }

  
  
  

  render() {
    return (
      <View style={{flex:1, flexDirection: 'row'}}>
          <SectionList
            ref={(ref) =>{
              this._assignment = ref;
            }}
            style={styles.container}
              // section 列表数据
              sections={DATA}
              // keyExtractor 自动生成唯一key值
              keyExtractor={(item, index) => item + index}
              //renderItem 渲染主体组件
              renderItem={({ item }) => <Item title={item} />}
              //renderSectionHeader 渲染title组件
              renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.header}>{title}</Text>
              )}
              //ListEmptyComponent 定义无数据显示
              ListEmptyComponent={() => (
                <Text style={styles.header}>快去添加好友吧</Text>
              )}
              // 设置下拉刷新,使用RefreshControl组件来完成刷新
              refreshControl={
                <RefreshControl refreshing={this.state.refreshing} onRefresh={this._onRefresh} />
              }
       

            />
            <Sidebar _clickIndex={this._clickIndex}></Sidebar>
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
