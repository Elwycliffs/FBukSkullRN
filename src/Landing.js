import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import Home from "./main/Home";
import Notifications from "./main/Notifications";
import Media from "./main/Media";
import Profile from "./main/Profile";
import Groups from "./main/Groups";

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
    GroupTab: { screen: Groups },
    MediaTab: { screen: Media },
    ProfileTab: { screen: Profile },
    NotificationsTab: { screen: Notifications }
    //SettingsTab:{screen: Settings}
  },
  {
    animationEnabled: true,
    swipeEnabled: true,
    tabBarPosition: "top",
    tabBarOptions: {
      style: {
        backgroundColor: "white"
      },
      activeTintColor: "#000",
      inactiveTintColor: "#d9dbe0",
      showLabel: false,
      showIcon: true,
      iconStyle: { height: 30, width: 30 }
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
