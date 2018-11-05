import React, { Component } from "react";
import { View, Image, ActivityIndicator, StyleSheet } from "react-native";
import fireBase from "firebase";
import fireConfigs from "./auth/firebase.config";
import propTypes from "prop-types";

class initiate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired
    }).isRequired
  };

  componentDidMount() {
    setTimeout(() => {
      fireBase.initializeApp(fireConfigs);
      fireBase.auth().onAuthStateChanged(user => {
        this.props.navigation.navigate(user ? "Landing" : "Login");
      });
    }, 1000);
  }

  render() {
    return (
      <View style={[styles.view, { flex: 1, justifyContent: "space-evenly" }]}>
        {/** Logo here */}
        <Image
          source={require("../assets/Logo.png")}
          style={{ height: 45, width: 45 }}
        />
        <ActivityIndicator size="large" color="white" />
        <View />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#3a5998"
  }
});

export default initiate;
