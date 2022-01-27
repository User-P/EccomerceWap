import {NavigationContainer} from '@react-navigation/native';
import {Box, NativeBaseProvider} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import {Navigator} from './src/navigation/Navigator';

export const App = () => {
  return (
    <NativeBaseProvider>
      <Box>Hello</Box>
    </NativeBaseProvider>
  );
};
