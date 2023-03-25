import React, { useState } from "react";
import {SafeAreaView, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";

function TaskPage() {
    const [dailyTodos, setDailyTodos] = useState([]);
    const [weeklyTodos, setWeeklyTodos] = useState([]);
    
    function addDailyTodo(todo) {
        setDailyTodos([todo, ...dailyTodos]);
      }
    
      function addWeeklyTodo(todo) {
        setWeeklyTodos([todo, ...weeklyTodos]);
      }

  function toggleComplete(id) {
    const updatedDailyTodos = dailyTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });
      const updatedWeeklyTodos = weeklyTodos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      });

    setDailyTodos(updatedDailyTodos);
    setWeeklyTodos(updatedWeeklyTodos);
  }

  function removeDailyTodo(id) {
    const newTodos = dailyTodos.filter((item) => item.id !== id);
    setDailyTodos(newTodos);
  }

  function removeWeeklyTodo(id) {
    const newTodos = weeklyTodos.filter((item) => item.id !== id);
    setWeeklyTodos(newTodos);
  }

  return (
    <SafeAreaView>
        <View>
            <View>
                <Text>Daily Tasks</Text>
                <TodoForm addTodo={addDailyTodo} />
            </View>
            <TodoList
                todos={dailyTodos}
                removeTodo={removeDailyTodo}
                toggleComplete={toggleComplete}
            />
      </View>
      <View>
            <View>
                <Text>Weekly Tasks</Text>
                <TodoForm addTodo={addWeeklyTodo} />
            </View>
            <TodoList
                todos={weeklyTodos}
                removeTodo={removeWeeklyTodo}
                toggleComplete={toggleComplete}
            />
      </View>
    </SafeAreaView>
  );
}

export default TaskPage;
