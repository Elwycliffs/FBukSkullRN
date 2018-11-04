import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { isThisISOWeek } from "date-fns";

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
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false },
        { name: "Walking", selected: true },
        { name: "Walking", selected: false },
        { name: "Walking", selected: false }
      ]
    };
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
      </View>
    );
  }
}
