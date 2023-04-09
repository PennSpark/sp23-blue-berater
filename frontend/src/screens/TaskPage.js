import React, { useState } from "react";
import {SafeAreaView, View, Text, Button, ScrollView } from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import CurrentDate from "../components/CurrentDate";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';


function TaskPage() {
    const [dailyTodos, setDailyTodos] = useState([]);
    const [weeklyTodos, setWeeklyTodos] = useState([]);
    const navigation = useNavigation();

    function addDailyTodo() {
        todo = {
          id: "",
          task: "",
          completed: false,
        };
        setDailyTodos([todo, ...dailyTodos]);
      }
    
      function addWeeklyTodo() {
        todo = {
          id: "",
          task: "",
          completed: false,
        };
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
      <CurrentDate></CurrentDate>
        <Text>Daily Tasks</Text>
        <Icon 
            name = "add-task" 
            onPress = {addDailyTodo}
        />
        <ScrollView>
            <TodoList
                todos={dailyTodos}
                removeTodo={removeDailyTodo}
                toggleComplete={toggleComplete}
            />
        </ScrollView>
        <Text>Weekly Tasks</Text>
        <Icon 
            name = "add-task" 
            onPress = {addWeeklyTodo}
        />
        <ScrollView>
            <TodoList
                todos={weeklyTodos}
                removeTodo={removeWeeklyTodo}
                toggleComplete={toggleComplete}
            />
        </ScrollView>
    </SafeAreaView>
  );
}

export default TaskPage;
