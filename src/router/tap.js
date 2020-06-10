import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, TouchableOpacity,Text } from 'react-native';
import Animated from 'react-native-reanimated';

import MyMain from '../view/My/My-main/index'
import FindMain from '../view/Find/Find-main/index'
import VideoMain from '../view/Video/Video-main/index'
import YuncunMain from '../view/Yuncun/Yuncun-main/index'

function MyTabBar({ state, descriptors, navigation, position }) {
  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        const inputRange = state.routes.map((_, i) => i);
        const opacity = Animated.interpolate(position, {
          inputRange,
          outputRange: inputRange.map(i => (i === index ? 1 : 0)),
        });

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Animated.Text style={{ opacity }}>
              {label}
            </Animated.Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}





const Tab = createMaterialTopTabNavigator();

function App() {
  return (
      <Tab.Navigator tabBar={props => <MyTabBar {...props} />}>
        <Tab.Screen name="My" component={MyMain} />
        <Tab.Screen name="Find" component={FindMain} />
        <Tab.Screen name="Video" component={VideoMain} />
        <Tab.Screen name="Yuncun" component={YuncunMain} />
      </Tab.Navigator>
  );
}

export default App;
