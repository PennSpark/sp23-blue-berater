import React from "react";
import {Text } from "react-native";


function CurrentDate() {
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
        <Text>{day}, {month} {date}{getOrdinal(date)}</Text>
    )
}

export default CurrentDate;
