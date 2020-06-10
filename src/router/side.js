
  import * as React from 'react';
  import { Image } from 'react-native';
  import {
    createDrawerNavigator,
    DrawerContentScrollView,
    DrawerItemList,
    DrawerItem,
  } from '@react-navigation/drawer';
  import Animated from 'react-native-reanimated';
  
  
  import Tap from '../router/tap'
  import SideDrawer from '../view/Side/Side-drawer/index'
  import Find from './Group/find'


  
  function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('./../assets/computer.png')}
      />
    );
  }
  function CustomDrawerContent({ progress, ...rest }) {
    const translateX = Animated.interpolate(progress, {
      inputRange: [0, 1],
      outputRange: [-100, 0],
    });
  
    return (
      <DrawerContentScrollView {...rest}>
        <Animated.View style={{ transform: [{ translateX }] }}>
          <DrawerItemList {...rest} />
          <DrawerItem label="Help" onPress={() => alert('Link to help')} />
          <LogoTitle />
        </Animated.View>
      </DrawerContentScrollView>
    );
  }
  const Drawer = createDrawerNavigator();
  
  function App() {
    return (
        <Drawer.Navigator initialRouteName="Tap" drawerContent={props => <CustomDrawerContent {...props} />}>
          <Drawer.Screen name="Tap" component={Tap} />
          <Drawer.Screen name="MFind" component={Find} />
          <Drawer.Screen name="SideDrawer" component={SideDrawer} />
        </Drawer.Navigator>
    );
  }
  export default App;