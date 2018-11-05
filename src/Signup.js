import React, { Component } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  Button,
  Platform,
  TouchableOpacity,
  Alert
} from "react-native";
import Separator from "./components/Separator";
import Firebase from "firebase";
import fireConfigs from "./auth/firebase.config";
import propTypes from "prop-types";

// Style
const backColor = "#3a5998";
const linkColor = "white";
const styles = StyleSheet.create({
  view: {
    flex: 1,
    flexDirection: "column",
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
    this.state = {
      error: "",
      username: "",
      email: "",
      password: "",
      conPassword: ""
    };

    this.interests = [];
  }

  componentDidMount() {
    const interests = this.props.navigation.state.params.interestList;

    for (let i = 0; i < interests.length; i++) {
      this.interests.push(interests[i]);
    }
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired
    }).isRequired
  };

  writeData() {
    let email = this.state.email;
    let username = this.state.username;
    let interests = this.interests;

    Firebase.database()
      .ref()
      .set({
        email,
        username,
        interests
      })
      .then(data => {
        // Successful Callback
        return console.log("data: ", data);
      })
      .catch(error => {
        // error callback
        return console.log("error ", error);
      });
  }

  register() {
    const { username, email, password, conPassword } = this.state;

    console.log(username.length);

    if (username.length && password.length && password === conPassword) {
      if (!Firebase.app.length) {
        Firebase.initializeApp(fireConfigs);
      }
      try {
        Firebase.auth()
          .createUserWithEmailAndPassword(email.trim(), password)
          .then(() => {
            Firebase.auth().currentUser.updateProfile({
              displayName: username,
              photoURL:
                "https://png2.kisspng.com/20180404/use/kisspng-social-media-computer-icons-snapchat-snapchat-5ac4e124204289.5886788015228521321321.png"
            });
            this.writeData();
            this.props.navigation.navigate("Landing", { username, email });
          })
          .catch(() => {
            Alert.alert("Invalid Credentials");
          });
      } catch (error) {
        console.log(error.toString());
      }
    } else {
      Alert.alert("Invalid Credentials");
    }
  }

  render() {
    let flexD = "column";
    let center = "center";
    let logoD = 40;
    let logoMar = 120;

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
              placeholder="Username"
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ username: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.username}
              style={{ flexDirection: "row", padding: 10 }}
            />
            <Separator />
            <TextInput
              placeholder="Email or phone number"
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ email: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.email}
              style={{ flexDirection: "row", padding: 10 }}
            />
            <Separator />
            <TextInput
              placeholder="Password"
              secureTextEntry
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ password: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.password}
              style={{ flexDirection: "row", padding: 10 }}
            />
            <Separator />
            <TextInput
              placeholder="Confirm Password"
              secureTextEntry
              placeholderTextColor="lightgray"
              underlineColorAndroid="transparent"
              onChangeText={text => this.setState({ conPassword: text })}
              ref={input => {
                this.textInput = input;
              }}
              value={this.state.conPassword}
              style={{ flexDirection: "row", padding: 10 }}
            />
          </View>
          <Button
            title="Register"
            color={Platform.OS == "android" ? "#4e69a2" : "white"}
            style={{ height: 30 }}
            onPress={() => {
              this.register();
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
                this.props.navigation.navigate("Login");
              }}
            >
              <Text style={[styles.links]}>Login to Facebook</Text>
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

export default Signup;
