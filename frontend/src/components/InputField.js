import React from 'react';
import {View, Text, TouchableOpacity, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  input : {
    backgroundColor: '#D9D9D9',
    // flexDirection: 'row',
    marginBottom: 25,
    width: 280,
    height: 40,
    borderRadius: 40,
    // flex: 1
    flexDirection: 'row',
        borderBottomColor: '#ccc',
        borderBottomWidth: 1,
        paddingBottom: 2,
        // marginBottom: 25,
  },
  text : {
    fontFamily: 'Nunito_500Medium',
    fontSize: 14,
    color: 'black',
    paddingLeft: 20,
  }
})

export default function InputField({
  label,
  icon,
  inputType,
  keyboardType,
  fieldButtonLabel,
  fieldButtonFunction,
}) {
  return (
    <View
      style={styles.input}>
      {icon}
      {inputType == 'password' ? (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          secureTextEntry={true}
          style = {styles.text}
        />
      ) : (
        <TextInput
          placeholder={label}
          keyboardType={keyboardType}
          style = {styles.text}
        />
      )}
      <TouchableOpacity onPress={fieldButtonFunction}>
        <Text style = {styles.text}>{fieldButtonLabel}</Text>
      </TouchableOpacity>
    </View>
  );
}