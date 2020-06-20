import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import PersonMain from '../../view/Person/Person-main/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="PersonMain" component={PersonMain} />
      </Stack.Navigator>
  )
}

export default App;