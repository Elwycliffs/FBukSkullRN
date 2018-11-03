import React from "react";
import { Header } from "react-navigation";
import { View, Text, StyleSheet, Platform } from "react-native";

const styles = StyleSheet.create({
  view: {
    marginTop: Platform.OS == "ios" ? 20 : 0
  }
});

const customHeader = props => {
  return (
    <View style={styles.view}>
      <Header {...props} />
    </View>
  );
};

export default customHeader;
