import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { HomeScreen } from '../screens/HomeScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator 
      initialRouteName='Home'
      >
      <Stack.Screen options={{headerShown: false}} name="Login" component={LoginScreen} />
      <Stack.Screen options={{headerShown: false}} name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}