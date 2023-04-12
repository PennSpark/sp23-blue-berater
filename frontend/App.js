import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import TaskPage from './src/screens/TaskPage.js'
import AddTaskPage from './src/screens/AddTaskPage.js'
import HomePage from './src/screens/HomePage';
import WelcomePage from './src/screens/WelcomePage.js'
import SignUpPage from './src/screens/WelcomePage.js'
import ProfilePage from './src/screens/ProfilePage.js'



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome Page'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Task Page" component={TaskPage} />
        <Stack.Screen name="Add Task" component={AddTaskPage} />
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Home" component={HomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
