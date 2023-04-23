import React, {useState} from 'react';
import {View, Text, Modal, Button, TouchableOpacity, onPress, Svg, Path} from 'react-native';


const Popup = ({ visible, onAccept, title, message, acceptText, cancelText }) => {
    const acceptButtonText = acceptText || 'Accept';
  //  const cancelButtonText = cancelText || 'Cancel';

  const [showPopup, setShowPopup] = useState(true);
  const acceptPopup = () => {
    setShowPopup(false);
  };
  
    return (
      <Modal visible={showPopup} animationType="slide" transparent>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ backgroundColor: '#fff', padding: 20 }}>
            {title && <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{title}</Text>}
            {message && <Text>{message}</Text>}
            <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 20 }}>
              <Button title={acceptButtonText} onPress={acceptPopup} />
              {/* <TouchableOpacity onPress={onPress}>
                <Svg width={50} height={50} viewBox="0 0 50 50">
                <Path d="M12.2084 19.9584H14.7917V14.7917H19.9584V12.2084H14.7917V7.04171H12.2084V12.2084H7.04171V14.7917H12.2084V19.9584ZM13.5 26.4167C11.7132 26.4167 10.0341 26.0774 8.46254 25.3989C6.89101 24.7212 5.524 23.8011 4.3615 22.6386C3.199 21.4761 2.2789 20.1091 1.60121 18.5375C0.922652 16.966 0.583374 15.2868 0.583374 13.5C0.583374 11.7132 0.922652 10.0341 1.60121 8.46254C2.2789 6.89101 3.199 5.524 4.3615 4.3615C5.524 3.199 6.89101 2.27847 8.46254 1.59992C10.0341 0.922221 11.7132 0.583374 13.5 0.583374C15.2868 0.583374 16.966 0.922221 18.5375 1.59992C20.1091 2.27847 21.4761 3.199 22.6386 4.3615C23.8011 5.524 24.7212 6.89101 25.3989 8.46254C26.0774 10.0341 26.4167 11.7132 26.4167 13.5C26.4167 15.2868 26.0774 16.966 25.3989 18.5375C24.7212 20.1091 23.8011 21.4761 22.6386 22.6386C21.4761 23.8011 20.1091 24.7212 18.5375 25.3989C16.966 26.0774 15.2868 26.4167 13.5 26.4167ZM13.5 23.8334C16.3848 23.8334 18.8282 22.8323 20.8302 20.8302C22.8323 18.8282 23.8334 16.3848 23.8334 13.5C23.8334 10.6153 22.8323 8.17192 20.8302 6.16983C18.8282 4.16775 16.3848 3.16671 13.5 3.16671C10.6153 3.16671 8.17192 4.16775 6.16983 6.16983C4.16775 8.17192 3.16671 10.6153 3.16671 13.5C3.16671 16.3848 4.16775 18.8282 6.16983 20.8302C8.17192 22.8323 10.6153 23.8334 13.5 23.8334Z" fill="black"/>
                </Svg>
             </TouchableOpacity> */}
              {/* <Button title={cancelButtonText} onPress={onCancel} /> */}
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  
  export default Popup;
  