import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import SideDrawer from '../../view/Side/Side-drawer/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Homes" component={SideDrawer} />
      </Stack.Navigator>
  )
}

export default App;