import React from "react";
import { createStackNavigator } from "react-navigation";
import MainScreen from "./src/MainScreen";
import CsHeader from "./src/main/header";
import Splash from "./src/Splash";
import Auth from "./src/Auth";

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
    Auth: {
      screen: Auth,
      navigationOptions: {
        header: null,
        headerLeft: null
      }
    }
  },
  {
    initialRouteName: "Auth"
  }
);

// App
const App = () => <AppStack />;

export default App;
