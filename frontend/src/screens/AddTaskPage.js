import React, { useState } from "react";
import {SafeAreaView, View, Text, Switch, TextInput} from "react-native";
import CurrentDate from "../components/CurrentDate";
import TodoForm from "../components/TodoForm";

function AddTaskPage() {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [text, onChangeText] = React.useState('');
    const [textMulti, onChangeTextMulti] = React.useState('');

    const [dailyTodos, setDailyTodos] = useState([]);
    const [weeklyTodos, setWeeklyTodos] = useState([]);

    function addDailyTodo(todo) {
        setDailyTodos([todo, ...dailyTodos]);
      }
    
      function addWeeklyTodo(todo) {
        setWeeklyTodos([todo, ...weeklyTodos]);
      }
       
    return (
        <SafeAreaView>
          <CurrentDate></CurrentDate>
            <View>
            <TodoForm addTodo={addWeeklyTodo} />
            </View>
        </SafeAreaView>
      );
}

export default AddTaskPage;
