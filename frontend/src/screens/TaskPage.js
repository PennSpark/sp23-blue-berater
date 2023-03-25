import React, { useState } from "react";
import {SafeAreaView, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TaskPage() {
  const [todos, setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  function removeTodo(id) {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  }

  return (
    <SafeAreaView>
        <View>
            <View>
                <Text>Daily Tasks</Text>
                <TodoForm addTodo={addTodo} />
            </View>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
      </View>
      <View>
            <View>
                <Text>Weekly Tasks</Text>
                <TodoForm addTodo={addTodo} />
            </View>
            <TodoList
                todos={todos}
                removeTodo={removeTodo}
                toggleComplete={toggleComplete}
            />
      </View>
    </SafeAreaView>
  );
}

export default TaskPage;
