import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign";

export default class ViewComp extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          width: "100%",
          justifyContent: "center",
          marginTop: 20,
        }}
      >
        <View style={{ position: "absolute", zIndex: 1, marginLeft: "40%" }}>
          <Text style={{ fontWeight: "400", fontSize:18, color: "#fff" }}>
            {this.props.title}
          </Text>
        </View>
        <View style={{ position: "absolute", zIndex: 1 }}>
          <Image
            resizeMode="stretch"
            style={{
              width: 50,
              height: 50,
              marginLeft: "25%",
            }}
            source={this.props.iconpath}
          />
        </View>
        <View style={{ position: "absolute", zIndex: 1, marginLeft: "87%" }}>
          <AntDesign name={"right"} size={25} color="#472f67" />
        </View>
        <Image
          resizeMode="stretch"
          style={{ width: "100%", height: 70, borderRadius: 30 }}
          source={require("../assets/item-1.jpeg")}
        />
      </TouchableOpacity>
    );
  }
}
