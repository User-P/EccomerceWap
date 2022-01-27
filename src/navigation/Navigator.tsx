import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoginScreen} from '../screens/auth/LoginScreen';
import {ProtectedScreen} from '../screens/auth/ProtectedScreen';
import {RegisterScreen} from '../screens/auth/RegisterScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="Protected" component={ProtectedScreen} />
    </Stack.Navigator>
  );
};
