import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import { CheckBox } from '@rneui/themed';
import Svg, {Path, Rect} from 'react-native-svg';

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
  const [editing, setEditing] = useState(true);
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
        onPress = {handleRemoveClick} 
        uncheckedIcon = 
          {<Svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect width="30" height="30" rx="10" fill="#FFB8B8"/>
          </Svg>}
        checkedIcon = 
          <Svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <Rect x="4" y="4" width="30" height="30" rx="10" fill="#FF5A5F"/>
            <Path d="M15.4166 20.9667L24.5124 11.8709C24.7951 11.5882 25.1548 11.4469 25.5916 11.4469C26.0284 11.4469 26.3881 11.5882 26.6708 11.8709C26.9534 12.1535 27.0947 12.5132 27.0947 12.95C27.0947 13.3868 26.9534 13.7466 26.6708 14.0292L16.4958 24.2042C16.1874 24.5125 15.8277 24.6667 15.4166 24.6667C15.0055 24.6667 14.6458 24.5125 14.3374 24.2042L10.3291 20.1959C10.0465 19.9132 9.90515 19.5535 9.90515 19.1167C9.90515 18.6799 10.0465 18.3202 10.3291 18.0375C10.6117 17.7549 10.9715 17.6136 11.4083 17.6136C11.8451 17.6136 12.2048 17.7549 12.4874 18.0375L15.4166 20.9667Z" fill="white"/>
          </Svg>
        />
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
