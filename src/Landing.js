import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import Home from "./main/Home";
import Likes from "./main/Likes";
import Media from "./main/Media";
import Profile from "./main/Profile";
import Search from "./main/Search";
import { Platform } from "react-native";

// Themes and Colors
//const background = "#fff";

// Defaults
const iconPadding = 20;

// Styles
/*const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: "center",
    justifyContent: "center"
  }
});*/

const AppTabNav = createMaterialTopTabNavigator(
  {
    HomeTab: { screen: Home },
    SearchTab: { screen: Search },
    MediaTab: { screen: Media },
    LikesTab: { screen: Likes },
    ProfileTab: { screen: Profile }
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      style: {
        ...Platform.select({
          android: {
            backgroundColor: "white"
          }
        })
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d9dbe0",
      showLabel: false,
      showIcon: true
    }
  }
);

class MainScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <AppTabNav />;
  }
}

export default MainScreen;
