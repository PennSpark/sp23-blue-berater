import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CheckBox } from '@rneui/themed';

function TodoItem({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }

  const [check, setCheck] = useState(false);

  return (
    <View>
      <TouchableOpacity onPress={handleCheckboxClick}>
        <View/>
      </TouchableOpacity>
        <CheckBox 
        title={todo.task}
        checked={check}
        onPressIn={() => setCheck(!check)} 
        onPress = {handleRemoveClick} />
    </View>
  );
}

export default TodoItem;
