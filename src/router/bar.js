import React from 'react';
import { View, TouchableOpacity,Text ,Button, TextInput, Image} from 'react-native';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Chat from './chat/index'
import Person from './person/index'
import Find from './find/index'
import Wallet from './wallet/index'
import Mine from './mine/index'


import { Icon } from '@ant-design/react-native';



function LogoTitle(props) {
  let { color, name } = props;
  return (
     <Icon name={name} color={color ? '#69c0ff' : ''}/>
  );
}


const Bar = createBottomTabNavigator();

function App() {
  return (
      <Bar.Navigator 
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            if (route.name === 'Chat') {
              iconName = 'wechat';
            } else if (route.name === 'Person') {
              iconName = 'team'
            } else if (route.name === 'Find') {
              iconName = 'tag';
            } else if (route.name === 'Wallet') {
              iconName = 'wallet';
            } else if (route.name === 'Mine') {
              iconName = 'user';
            }
            return <LogoTitle name={iconName} color={focused} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#69c0ff',
          inactiveTintColor: 'gray',
        }}
      >
        <Bar.Screen name="Chat" component={Chat} />
        <Bar.Screen name="Person" component={Person} />
        <Bar.Screen name="Find" component={Find} />
        <Bar.Screen name="Wallet" component={Wallet} />
        <Bar.Screen name="Mine" component={Mine} />
      </Bar.Navigator>
  );
}

export default App;
