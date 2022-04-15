import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import ButtomCustom from "../customcomponent/ButtomCustom";
import Header from "../customcomponent/Header";

export default class ChatScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <Header navigation={this.props.navigation} />
        <ScrollView style={{ marginHorizontal: 10 }}>
          <View>
            <Image
              style={styles.chatbackgroundimage}
              source={require("../assets/chatbackground.png")}
            />

            <View style={styles.container1}>
              <Text style={styles.chattext}>Chat with</Text>
              <Text style={styles.chattext}>an expert of our team</Text>
            </View>

            <Image
              style={styles.chatmaskimage}
              source={require("../assets/chatmask.png")}
            />

            <Image
              style={styles.arrowiconimage}
              source={require("../assets/arrow-icon.png")}
            />
          </View>

          <View style={styles.borders}></View>

          <Image
            style={styles.phonecallimage}
            resizeMode="stretch"
            source={require("../assets/icon-phone-call.png")}
          />

          <View style={{ marginTop:30 }}>
            <Text style={styles.calltext}>Do you want to make</Text>
            <Text style={styles.calltext}>a call with our psychologist?</Text>
          </View>

          <View style={{ width: "100%",marginTop:40 }}>
            <ButtomCustom
              margin={true}
              backgroundColor={"#C441FD"}
              title={"Schedule a call"}
              onPress={() =>
                this.props.navigation.navigate("ChatofflineScreen")
              }
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  backarrowimage: {
    height: 40,
    width: 40,
    marginTop: 40,
  },

  chatbackgroundimage: {
    height: 100,
    borderRadius: 10,
    width: "100%",
    marginTop: 40,
  },

  chatmaskimage: {
    position: "absolute",
    height: 100,
    width: 130,
    right: 0,
    marginTop: 40,
  },
  chattext: {
    fontSize: 20,
    color: "#FFFFFF",
  },

  container1: {
    position: "absolute",
    marginTop: 60,
    margin: 10,
  },

  arrowiconimage: {
    position: "absolute",
    right: 20,
    marginTop: 90,
    height: 15,
    width: 15,
  },

  borders: {
    borderBottomWidth: 1,
    borderBottomColor: "#FFFFFF34",
    height: 50,
    marginHorizontal: 5,
    // backgroundColor:"red"
  },
  phonecallimage: {
    height: 135,
    width: "100%",
    marginTop: 50,
  },

  calltext: { fontSize:19, color: "#fff", fontWeight: "bold" },
});
