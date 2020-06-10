import * as React from 'react';
import { View, Text, Button, TextInput, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';

import SideDrawer from '../../view/Side/Side-drawer/index'
import Cos from '../../view/My/My-main/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Homes" component={SideDrawer} />
        <Stack.Screen name="Cos" component={Cos} />
      </Stack.Navigator>
  )
}

export default App;

