import React from "react";
import {Text, StyleSheet } from "react-native";
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_500Medium,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const styles = StyleSheet.create({
  home : {
    fontFamily : 'Nunito_700Bold',
    fontSize : 26,
    paddingLeft: 33,
    paddingTop: 27,
  },
  tasks : {
    fontFamily : 'Nunito_700Bold',
    fontSize : 26,
    color : "white",
    textAlign: "center",
    backgroundColor: "#FF5A5F",
    paddingTop: 33,
    paddingBottom: 7
  }
});

function CurrentDate({isHomePage}) {

    let [fontsLoaded] = useFonts({
      Nunito_500Medium,
      Nunito_700Bold,
    });
    
    if (!fontsLoaded) {
      return <AppLoading />;
    }
    const daysOfWeek = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  
    var day = daysOfWeek[new Date().getDay()];
    var date = new Date().getDate();
    var month = months[new Date().getMonth()];
  
    function getOrdinal(date) {
      if (date > 3 && date < 21) return 'th';
      switch (date % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
      }
    }

    return (
        <Text style = {isHomePage ? styles.home : styles.tasks}>{day}, {month} {date}{getOrdinal(date)}</Text>
    )
}

export default CurrentDate;
