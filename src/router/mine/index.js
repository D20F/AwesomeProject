import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import MineMain from '../../view/Mine/Mine-main/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="MineMain" component={MineMain} />
      </Stack.Navigator>
  )
}

export default App;