import React, { useState } from "react";
import {SafeAreaView, View, Text, Button, ScrollView } from "react-native";
import TodoList from "../components/TodoList";
import CurrentDate from "../components/CurrentDate";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useNavigation } from '@react-navigation/native';




function HomePage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dailyTodos, setDailyTodos] = useState([]);
    const [weeklyTodos, setWeeklyTodos] = useState([]);
    const navigation = useNavigation();

    const onChangeControl = (event) => {
        setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
      };
  
      function addDailyTodo() {
          todo = {
            id: uuid(),
            task: "",
            completed: false,
          };
          setDailyTodos([todo, ...dailyTodos]);
        }
      
        function addWeeklyTodo() {
          todo = {
            id: uuid(),
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
      <View>
        <Text>Tasks for the: </Text>
        <SegmentedControl
        values={['day', 'week']}
        selectedIndex={selectedIndex}
        onChange={onChangeControl}
      />
        </View>
        <View>
        {selectedIndex == 0 ? (
        <View>
            <Text>Daily todos here...</Text>
            <TodoList
            todos={dailyTodos}
            removeTodo={removeDailyTodo}
            toggleComplete={toggleComplete}
            />
        </View>
      ) : (
        <View>
            <Text>Weekly todos here...</Text>
            <TodoList
            todos={weeklyTodos}
            removeTodo={removeWeeklyTodo}
            toggleComplete={toggleComplete}
            />
        </View>
      )}
        </View>
    </SafeAreaView>
  );
}

export default HomePage;
