import React, { useState } from "react";
import {SafeAreaView, View, Text, Switch, TextInput} from "react-native";
import CurrentDate from "../components/CurrentDate";

function AddTaskPage() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [text, onChangeText] = React.useState('');
    const [textMulti, onChangeTextMulti] = React.useState('');


    return (
        <SafeAreaView>
          <CurrentDate></CurrentDate>
            <View>
                <View>
                    <Text>Personalize tasks:</Text>
                </View>
                <Text>Task name:</Text>
                <TextInput
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Enter task name"
                />
                <Text>Repeat:</Text> 
                <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
                <Text>Every:</Text>
                <Text>Description:</Text>
                <TextInput
                    editable
                    multiline
                    numberOfLines={4}
                    maxLength={40}
                    onChangeText={textMulti => onChangeTextMulti(textMulti)}
                    value={textMulti}
                    placeholder="Enter description"
                />
          </View>
        </SafeAreaView>
      );
}

export default AddTaskPage;
