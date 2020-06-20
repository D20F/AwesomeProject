import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import FindMain from '../../view/Find/Find-main/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="FindMain" component={FindMain} />
      </Stack.Navigator>
  )
}

export default App;