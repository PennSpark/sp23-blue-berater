import React from "react";
import { FlatList } from "react-native";
import TodoItem from "../components/TodoItem";

function TodoList({ todos, toggleComplete, removeTodo }) {
  function renderItem({ item }) {
    return (
      <TodoItem
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
