import React from "react";
import { createStackNavigator } from "react-navigation";
import Landing from "./Landing";
import { View, TouchableOpacity, Platform } from "react-native";
import { Icon } from "native-base";

const stack = createStackNavigator(
  {
    Landing: { screen: Landing }
  },
  {
    initialRouteName: "Landing",
    navigationOptions: {
      headerTitleStyle: {
        color: "black"
      },
      headerTintColor: "white",
      header: (
        <View
          style={{
            backgroundColor: "#3a5998",
            height: 80,
            flexDirection: "row",
            alignItems: "flex-end",
            marginBottom: 7
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              height: 40,
              justifyContent: "center"
            }}
          >
            <TouchableOpacity>
              <Icon name="ios-camera" style={{ color: "white" }} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              flex: 5,
              flexDirection: "row",
              height: 40,
              justifyContent: "center"
            }}
          />
          <View
            style={{
              flex: 1,
              height: 40,
              flexDirection: "row",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity>
              <Icon name="ios-chatbubbles" style={{ color: "white" }} />
            </TouchableOpacity>
          </View>
        </View>
      )
    }
  }
);

export default stack;
