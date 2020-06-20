import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import WalletMain from '../../view/Wallet/Wallet-main/index'


const Stack = createStackNavigator();

function App() {
  return (
      <Stack.Navigator>
        <Stack.Screen name="WalletMain" component={WalletMain} />
      </Stack.Navigator>
  )
}

export default App;