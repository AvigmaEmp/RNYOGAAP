import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import Header from "../customcomponent/Header";
import ButtomCustom from "../customcomponent/ButtomCustom";
import BottomSheet from "react-native-simple-bottom-sheet";
import { basecolor } from "../services/constant";
const DATA = [
  {
    id: "1",
    title: "30 min",
  },
  {
    id: "2",
    title: "60 min",
  },
  {
    id: "3",
    title: "90 min",
  },

];
export default class Yoga extends Component {
  constructor() {
    super();
    this.state = {
      ErrorPassword: null,
      ErrorEmail: null,
      ErrorUserEmail: null,
      form: [],
      grant_type: "password",
      access_token: "",
      clientid: 1,
      isLoading: false,
      fcmtoken: "",
      visible: false,
      message: "",
      timer: "30 min",
    };
    this.panelRef = React.createRef();
  }
  onOpenTimer = (item) => {
    this.panelRef.current.togglePanel();
    this.setState({ timer: item.title });
  };
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <SafeAreaView>
          <ScrollView>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <Header
                title={"Set Duration"}
                navigation={this.props.navigation}
              />
              <ButtomCustom
                backgroundColor={"#C441FD"}
                title={this.state.timer}
                onPress={() => this.panelRef.current.togglePanel()}
              />
            </View>
            <View>
              <View
                style={{
                  marginHorizontal: 10,
                  marginVertical: 20,
                  borderBottomColor: "#472f67",
                  borderBottomWidth: 1,
                }}
              >
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
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum.{" "}
                </Text>
                <Text
                  style={{
                    fontWeight: "500",
                    fontSize: 15,
                    color: "#fff",
                    lineHeight: 20,
                  }}
                >
                  Learn more
                </Text>
              </View>
              <Text
                style={{
                  fontWeight: "500",
                  fontSize: 15,
                  color: "#fff",
                  lineHeight: 20, 
                }}
              >
                Video
              </Text>
            </View>
          </ScrollView>
        </SafeAreaView>
        <BottomSheet
          ref={(ref) => (this.panelRef.current = ref)}
          wrapperStyle={{
            backgroundColor: basecolor,
            borderColor: "#472f67",
            borderWidth: 1,
            paddingBottom: 20,
          }}
          // outerContentStyle={{ backgroundColor: "pink" }}
          isOpen={this.state.visible}
        >
          <View>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                padding: 10,
               
              }}
            >
              <Text style={styles.text}>Select Time</Text>
            </View>
            {DATA.map((item) => {
              return (
                <TouchableOpacity
                  onPress={() => this.onOpenTimer(item)}
                  style={styles.button}
                >
                  <Text style={styles.text}>{item.title}</Text>
                </TouchableOpacity>
              );
            })}
          </View>
        </BottomSheet>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: "#432B62",
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    borderRadius: 10,
    
  },
  text: { color: "#fff", fontWeight: "bold", fontSize: 20 },
});