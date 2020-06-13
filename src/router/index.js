import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Animated from 'react-native-reanimated';


import Bar from './bar'


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
      <NavigationContainer>
        <Drawer.Navigator 
          initialRouteName="Bar" 
          drawerContent={props => <CustomDrawerContent {...props} 
        />}>
          <Drawer.Screen name="Bar" component={Bar} />
        
        </Drawer.Navigator>
      </NavigationContainer>
    );
  }
  
  export default App;

