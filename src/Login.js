import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Platform,
  Alert,
  TouchableOpacity
} from "react-native";
import propTypes from "prop-types";
import Firebase from "firebase";
import fireConfigs from "./auth/firebase.config";
import Separator from "./components/Separator";

// Style
const backColor = "#3a5998";
const foreColor = "white";
const linkColor = "white";
const flex = 1;
const flexD = "column";
const center = "center";
const logoD = 40;
const logoMar = 120;
const rlMar = 10;
const tbMar = 10;
const inputH = 80;
const inputR = 4;

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
    this.state = { error: "", email: "", password: "" };
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired
    }).isRequired
  };

  Login() {
    const { email, password, error } = this.state;
    console.log("--: Authenticating Member");

    if (password.length >= 6) {
      console.log("--: Policy Matched");
      if (!Firebase.app.length) {
        Firebase.initializeApp(fireConfigs);
      }
      try {
        Firebase.auth()
          .signInWithEmailAndPassword(email.trim(), password)
          .then(() => this.props.navigation.navigate("Landing"))
          .catch(() => {
            Alert.alert("Incorrect Credentials!!");
          });
      } catch (error) {
        console.log(error.toString());
      }
    } else {
      console.log("--: Policy Violated");
      Alert.alert("Incorrect Credentials");
    }
  }

  render() {
    return (
      <View style={styles.view}>
        {/** Logo container */}
        <View style={{ flex: 1, alignItems: "center" }}>
          <Image
            source={require("../assets/Logo.png")}
            style={{
              height: logoD,
              width: logoD,
              marginTop: logoMar
            }}
          />
        </View>

        {/** TextInput container */}
        <View
          style={{
            flex: 2,
            flexDirection: "column",
            justifyContent: "center",
            padding: 20
          }}
        >
          <View
            style={{
              flexDirection: "column",
              backgroundColor: "white",
              borderRadius: 3,
              marginBottom: 10
            }}
          >
            <TextInput
              placeholder="Email or phone number"
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ email: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.username}
              style={{ flexDirection: "row", padding: 10 }}
            />
            <Separator />
            <TextInput
              placeholder="Password"
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ password: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.username}
              secureTextEntry
              style={{ flexDirection: "row", padding: 10 }}
            />
          </View>
          <Button
            title="Login"
            color={Platform.OS == "android" ? "#4e69a2" : "white"}
            style={{ height: 30 }}
            onPress={() => {
              this.Login();
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: flexD,
            justifyContent: center,
            alignItems: center
          }}
        >
          {/** Useful Links container */}
          <View>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("GStarted");
              }}
            >
              <Text style={[styles.links]}>Sign up on Facebook</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={[styles.links, { marginTop: 20 }]}>Need help?</Text>
          </View>
        </View>
      </View>
    );
  }
}

export default Login;
