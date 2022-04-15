import React, { Component } from "react";
import {
  Text,
  View,
  ImageBackground,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import ViewComp from "../customcomponent/ViewComp";
import Header from "../customcomponent/Header";

export default class Nutrition extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <SafeAreaView>
          <ScrollView>
          <Header title={"Nutrition"} navigation={this.props.navigation} />
          <View
            style={{
              marginHorizontal: 10,
            }}
          >
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "Guide",
                })
              }
              title={"Guide"}
              iconpath={require("../assets/flower.png")}
            />
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "Diet tips",
                })
              }
              title={"Diet tips"}
              iconpath={require("../assets/nutrition-icon.png")}
            />
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "bad foods",
                })
              }
              title={"Bad food"}
              iconpath={require("../assets/yoga-icon.png")}
            />
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "Brain food",
                })
              }
              title={"Brain food"}
              iconpath={require("../assets/flower.png")}
            />
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "Recipes",
                })
              }
              title={"Recipes"}
              iconpath={require("../assets/flower.png")}
            />
            <ViewComp
              onPress={() =>
                this.props.navigation.navigate("DetailPageScreen", {
                  title: "Grocary List",
                })
              }
              title={"Grocary List"}
              iconpath={require("../assets/flower.png")}
            />
           
          </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}
