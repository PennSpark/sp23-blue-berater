import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

 import LoginScreen from './LoginScreen'
 import SignUpPage from './SignUpPage'


export default function WelcomPage ({ navigation }) {

    return (
        <View style={styles.container}>
          <Text style={styles.title}>Welcome to BeRater</Text>
          <Text style={styles.subtitle}>Please log in or sign up to continue</Text>
          <View style={styles.buttonContainer}>
            <Button
              title="Log In"
              onPress={() => navigation.navigate('Login')}
            />
            <Button
              title="Sign Up"
              onPress={() => navigation.navigate('Sign Up')}
            />
          </View>
        </View>
      );

    }

    const styles = StyleSheet.create({
      container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      title: {
        fontSize: 32,
        fontWeight: 'bold',
        marginBottom: 20,
      },
      subtitle: {
        fontSize: 18,
        marginBottom: 40,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: 40,
      },
    });

    