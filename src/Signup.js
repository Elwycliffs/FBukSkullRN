import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
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
class Signup extends Component {
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
    let rlMar = 10;
    let tbMar = 10;
    let bColor = "lightgray";
    let inputH = 120;
    let inputR = 4;
    let bWidth = 0.8;

    return (
      <View style={styles.view}>
        <View
          style={{
            flex: flex,
            flexDirection: flexD,
            alignItems: center
          }}
        >
          {/** Logo container */}
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: logoD,
              width: logoD,
              marginTop: logoMar
            }}
          />
        </View>
        <View
          style={{
            flex: flex,
            flexDirection: flexD,
            justifyContent: center,
            //alignItems: {center},
            marginLeft: rlMar,
            marginRight: tbMar
          }}
        >
          {/** TextInput container */}
          <View
            style={{
              flexDirection: flexD,
              backgroundColor: foreColor,
              marginBottom: tbMar,
              height: inputH,
              borderRadius: inputR
            }}
          >
            <TextInput
              style={{
                flex: flex,
                flexDirection: flexD,
                marginRight: rlMar,
                marginLeft: rlMar
              }}
              //caretHidden
              underlineColorAndroid="transparent"
              textContentType="emailAddress"
              placeholder="Email address or phone number"
              placeholderTextColor="lightgray"
            />
            <View
              style={{
                borderBottomColor: bColor,
                borderBottomWidth: bWidth
              }}
            />
            <TextInput
              style={{ flex: flex, marginLeft: rlMar, marginRight: rlMar }}
              //caretHidden
              underlineColorAndroid="transparent"
              textContentType="password"
              secureTextEntry
              placeholder="Password"
              placeholderTextColor="lightgray"
            />
            <View
              style={{
                borderBottomColor: bColor,
                borderBottomWidth: bWidth
              }}
            />
            <TextInput
              style={{ flex: flex, marginLeft: rlMar, marginRight: rlMar }}
              //caretHidden
              underlineColorAndroid="transparent"
              textContentType="password"
              secureTextEntry
              placeholder="Confirm Password"
              placeholderTextColor="lightgray"
            />
          </View>
          <Button
            title="Login"
            color={Platform.OS == "android" ? "#4e69a2" : "white"}
            onPress={() => {
              console.log("Auth");
            }}
          />
        </View>
        <View
          style={{
            flex: flex,
            flexDirection: flexD,
            justifyContent: center,
            alignItems: center
          }}
        >
          {/** Useful Links container */}
          <Text style={[styles.links]}>Login to Facebook</Text>
          <Text style={[styles.links, { marginTop: 20 }]}>Need help?</Text>
        </View>
      </View>
    );
  }
}

export default Signup;
