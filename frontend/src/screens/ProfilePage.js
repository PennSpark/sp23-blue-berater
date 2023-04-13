import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

export default function ProfilePage() {

    return(
        <View style={styles.containter}>
            <Text style={styles.data}>Username: </Text>
            <Text style={styles.data}>BeRater Intensity: </Text>
            <Text style={styles.data}>Successful Tasks: </Text>
            <Text style={styles.data}>Unsuccessful Tasks: </Text>
            <View style={styles.buttonContainer}>
            <Button
              title="Edit Settings"
              onPress={() => navigation.navigate('Profile')}
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
    data: {
      flexDirection: 'row',
      fontSize: 12,
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