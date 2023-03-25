import React from 'react';
import {StyleSheet, Text, View} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TaskPage from './src/screens/TaskPage.js'
import LoginScreen from './src/screens/LoginScreen'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName = 'LoginScreen'>
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="TaskPage" component={TaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

