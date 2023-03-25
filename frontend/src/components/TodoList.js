import React from "react";
import { FlatList } from "react-native";
import Todo from "./Todo";

function TodoList({ todos, toggleComplete, removeTodo }) {
  function renderItem({ item }) {
    return (
      <Todo
        todo={item}
        removeTodo={removeTodo}
        toggleComplete={toggleComplete}
      />
    );
  }

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
}

export default TodoList;
