import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Alert,
  Platform
} from "react-native";
import FireBase from "./auth/FireBase";

// Style
const backColor = "#3a5998";
const foreColor = "white";
const linkColor = "white";
const styles = StyleSheet.create({
  view: {
    flexDirection: "column",
    flex: 1,
    backgroundColor: backColor
  },
  links: {
    color: linkColor
  }
});

// Object
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  auth() {
    // Extends firebase object
  }

  render() {
    let flex = 1;
    let flexD = "column";
    let center = "center";
    let logoD = 40;
    let logoMar = 120;
    let rlMar = 20;
    let tbMar = 10;
    let brdColor = "gray";
    let inputH = 80;
    let inputR = 10;
    let brdWidth = 0.5;

    return (
      <View style={styles.view}>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          {/** Logo container */}
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: 40,
              width: 40,
              marginTop: 120
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            //alignItems: {center},
            marginLeft: 20,
            marginRight: 20
          }}
        >
          {/** TextInput container */}
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              marginBottom: 10,
              height: 80,
              borderRadius: 2
            }}
          >
            <TextInput
              style={{
                flex: 1,
                flexDirection: "column",
                marginRight: 10,
                marginLeft: 10
              }}
              //caretHidden
              underlineColorAndroid="transparent"
              textContentType="emailAddress"
              placeholder="Email address or phone number"
              placeholderTextColor="lightgray"
            />
            <View
              style={{
                borderBottomColor: "gray",
                borderBottomWidth: 0.5
              }}
            />
            <TextInput
              style={{ flex: 1, marginLeft: 10, marginRight: 10 }}
              //caretHidden
              underlineColorAndroid="transparent"
              textContentType="password"
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="lightgray"
            />
          </View>
          <Button
            title="Login"
            color={Platform.OS == "android" ? "#4e69a2" : "white"}
            onPress={() => {
              Alert.alert("Send it!!!");
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          {/** Useful Links container */}
          <Text style={[styles.links]}>Sign up for Facebook</Text>
          <Text style={[styles.links, { marginTop: 10 }]}>Need help?</Text>
        </View>
      </View>
    );
  }
}

export default Login;
