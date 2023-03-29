import React, { useState } from "react";
import {SafeAreaView, View, Text } from "react-native";
import TodoForm from "../components/TodoForm";
import TodoList from "../components/TodoList";
import CurrentDate from "../components/CurrentDate";
import { Collapse, CollapseHeader, CollapseBody } from "accordion-collapse-react-native";


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
      <CurrentDate></CurrentDate>
      <Collapse>
            <CollapseHeader>
                  <Text>Daily Tasks</Text>
                  <TodoForm addTodo={addDailyTodo} />
            </CollapseHeader>
            <CollapseBody>
              <TodoList
                  todos={dailyTodos}
                  removeTodo={removeDailyTodo}
                  toggleComplete={toggleComplete}
              />
            </CollapseBody>
        </Collapse>
        <Collapse>
              <CollapseHeader>
                  <Text>Weekly Tasks</Text>
                  <TodoForm addTodo={addWeeklyTodo} />
              </CollapseHeader>
              <CollapseBody>
                <TodoList
                    todos={weeklyTodos}
                    removeTodo={removeWeeklyTodo}
                    toggleComplete={toggleComplete}
                />
              </CollapseBody>
      </Collapse>
    </SafeAreaView>
  );
}

export default TaskPage;
