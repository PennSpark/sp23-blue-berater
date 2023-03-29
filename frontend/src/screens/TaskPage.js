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

  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  var day = daysOfWeek[new Date().getDay()];
  var date = new Date().getDate();
  var month = months[new Date().getMonth()];

  function getOrdinal(date) {
    if (date > 3 && date < 21) return 'th';
    switch (date % 10) {
      case 1:  return "st";
      case 2:  return "nd";
      case 3:  return "rd";
      default: return "th";
    }
  }

  return (
    <SafeAreaView>
      <Text>{day}, {month} {date}{getOrdinal(date)}</Text>
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
