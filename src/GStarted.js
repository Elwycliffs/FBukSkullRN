import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Button
} from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#3a5998",
    justifyContent: "center"
  }
});

export default class GStarted extends Component {
  constructor(props) {
    super(props);
    this.state = {
      interests: [
        { name: "Skating", selected: false },
        { name: "Swimming", selected: false },
        { name: "Aerobics", selected: false },
        { name: "Movies", selected: false },
        { name: "Books", selected: false },
        { name: "Athletics", selected: false },
        { name: "Dancing", selected: false },
        { name: "Orchestra", selected: false },
        { name: "Sumo", selected: false },
        { name: "Wrestling", selected: false },
        { name: "MMA", selected: false },
        { name: "Bowling", selected: false },
        { name: "Surfing", selected: false },
        { name: "Snow-Boarding", selected: false },
        { name: "Cycling", selected: false },
        { name: "Racing", selected: false }
      ]
    };

    this.interestList = [];
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={{ flex: 1, justifyContent: "flex-end", padding: 20 }}>
          <Text
            style={{
              marginTop: 50,
              fontWeight: "800",
              fontSize: 16,
              color: "white"
            }}
          >
            We would like to know some of your interests.
          </Text>
        </View>
        <View
          style={{
            flex: 5,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginLeft: 10,
            marginRight: 10,
            flexWrap: "wrap"
          }}
        >
          {this.state.interests.map((props, key) => {
            return (
              <TouchableOpacity
                key={key}
                onPress={() => {
                  let stat = this.state.interests.slice();
                  stat[key].selected = this.state.interests[key].selected
                    ? false
                    : true;
                  this.setState({ interests: stat });
                  let action = this.state.interests[key].selected
                    ? this.interestList.push(props.name)
                    : this.interestList.pop(props.name);
                  //return action;
                }}
              >
                <View
                  key={key}
                  style={{
                    borderColor: props.selected ? "transparent" : "white",
                    backgroundColor: props.selected ? "green" : "transparent",
                    borderWidth: 0.6,
                    height: 40,
                    width: 105,
                    borderRadius: 40,
                    margin: 4,
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Text
                    style={{ fontWeight: "300", color: "white", fontSize: 14 }}
                  >
                    {props.name}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            padding: 10,
            paddingTop: 50
          }}
        >
          <View
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("Login");
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontWeight: "600",
                  fontSize: 18
                }}
              >
                Back
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 30,
              width: 90,
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              onPress={() => {
                let interests = this.interestList;
                this.props.navigation.navigate("Signup", {
                  interestList: interests
                });
              }}
            >
              <Text style={{ color: "white", fontWeight: "600", fontSize: 18 }}>
                Next
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
