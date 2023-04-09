import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import TaskPage2 from './src/screens/TaskPage.js'
import AddTaskPage from './src/screens/AddTaskPage.js'

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='TaskPage'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="TaskPage" component={TaskPage} />
        <Stack.Screen name="AddTaskPage" component={AddTaskPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
