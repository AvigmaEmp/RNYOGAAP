import React, { Component } from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-paper";
import { basecolor } from "../services/constant";

export default class InputText extends Component {
  render() {
    return (
      <View style={{ marginTop: "5%" }}>
        <Text
          style={{
            alignSelf: "baseline",
            color: "#fff",
            // fontWeight: "bold",
            fontSize: 15,
            fontWeight: "200",
          }}
        >
          {this.props.title}
        </Text>
        <TextInput
          // label={this.props.title}
          value={this.props.value}
          onChangeText={this.props.onChangeText}
          style={{
            backgroundColor: this.props.backgroundbool ? "" : basecolor,
            width: "100%",
            height: 30,
          }}
          activeUnderlineColor={"#C441FD"}
          underlineColor={"#574273"}
          selectionColor="#fff"
          theme={{ colors: { text: "#fff", primary: "red" } }}
          secureTextEntry={this.props.secureentery}
        />
      </View>
    );
  }
}
