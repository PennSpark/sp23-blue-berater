import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import LoginScreen from './src/screens/LoginScreen';
import TaskPage from './src/screens/TaskPage.js';
import HomePage from './src/screens/HomePage';
import WelcomePage from './src/screens/WelcomePage.js';
import SignUpPage from './src/screens/SignUpPage.js';
import ProfilePage from './src/screens/ProfilePage.js';
import SettingsPage from './src/screens/Settings';
import Svg, {Path} from 'react-native-svg';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        tabBarStyle: {
          backgroundColor: '#e8e8e8',
          paddingTop: 20,
      },
        tabBarLabelStyle : {
          paddingTop: 19,
          paddingBottom: 0
        },
        tabBarIcon: ({ color}) => {
          let icon;
          if (route.name === 'Home') {
            icon = 
            <Svg width="31" height="34" viewBox="0 0 31 34" fill= {color} xmlns="http://www.w3.org/2000/svg">
              <Path d="M4.25 29.625H9.875V18.375H21.125V29.625H26.75V12.75L15.5 4.3125L4.25 12.75V29.625ZM4.25 33.375C3.21875 33.375 2.33625 33.0081 1.6025 32.2744C0.8675 31.5394 0.5 30.6562 0.5 29.625V12.75C0.5 12.1562 0.633125 11.5938 0.899375 11.0625C1.16437 10.5313 1.53125 10.0937 2 9.75L13.25 1.3125C13.5938 1.0625 13.9531 0.875 14.3281 0.75C14.7031 0.625 15.0938 0.5625 15.5 0.5625C15.9062 0.5625 16.2969 0.625 16.6719 0.75C17.0469 0.875 17.4062 1.0625 17.75 1.3125L29 9.75C29.4688 10.0937 29.8363 10.5313 30.1025 11.0625C30.3675 11.5938 30.5 12.1562 30.5 12.75V29.625C30.5 30.6562 30.1331 31.5394 29.3994 32.2744C28.6644 33.0081 27.7812 33.375 26.75 33.375H17.375V22.125H13.625V33.375H4.25Z" fill= {color}/>
            </Svg>
            ;
          } else if (route.name === 'Tasks') {
            icon = 
            <Svg width="30" height="26" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M2.5 15.5C1.80556 15.5 1.21556 15.2567 0.73 14.77C0.243333 14.2844 0 13.6944 0 13C0 12.3056 0.243333 11.7156 0.73 11.23C1.21556 10.7433 1.80556 10.5 2.5 10.5C3.19444 10.5 3.78444 10.7433 4.27 11.23C4.75667 11.7156 5 12.3056 5 13C5 13.6944 4.75667 14.2844 4.27 14.77C3.78444 15.2567 3.19444 15.5 2.5 15.5ZM2.5 5.5C1.80556 5.5 1.21556 5.25667 0.73 4.77C0.243333 4.28444 0 3.69444 0 3C0 2.30556 0.243333 1.71556 0.73 1.23C1.21556 0.743334 1.80556 0.5 2.5 0.5C3.19444 0.5 3.78444 0.743334 4.27 1.23C4.75667 1.71556 5 2.30556 5 3C5 3.69444 4.75667 4.28444 4.27 4.77C3.78444 5.25667 3.19444 5.5 2.5 5.5ZM2.5 25.5C1.80556 25.5 1.21556 25.2567 0.73 24.77C0.243333 24.2844 0 23.6944 0 23C0 22.3056 0.243333 21.7156 0.73 21.23C1.21556 20.7433 1.80556 20.5 2.5 20.5C3.19444 20.5 3.78444 20.7433 4.27 21.23C4.75667 21.7156 5 22.3056 5 23C5 23.6944 4.75667 24.2844 4.27 24.77C3.78444 25.2567 3.19444 25.5 2.5 25.5ZM10 24.6667C9.52778 24.6667 9.13222 24.5067 8.81333 24.1867C8.49333 23.8678 8.33333 23.4722 8.33333 23C8.33333 22.5278 8.49333 22.1322 8.81333 21.8133C9.13222 21.4933 9.52778 21.3333 10 21.3333H28.3333C28.8056 21.3333 29.2011 21.4933 29.52 21.8133C29.84 22.1322 30 22.5278 30 23C30 23.4722 29.84 23.8678 29.52 24.1867C29.2011 24.5067 28.8056 24.6667 28.3333 24.6667H10ZM10 14.6667C9.52778 14.6667 9.13222 14.5067 8.81333 14.1867C8.49333 13.8678 8.33333 13.4722 8.33333 13C8.33333 12.5278 8.49333 12.1317 8.81333 11.8117C9.13222 11.4928 9.52778 11.3333 10 11.3333H28.3333C28.8056 11.3333 29.2011 11.4928 29.52 11.8117C29.84 12.1317 30 12.5278 30 13C30 13.4722 29.84 13.8678 29.52 14.1867C29.2011 14.5067 28.8056 14.6667 28.3333 14.6667H10ZM10 4.66667C9.52778 4.66667 9.13222 4.50722 8.81333 4.18833C8.49333 3.86833 8.33333 3.47222 8.33333 3C8.33333 2.52778 8.49333 2.13167 8.81333 1.81167C9.13222 1.49278 9.52778 1.33333 10 1.33333H28.3333C28.8056 1.33333 29.2011 1.49278 29.52 1.81167C29.84 2.13167 30 2.52778 30 3C30 3.47222 29.84 3.86833 29.52 4.18833C29.2011 4.50722 28.8056 4.66667 28.3333 4.66667H10Z" fill= {color}/>
            </Svg>
            
            ;
          } else if (route.name === 'Profile') {
            icon = 
            <Svg width="39" height="39" viewBox="0 0 39 39" fill="none" xmlns="http://www.w3.org/2000/svg">
              <Path d="M19.5 0.75C17.0377 0.75 14.5995 1.23498 12.3247 2.17726C10.0498 3.11953 7.98285 4.50065 6.24175 6.24175C2.72544 9.75805 0.75 14.5272 0.75 19.5C0.75 24.4728 2.72544 29.2419 6.24175 32.7583C7.98285 34.4994 10.0498 35.8805 12.3247 36.8227C14.5995 37.765 17.0377 38.25 19.5 38.25C24.4728 38.25 29.2419 36.2746 32.7583 32.7583C36.2746 29.2419 38.25 24.4728 38.25 19.5C38.25 17.0377 37.765 14.5995 36.8227 12.3247C35.8805 10.0498 34.4994 7.98285 32.7583 6.24175C31.0172 4.50065 28.9502 3.11953 26.6753 2.17726C24.4005 1.23498 21.9623 0.75 19.5 0.75ZM10.2563 31.275C11.0625 29.5875 15.975 27.9375 19.5 27.9375C23.025 27.9375 27.9375 29.5875 28.7438 31.275C26.1176 33.3675 22.8579 34.5048 19.5 34.5C16.0125 34.5 12.8063 33.3 10.2563 31.275ZM31.425 28.5562C28.7438 25.2938 22.2375 24.1875 19.5 24.1875C16.7625 24.1875 10.2562 25.2938 7.575 28.5562C5.58035 25.9587 4.49937 22.7751 4.5 19.5C4.5 11.2313 11.2313 4.5 19.5 4.5C27.7687 4.5 34.5 11.2313 34.5 19.5C34.5 22.9125 33.3375 26.0625 31.425 28.5562ZM19.5 8.25C15.8625 8.25 12.9375 11.175 12.9375 14.8125C12.9375 18.45 15.8625 21.375 19.5 21.375C23.1375 21.375 26.0625 18.45 26.0625 14.8125C26.0625 11.175 23.1375 8.25 19.5 8.25ZM19.5 17.625C18.7541 17.625 18.0387 17.3287 17.5113 16.8012C16.9838 16.2738 16.6875 15.5584 16.6875 14.8125C16.6875 14.0666 16.9838 13.3512 17.5113 12.8238C18.0387 12.2963 18.7541 12 19.5 12C20.2459 12 20.9613 12.2963 21.4887 12.8238C22.0162 13.3512 22.3125 14.0666 22.3125 14.8125C22.3125 15.5584 22.0162 16.2738 21.4887 16.8012C20.9613 17.3287 20.2459 17.625 19.5 17.625Z" fill= {color}/>
            </Svg>
            ;
          }
          return icon;
        },
      })}
      
      tabBarOptions={{
        activeTintColor: '#FF5A5F',
        inactiveTintColor: '#000000',
      }}>
      <Tab.Screen name="Profile" component={ProfilePage} options={{ headerShown: false }}/>
      <Tab.Screen 
        name="Home" 
        component={HomePage} 
        options={{ headerShown: false }}
        initialParams={{ dailyTodos: [], weeklyTodos: [] }}
        />
      <Tab.Screen name="Tasks" component={TaskPage} options={{ headerShown: false }}/>
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Welcome Page'>
        <Stack.Screen name= "Tab" component={TabNavigator} options={{ headerShown: false }}/>      
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Welcome Page" component={WelcomePage} />
        <Stack.Screen name="Sign Up" component={SignUpPage} />
        <Stack.Screen name="Settings" component={SettingsPage} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
