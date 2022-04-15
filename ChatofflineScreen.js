import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import ButtomCustom from "../customcomponent/ButtomCustom";
import Header from "../customcomponent/Header";

class ChatofflineScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <Header navigation={this.props.navigation} />
        {/* <ScrollView style={{ flex: 1, backgroundColor: "red" }}> */}
        <View
          style={{
            // backgroundColor: "pink",
            flex: 1,
            justifyContent: "space-around",
          }}
        >
          <View>
            <Image
              style={styles.iconofflineimage}
              resizeMode="cover"
              source={require("../assets/icon-offline.png")}
            />
            <View style={{ alignItems: "center" }}>
              <Text style={styles.text1}>Our expert currently is offline!</Text>
              <Text style={styles.text2}>
                Feel free to get in touch with him by email!{" "}
              </Text>
            </View>
          </View>
          <ButtomCustom
            title={"Send an email"}
            backgroundColor={"#ED6BFD"}
            height={55}
            marginTop={150}
          />
        </View>
        {/* </ScrollView> */}
      </ImageBackground>
    );
  }
}

export default ChatofflineScreen;
const styles = StyleSheet.create({
  backarrowimage: {
    height: 40,
    width: 40,
  },

  text: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 5,
  },

  container1: {
    flexDirection: "row",
    marginTop: 40,
  },
  iconofflineimage: {
    alignSelf: "center",
  },

  text1: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 20,
    marginTop: 30,
  },

  text2: {
    fontSize: 13,
    color: "#FFFFFF80",
    marginLeft: 20,
    marginTop: 15,
  },
});
