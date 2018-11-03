import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import {
  Card,
  CardItem,
  Thumbnail,
  Body,
  Left,
  Right,
  Button,
  Icon
} from "native-base";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { isLiked: false };
  }

  componentDidMount() {
    let Liked = this.props.Liked;

    if (Liked === "true") {
      this.setState(liked => {
        return { isLiked: !liked.isLiked };
      });
    }
  }

  render() {
    let user = this.props.user;
    let thumbnail = this.props.thumbnail;
    let note = this.props.note;
    let image = this.props.image;
    let likes = this.props.likes;
    let post = this.props.post;
    let heartOutline = this.state.isLiked ? "ios-heart" : "ios-heart-outline";

    return (
      <Card>
        <CardItem>
          <Left>
            <Thumbnail source={thumbnail} />
            <Body>
              <Text>{user}</Text>
              <Text note>{note}</Text>
            </Body>
          </Left>
        </CardItem>
        <CardItem cardBody>
          <Image
            source={image}
            style={{ height: 200, flexDirection: "row", flex: 1 }}
          />
        </CardItem>
        <CardItem style={{ height: 45 }}>
          <Left>
            <Button transparent>
              <Icon name={heartOutline} style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-chatbubbles-outline" style={{ color: "black" }} />
            </Button>
            <Button transparent>
              <Icon name="ios-send-outline" style={{ color: "black" }} />
            </Button>
          </Left>
        </CardItem>
        <CardItem style={{ height: 20 }}>
          <Text>{likes}</Text>
        </CardItem>
        <CardItem>
          <Body>
            <Text>
              <Text style={{ fontWeight: "900" }}>{user} </Text>
              {post}
            </Text>
          </Body>
        </CardItem>
      </Card>
    );
  }
}1

export default Post;
