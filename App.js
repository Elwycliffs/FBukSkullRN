import React from "react";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./src/MainScreen";
import CsHeader from "./src/main/header";
import Splash from "./src/Splash";
import Login from "./src/Login";
import Signup from "./src/Signup";

// Stack Navigator - Returns a React Component
const AppStack = createStackNavigator(
  {
    Splash: {
      screen: Splash,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    },
    Main: {
      screen: MainScreen,
      navigationOptions: { header: props => <CsHeader {...props} /> }
    },
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "Main"
  }
);

// App
const App = () => <AppStack />;

export default App;
