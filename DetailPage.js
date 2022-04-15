import React, { Component } from "react";
import { Text, View, ImageBackground, SafeAreaView } from "react-native";
import Header from "../customcomponent/Header";

export default class DetailPage extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <SafeAreaView>
          <Header
            title={`${this.props.route.params.title}`}
            navigation={this.props.navigation}
          />
          <View style={{ marginHorizontal: 10, marginVertical: 20 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 30,
                color: "#fff",
                marginVertical: 20,
              }}
            >
              What is Lorem Ipsum?{" "}
            </Text>
            <Text
              style={{
                fontWeight: "300",
                fontSize: 15,
                color: "#fff",
                lineHeight: 20,
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.{" "}
            </Text>
          </View>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
