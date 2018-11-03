import React from "react";
import { createStackNavigator } from "react-navigation";
import Login from "./auth/Login";

// Stack Navigator - Returns a React Component
const AuthStack = createStackNavigator(
  {
    Login: {
      screen: Login,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "Login"
  }
);

// App
const Auth = () => <AuthStack />;

export default Auth;
