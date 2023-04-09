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

  function handleTitleClick() {
    setEditing(true);
  }

  function handleTitleSubmit() {
    setEditing(false);
    todo.task = title;
  }

  const [check, setCheck] = useState(false);
  const [editing, editTitle] = useState(false);
  const [title, setTitle] = useState(todo.task);


  return (
    <View>
      <TouchableOpacity onPress={handleCheckboxClick}>
        <View/>
      </TouchableOpacity>
        <CheckBox 
        // title={todo.task}
        checked={check}
        onPressIn={() => setCheck(!check)} 
        onPress = {handleRemoveClick} />
        {editing ? (
        <TextInput
          value={title}
          onChangeText={setTitle}
          onSubmitEditing={handleTitleSubmit}
          onBlur={handleTitleSubmit}
        />
      ) : (
        <TouchableOpacity onPress={handleTitleClick}>
          <Text>{title}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default TodoItem;
