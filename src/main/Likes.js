import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon } from "native-base";

// Themes and Colors
const background = "#fff";

// Defaults
//const iconPadding = 20;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background,
    alignItems: "center",
    justifyContent: "center"
  }
});

class Likes extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static navigationOptions = {
    tabBarIcon: ({ tintcolor }) => (
      <Icon name="ios-heart" style={{ color: tintcolor }} />
    )
  };

  render() {
    return (
      <View style={styles.container}>
        <Text>Likes Tab </Text>
      </View>
    );
  }
}

export default Likes;
