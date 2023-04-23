import React, { useState } from "react";

function ZainAxiosStart({ addTask }) {

const uri = `https://ebd8-2607-f470-32-101-00-2e0f.ngrok.io`;
 
const [task, addTask] = useState(null);
const [insult, addInsult] = useState(null);
const [taskG, getTask] = useState(null);
const [insultG, getInsult] = useState(null);

  // some app component as wrapper 
  function addTask() {
    console.log(task);
    taskAPI.post('beraterapp/views', {
      task_text: task
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }
  
  function addInsult() {
    console.log(insult);
    insultAPI.post('beraterapp/views', {
      insult_text: insult
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  function getTask() {
    console.log(insult);
    taskAPI.get('beraterapp/views', {
      task_text: taskG
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  function getInsult() {
    console.log(insult);
    insultAPI.get('beraterapp/views', {
      insult_text: insultG
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
