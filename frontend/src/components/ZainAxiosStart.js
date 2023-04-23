import React, { useState, useEffect } from "react";
import { Button, Text } from "react-native";
import axios from 'axios';

function ZainAxiosStart({}) {

  const uri = `https://dfaa-68-180-100-26.ngrok.io`;

  const [taskData, setTaskData] = useState([]);
  const [insultData, setInsultData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${uri}/get_tasks`);
      setTaskData(result.data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(`${uri}/get_insults`);
      setTaskData(result.data);
    };
    fetchData();
  }, []);

  return (
    <Button onPress={() => console.log(taskData)} title="Get Tasks" />
  );
}

export default ZainAxiosStart;