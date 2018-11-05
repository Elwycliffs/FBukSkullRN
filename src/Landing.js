import React, { Component } from "react";
import { createMaterialTopTabNavigator } from "react-navigation";
import Home from "./main/Home";
import Notifications from "./main/Notifications";
import Media from "./main/Media";
import Profile from "./main/Profile";
import Groups from "./main/Groups";
import propTypes from "prop-types";
import FireBase from "firebase";
import fireConfigs from "./auth/firebase.config";

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
    this.state = { userName: "", email: "", avatar: "" };
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired
    }).isRequired
  };

  getInfo() {
    if (!FireBase.app.length) {
      FireBase.initializeApp(fireConfigs);
    }

    this.setState({ userName: FireBase.auth().currentUser.displayName });
    this.setState({ email: FireBase.auth().currentUser.email });
    this.setState({ avatar: FireBase.auth().currentUser.photoURL });
  }

  render() {
    let username = this.state.userName;
    let email = this.state.email;
    let avatar = this.state.avatar;
    return <AppTabNav userName={username} email={email} avatar={avatar} />;
  }
}

export default MainScreen;
