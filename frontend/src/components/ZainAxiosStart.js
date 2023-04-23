import React, { useState } from "react";
import {Button, Text} from "react-native";
import axios from 'axios';

function ZainAxiosStart({ getTask }) {

const uri = `https://dfaa-68-180-100-26.ngrok.io`;
 
const [task, addTask1] = useState(null);
const [insult, addInsult1] = useState(null);
const [taskG, getTask1] = useState(null);
const [insultG, getInsult1] = useState(null);

  // some app component as wrapper 
  function addTask() {
    console.log(task);
    beraterAPI.post('beraterapp/views', {
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
    beraterAPI.post('beraterapp/views', {
      insult_text: insult
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

  function getTask() {
    console.log(task);
    beraterAPI.get('beraterapp/views', {
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
    beraterAPI.get('beraterapp/views', {
      insult_text: insultG
    }).then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
    })
  }

const beraterAPI = axios.create({
      baseURL: uri,
      timeout: 1000,
    })

  return (
    <Button onPress =  {getTask} title = "TEST"></Button> 
  );
} 

export default ZainAxiosStart;