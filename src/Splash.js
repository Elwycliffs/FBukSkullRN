import React, { Component } from "react";
import { View, Image, StyleSheet } from "react-native";

class componentName extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.view}>
        {/** Logo here */}
        <Image
          source={require("../assets/Logo.png")}
          style={{ height: 50, width: 50 }}
        />
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

export default componentName;
