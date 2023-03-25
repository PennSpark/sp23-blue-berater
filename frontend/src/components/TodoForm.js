import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { v4 as uuid } from "uuid";

function TodoForm({ addTodo }) {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

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
      <TextInput
        placeholder="Enter task"
        value={todo.task}
        onChangeText={handleTaskInputChange}
      />
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

export default TodoForm;
