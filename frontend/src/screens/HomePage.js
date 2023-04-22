import React, { useState } from "react";
import {SafeAreaView, View, Text, Button, ScrollView, StyleSheet } from "react-native";
import TodoList from "../components/TodoList";
import CurrentDate from "../components/CurrentDate";
import SegmentedControl from '@react-native-segmented-control/segmented-control';
import { useNavigation } from '@react-navigation/native';
import Svg, {Path, Defs, Rect, G, ClipPath} from 'react-native-svg';
import AppLoading from 'expo-app-loading';
import {
  useFonts,
  Nunito_500Medium,
  Nunito_600SemiBold,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F7F7",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  button: {
    marginVertical: 10,
  },
  segmentedControl: {
    width: 165,
    height: 38,
    marginVertical: 20,
    fontFamily: 'Nunito_500Medium'
  },
  svgContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  text : {
    fontFamily: 'Nunito_500Medium'
  }
});

function HomePage() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [dailyTodos, setDailyTodos] = useState([]);
    const [weeklyTodos, setWeeklyTodos] = useState([]);
    const navigation = useNavigation();


    let [fontsLoaded] = useFonts({
      Nunito_500Medium,
      Nunito_600SemiBold,
      Nunito_700Bold,
    });
  
    let fontSize = 24;
    let paddingVertical = 6;
  
    if (!fontsLoaded) {
      return <AppLoading />;
    }

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
      <CurrentDate />
      <View>
      <Svg width="342" height="315" viewBox="0 0 342 315" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Rect x="2.5" y="2.5" width="337" height="310" rx="37.5" fill="#FF5A5F" stroke="black" stroke-width="5"/>
        <G clip-path="url(#clip0_389_314)">
        <Path d="M255.729 166.216C254.014 150.598 252.222 142.667 247.444 133.111C247.444 133.111 261.778 90.1111 252.222 72.4333C249.002 66.4802 216.848 80.4982 204.444 90.1111C204.444 90.1111 185.333 85.3429 171 85.3429C156.667 85.3429 137.556 90.1111 137.556 90.1111C125.152 80.4982 92.998 66.4802 89.7778 72.4333C80.2222 90.1111 94.5555 133.111 94.5555 133.111C89.7778 142.667 87.9861 150.598 86.2709 166.216C84.3837 183.34 88.139 196.99 89.7778 200C91.6411 203.421 101.087 214.453 113.667 223.889C132.778 238.222 161.444 243 171 243C180.556 243 209.222 238.222 228.333 223.889C240.913 214.453 250.359 203.421 252.222 200C253.861 196.99 257.616 183.34 255.729 166.216Z" fill="#FFCC4D"/>
        <Path d="M171 164.167C185.333 164.167 185.333 166.556 185.333 171.333C185.333 176.111 178.167 185.667 171 185.667C163.833 185.667 156.667 176.111 156.667 171.333C156.667 166.556 156.662 164.167 171 164.167Z" fill="#E75A70"/>
        <Path d="M94.5556 85.3333C96.6912 78.9215 121.502 90.1111 126.28 94.8889C126.28 94.8889 104.111 109.222 99.3333 123.556C99.3333 123.556 89.7778 99.6667 94.5556 85.3333ZM247.444 85.3333C245.309 78.9215 220.498 90.1111 215.72 94.8889C215.72 94.8889 237.889 109.222 242.667 123.556C242.667 123.556 252.222 99.6667 247.444 85.3333Z" fill="#F18F26"/>
        <Path d="M108.574 97.7699C108.574 91.0141 137.556 104.444 132.778 109.222C128 114 123.222 116.881 118.444 121.659C113.667 126.437 108.574 102.548 108.574 97.7699ZM233.426 97.7699C233.426 91.0141 204.444 104.444 209.222 109.222C214 114 218.778 116.881 223.556 121.659C228.333 126.437 233.426 102.548 233.426 97.7699Z" fill="#FFCC4D"/>
        <Path d = "M88.3493 190.444C87.8534 190.444 87.3699 190.289 86.9659 190.002C86.5619 189.714 86.2574 189.308 86.0946 188.84C85.9318 188.371 85.9188 187.864 86.0574 187.388C86.196 186.912 86.4794 186.49 86.8682 186.183C87.6422 185.576 106.075 171.276 137.742 173.737C139.056 173.832 140.04 174.984 139.94 176.297C139.839 177.611 138.712 178.691 137.374 178.495C107.594 176.231 90.0024 189.799 89.8304 189.938C89.4058 190.265 88.8852 190.443 88.3493 190.444ZM130.719 168.166C130.477 168.166 130.238 168.13 130.007 168.061C107.121 160.908 88.2633 166.403 88.0722 166.455C87.7719 166.546 87.4568 166.576 87.1449 166.544C86.833 166.513 86.5303 166.421 86.2541 166.272C85.9779 166.124 85.7337 165.922 85.5353 165.68C85.3369 165.437 85.1883 165.157 85.098 164.857C85.0076 164.557 84.9773 164.242 85.0087 163.93C85.0401 163.618 85.1327 163.315 85.2811 163.039C85.4295 162.763 85.6308 162.519 85.8736 162.32C86.1164 162.122 86.3959 161.973 86.6962 161.883C87.5227 161.634 107.174 155.925 131.426 163.498C131.97 163.669 132.434 164.028 132.736 164.512C133.038 164.995 133.157 165.571 133.071 166.135C132.986 166.698 132.702 167.213 132.271 167.585C131.839 167.958 131.289 168.164 130.719 168.166ZM253.651 190.444C254.147 190.444 254.63 190.289 255.034 190.002C255.438 189.714 255.743 189.308 255.906 188.84C256.068 188.371 256.081 187.864 255.943 187.388C255.804 186.912 255.521 186.49 255.132 186.183C254.358 185.576 235.925 171.276 204.258 173.737C203.946 173.76 203.641 173.845 203.361 173.987C203.081 174.128 202.832 174.323 202.628 174.561C202.424 174.799 202.269 175.075 202.171 175.373C202.074 175.671 202.036 175.985 202.06 176.297C202.161 177.611 203.288 178.691 204.626 178.495C234.406 176.231 251.998 189.799 252.17 189.938C252.594 190.265 253.115 190.443 253.651 190.444ZM211.281 168.166C211.516 168.166 211.759 168.132 211.993 168.061C234.879 160.908 253.737 166.403 253.928 166.455C254.228 166.546 254.543 166.576 254.855 166.544C255.167 166.513 255.47 166.421 255.746 166.272C256.022 166.124 256.266 165.922 256.465 165.68C256.663 165.437 256.812 165.157 256.902 164.857C256.992 164.557 257.023 164.242 256.991 163.93C256.96 163.618 256.867 163.315 256.719 163.039C256.571 162.763 256.369 162.519 256.126 162.32C255.884 162.122 255.604 161.973 255.304 161.883C254.477 161.634 234.826 155.925 210.574 163.498C210.031 163.669 209.566 164.028 209.264 164.512C208.962 164.995 208.843 165.571 208.929 166.135C209.014 166.698 209.298 167.213 209.73 167.585C210.161 167.958 210.711 168.164 211.281 168.166Z" fill="#FEE7B8"/>

        <Path d="M206.174 215.671C203.866 212.623 189.858 195.222 171 195.222C150.771 195.222 136.122 215.246 135.511 216.101C134.933 216.899 135.105 217.921 135.912 218.566C136.384 218.926 136.962 219.118 137.556 219.111C138.018 219.114 138.473 218.999 138.879 218.777C139.018 218.7 152.821 211.147 170.995 211.147C189.113 211.147 202.982 218.7 203.116 218.777C203.526 219.006 203.989 219.122 204.459 219.111C205.782 219.097 206.924 218.242 206.924 217.119C206.92 216.836 206.85 216.558 206.72 216.307C206.59 216.055 206.403 215.838 206.174 215.671Z" fill="black"/>
        <Path d="M142.333 157C147.611 157 151.889 149.513 151.889 140.278C151.889 131.042 147.611 123.556 142.333 123.556C137.056 123.556 132.778 131.042 132.778 140.278C132.778 149.513 137.056 157 142.333 157Z" fill="black"/>
        <Path d="M199.667 157C204.944 157 209.222 149.513 209.222 140.278C209.222 131.042 204.944 123.556 199.667 123.556C194.389 123.556 190.111 131.042 190.111 140.278C190.111 149.513 194.389 157 199.667 157Z" fill="black"/>
        <Path d="M185.988 133.259C185.426 133.104 184.903 132.833 184.452 132.462C184.002 132.092 183.635 131.631 183.374 131.109C182.822 129.995 182.695 128.717 183.017 127.516C183.339 126.315 184.088 125.272 185.123 124.583C208.219 109.776 226.288 114.377 227.048 114.583C229.37 115.204 230.698 117.774 230.015 120.326C229.337 122.868 226.91 124.43 224.592 123.818C224.315 123.747 208.969 120.106 189.318 132.7C188.834 133.025 188.287 133.242 187.713 133.339C187.139 133.435 186.551 133.408 185.988 133.259ZM156.012 133.264C155.448 133.41 154.86 133.436 154.286 133.34C153.712 133.245 153.164 133.03 152.677 132.71C132.945 120.063 117.551 123.79 117.398 123.828C115.076 124.42 112.654 122.848 111.985 120.307C111.316 117.765 112.635 115.214 114.947 114.592C115.707 114.392 133.776 109.791 156.872 124.592C158.998 125.954 159.782 128.873 158.621 131.119C158.36 131.639 157.994 132.099 157.544 132.468C157.095 132.838 156.573 133.109 156.012 133.264Z" fill="black"/>
        </G>
        <Defs>
        <ClipPath id="clip0_389_314">
        <Rect width="172" height="172" fill="white" transform="translate(85 71)"/>
        </ClipPath>
        </Defs>
      </Svg>

        <Text>Tasks for the: </Text>
        <SegmentedControl
        values={['day', 'week']}
        selectedIndex={selectedIndex}
        onChange={onChangeControl}
        style = {styles.segmentedControl}
        tintColor = "#FFB8B8"
        backgroundColor = "D9D9D9"
        fontStyle = {{
          color: 'black',
          fontSize: 20,
          fontFamily: 'Arial',
        }}
      />
        </View>
        <View>
        {selectedIndex == 0 ? (
        <View>
            <Text >Daily todos here...</Text>
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
