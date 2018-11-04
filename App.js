import React from "react";
import { createStackNavigator } from "react-navigation";
import Landing from "./src/Landing";
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
    Landing: {
      screen: Landing,
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
    initialRouteName: "Landing"
  }
);

// App
const App = () => <AppStack />;

export default App;
