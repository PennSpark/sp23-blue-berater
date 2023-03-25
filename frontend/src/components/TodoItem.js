import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

function Todo({ todo, toggleComplete, removeTodo }) {
  function handleCheckboxClick() {
    toggleComplete(todo.id);
  }
  function handleRemoveClick() {
    removeTodo(todo.id);
  }
  return (
    <View>
      <TouchableOpacity onPress={handleCheckboxClick}>
        <View/>
      </TouchableOpacity>
      <Text>
        {todo.task}
      </Text>
      <TouchableOpacity onPress={handleRemoveClick}>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Todo;
