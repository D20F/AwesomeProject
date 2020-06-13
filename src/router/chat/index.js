import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import ChatMain from '../../view/Chat/Chat-main/index'

import { ChatMainTab }from './css'
const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="ChatMain" component={ChatMain} options={{ title: '聊天', ...ChatMainTab}} initialParams={{ data: {}}} />
      </Stack.Navigator>
  )
}

export default App;