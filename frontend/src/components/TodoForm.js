import React, { useState } from "react";
import { Switch, Text, View, TextInput, Button, StyleSheet } from "react-native";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [text, onChangeText] = React.useState('');
  const [textMulti, onChangeTextMulti] = React.useState('');
  const [selectedIndex, setSelectedIndex] = useState(undefined);

  const onChangeControl = (event) => {
    setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
  };

  function handleTaskInputChange(value) {
    setTodo({ ...todo, task: value });
  }

  function handleSubmit() {
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuid() });
      setTodo({ ...todo, task: "" });
    }
  }

  return (
    <View>
      <Text>Personalize tasks:</Text>
      <SegmentedControl
        values={['Daily', 'Weekly']}
        selectedIndex={selectedIndex}
        onChange={onChangeControl}
      />
      <TextInput
        placeholder="Task name"
        value={todo.task}
        onChangeText={handleTaskInputChange}
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
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default TodoForm;
