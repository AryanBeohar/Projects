import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {Signup} from '../Screens';
import {Login} from '../Screens';
import { Awesomeproject } from '../Screens';

const AuthStack = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen name="Signup" component={Signup} options={{headerShown:false}} />
      <Stack.Screen name="Login" component={Login} options={{headerShown:false}} />

    </Stack.Navigator>
  );
};
export default AuthStack;
