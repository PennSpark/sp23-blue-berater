import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, Button, SafeAreaView } from 'react-native';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
//import Svg, { Path, Rect, Defs, ClipPath} from 'react-native-svg';
import Svg, {Path, Defs, Circle, G, ClipPath, Rect} from 'react-native-svg';


export default function ProfilePage({navigation}) {

    return(
        <SafeAreaView style={styles.containter}>
            <Text style={styles.data}>Username: </Text>
            <Text style={styles.data}>BeRater Intensity: </Text>
            <Text style={styles.data}>Successful Tasks: </Text>
            <Text style={styles.data}>Unsuccessful Tasks: </Text>
            <View style={styles.buttonContainer}>
            <Button
              title="Edit Settings"
              onPress={() => navigation.navigate('Settings')}
            />
          </View>
        </SafeAreaView>
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
    icon: {
      width: 50,
      height: 50,
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '100%',
      paddingHorizontal: 40,
    },
  });
