import React from 'react';
import { Text, View } from 'react-native';
import InputField from '../components/InputField';
import { Icon } from 'react-native-elements';



export default function LoginScreen () {
  return (
    <View style={{paddingHorizontal: 25}}>
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Login
        </Text>

        <InputField
          label={'Email ID'}
          icon={
            <Icon
            name="mail-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Password'}
          icon={
            <Icon
            name="ios-lock-closed-outline"
            size={20}
            color="#666"
            style={{marginRight: 5}}
          />
          }
          inputType="password"
        />
        <View style={styles.buttonContainer}>
            <Button
              title="Log In"
              onPress={() => navigation.navigate('Profile')}
            />
          </View>
    </View>
  )
}
