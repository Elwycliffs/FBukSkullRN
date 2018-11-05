import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Icon, Container, Content } from "native-base";
import Card from "./objs/Post";
import propTypes from "prop-types";
import Firebase from "firebase";
import fireConfigs from "../auth/firebase.config";

// Themes and Colors
const background = "#fff";

// Defaults
//const iconPadding = 20;

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: background
  }
});

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  static propTypes = {
    navigation: propTypes.shape({
      navigate: propTypes.func.isRequired
    }).isRequired
  };

  static navigationOptions = {
    tabBarIcon: ({ tintcolor }) => (
      <Icon name="ios-home" style={{ color: tintcolor }} />
    )
  };

  render() {
    return (
      <Container style={styles.container}>
        <Content>
          {/** Facebook Stories Container goes here */}

          {/** Facebook Posts go here */}
          <Card
            user="Wycliff"
            thumbnail={require("../../assets/Me.jpg")}
            note="Nairobi-KE"
            image={require("../../assets/1.jpg")}
            likes="115 likes"
            post="Learn Ethical Hacking from a world famous Ethical Hacker who has
              professional endorsements from people like Mark Cuban Billionaire
              tech entrepreneur, Star of Shark Tank, and the legendary
              cybersecurity expert John McAfee."
            Liked="true"
          />
          <Card
            user="Tessa"
            thumbnail={require("../../assets/thumbs/tessa.jpg")}
            note="Hollywood"
            image={require("../../assets/images/sorrytobotheryou.jpg")}
            likes="21,115 likes"
            post="I think it’s a wake-up call for people, that everything this movie expresses is just an accentuated version of what we live with every day. It’s not far away. You can get caught up in all the glam and money, all the things the world thinks that we need, but those aren’t the things that we need."
            Liked="false"
          />
          <Card
            user="zigHead"
            thumbnail={require("../../assets/thumbs/zigHead.jpg")}
            note="Moscow"
            image={require("../../assets/images/funnyMeme.jpg")}
            likes="205 likes"
            post="#Honestly..."
            Liked="false"
          />
          <Card
            user="Wycliff"
            thumbnail={require("../../assets/Me.jpg")}
            note="Nairobi-KE"
            image={require("../../assets/images/theMovement.jpg")}
            likes="202 likes"
            post="Remember Watchdogs? Honestly, this game here was the #inThing for me. I could relate. We are Data.."
            Liked="true"
          />
          <Card
            user="ProjectCars"
            thumbnail={require("../../assets/thumbs/projectCars.jpg")}
            note="California"
            image={require("../../assets/images/projectCars.jpeg")}
            likes="115,202 likes"
            post="It's a big day for the World today and our team here @projectCars. The long awaited haul is finally over. Project Cars 2 is out. It's a race. Find those #EasterEggs"
            Liked="true"
          />
        </Content>
      </Container>
    );
  }
}

export default Home;
