import React, { useState } from "react";

function ZainAxiosStart({ addTask }) {

const uri = `https://ebd8-2607-f470-32-101-00-2e0f.ngrok.io`;
 
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
} 

export const ZainAxiosStart = axios.create({
    baseURL: uri,
    timeout: 1000,
  });
