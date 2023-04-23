import React from 'react';
import { Text, View, StyleSheet, Button, useState, TouchableOpacity} from 'react-native';
import InputField from '../components/InputField';
import { Icon } from 'react-native-elements';
import DisclaimerPopup from '../components/DisclaimerPopup';


function SignUpPage ({navigation}) {
  return (

    <View style={{paddingHorizontal: 25}}>
      <DisclaimerPopup
        visible={true}
      //  onAccept={acceptPopup}
        title="Disclaimer"
        message="BeRater is an non-profit app reliant on harsh and possibly mentally scarring insults in order to motivate users into being more productive. Penn Spark and the members of the BeRater team do not take any responsibility for any mental, physical, or emotional trauma incurred by the use of this app. Please be advised that there may be swears and cursing beyond your ability to handle. Users of this app must be 18+ years of age."
      />
      
        <Text
          style={{
            fontFamily: 'Roboto-Medium',
            fontSize: 28,
            fontWeight: '500',
            color: '#333',
            marginBottom: 30,
          }}>
          Sign Up!
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
              title="Sign Up"
              onPress={() => navigation.navigate('Home')}
            />
          </View>
     
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 40,
  },
});

export default SignUpPage;
