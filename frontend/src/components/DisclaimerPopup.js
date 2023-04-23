import React, {useState} from 'react';
import {View, Text, Modal, Button, StyleSheet, onPress, Svg, Path, Pressable} from 'react-native';
import { CheckBox } from '@rneui/themed';


const Popup = ({ visible, onAccept, title, message, acceptText, cancelText }) => {
    const acceptButtonText = acceptText || 'Accept';
  //  const cancelButtonText = cancelText || 'Cancel';

  const [showPopup, setShowPopup] = useState(true);
  const [check, setCheck] = useState(false);
  const acceptPopup = () => {
    setShowPopup(false);
  }; 
  const checkedBox = () => {
    setShowPopup(true);
  }
  
    return (
      <Modal presentationStyle="pageSheet" visible={showPopup} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', padding: 20, width: 300, length : 500}}>
            {title && <Text style={{ fontSize: 20, fontWeight: 'bold', paddingBottom: 15}}>{title}</Text>}
            {message && <Text style={{paddingBottom: 15}}>{message}</Text>}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Button title={acceptButtonText} onPress={acceptPopup} />
            </View>
            <Pressable
            style = {styles.continue}
            onPress={acceptPopup}
            >
              <Text style = {styles.textButton}>ACCEPT</Text>
          </Pressable>
          </View>
        </View>
      </Modal>
    );
  };

  const styles = StyleSheet.create({
    continue : {
      position: 'absolute',
      left: '14.1%',
      right: '14.1%',
      top : '90%',
      bottom: '28.91%',
      backgroundColor: "#FF6767",
      width: 220,
      height: 40,
      borderRadius: 40,
      alignItems: 'center',
      justifyContent: 'center',
    }, 

    textButton : {
      fontFamily: 'Nunito_700Bold',
      fontSize: 20,
      color: 'white',
      justifyContent: 'center',
    },
  
  });
  
  export default Popup;
  
