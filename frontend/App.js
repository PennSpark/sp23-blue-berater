import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/screens/LoginScreen'
import TaskPage from './src/screens/TaskPage.js'
import HomePage from './src/screens/HomePage';
import WelcomePage from './src/screens/WelcomePage.js'
import SignUpPage from './src/screens/WelcomePage.js'
import ProfilePage from './src/screens/ProfilePage.js'
import SettingsPage from './src/screens/Settings';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Tasks'>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Tasks" component={TaskPage} />
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Profile" component={ProfilePage} />
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Settings" component={SettingsPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
