import React, { useState } from "react";

function ZainAxiosStart({ addTodo }) {

const uri = `https://1391-68-180-100-41.ngrok.io`;
 
  // some app component as wrapper 
    function addTodo() {
      console.log(todo);
      todoAPI.post('todos/create', {
        todo_text: todo
      }).then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      })
    }
} 

export const ZainAxiosStart = axios.create({
    baseURL: uri,
    timeout: 1000,
  });
