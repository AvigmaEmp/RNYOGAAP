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

class SubscriptionScreen extends Component {
  render() {
    return (
      <ImageBackground
        source={require("../assets/background.png")}
        resizeMode="stretch"
        style={{ height: "100%" }}
      >
        <ScrollView style={styles.screen}>
          <Image
            style={styles.closeimage}
            resizeMode="cover"
            source={require("../assets/closs-icon.png")}
          />

          <View style={styles.container1}>
            <Text style={styles.headertext1}>Meditapp</Text>

            <Text style={styles.headertext2}>
              Join Meditapp pro to be your best self on
            </Text>

            <Text style={styles.headertext2}>demand</Text>
          </View>

          <View style={styles.container2}>
            <View style={styles.container3}>
              <Image
                style={styles.checkimage}
                resizeMode="cover"
                source={require("../assets/icon-check.png")}
              />

              <Text style={styles.listtext}>Unlock mental states</Text>
            </View>

            <View style={styles.container3}>
              <Image
                style={styles.checkimage}
                resizeMode="cover"
                source={require("../assets/icon-check.png")}
              />

              <Text style={styles.listtext}>
                Download tracks & listen offline
              </Text>
            </View>

            <View style={styles.container3}>
              <Image
                style={styles.checkimage}
                resizeMode="cover"
                source={require("../assets/icon-check.png")}
              />

              <Text style={styles.listtext}>
                Unlimited listes on all devices
              </Text>
            </View>

            <View style={styles.container3}>
              <Image
                style={styles.checkimage}
                resizeMode="cover"
                source={require("../assets/icon-check.png")}
              />

              <Text style={styles.listtext}>New music added monthly</Text>
            </View>
          </View>
          <View>
            <View style={styles.container4}>
              <View style={{ marginLeft: 20 }}>
                <Text style={styles.bottomtext2}>50,99$ annualy</Text>
                <Text style={styles.bottomtext1}>First 14 days free</Text>
              </View>
            </View>

            <View style={styles.bestvalue}>
              <Text style={styles.bestvaluetext}>Best value</Text>
            </View>
          </View>
          <View style={styles.container5}>
            <View style={{ marginLeft: 20 }}>
              <Text style={styles.bottomtext2}>6,99$ monthly</Text>
              <Text style={styles.bottomtext1}>First 7 days free</Text>
            </View>
          </View>
          <View style={{ height: 50 }}>
            <Text style={styles.termstext}>Terms & Conditions</Text>
          </View>
          <ButtomCustom
            title={"Start my free trial"}
            backgroundColor={"#ED6BFD"}
          />
        </ScrollView>
      </ImageBackground>
    );
  }
}

export default SubscriptionScreen;
const styles = StyleSheet.create({
  screen: { flex: 1 },
  image: {
    flex: 1,
    padding: 20,
  },
  closeimage: {
    height: 40,
    width: 40,
    marginTop: 5,
    alignSelf: "center",
  },

  container1: { marginTop: 15, alignItems: "center", alignItems: "center" },

  headertext1: {
    fontSize: 25,
    fontWeight: "bold",
    color: "white",
    marginBottom: 8,
  },

  headertext2: { fontSize: 15, color: "#ccc" },

  container2: {
    marginTop: 30,
    padding: 20,
    backgroundColor: "#3D265E",
    // margin:10,
    borderRadius: 10,
    width: "100%",
  },

  checkimage: {
    height: 25,
    width: 25,
  },
  container3: {
    flexDirection: "row",

    marginTop: 10,
  },

  listtext: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    marginLeft: 30,
  },

  container4: {
    height: 80,
    width: "100%",
    borderColor: "#ED6BFD",
    borderWidth: 2,
    marginTop: 35,
    borderRadius: 10,
    justifyContent: "center",
    backgroundColor: "#3D265E",
  },
  bestvalue: {
    backgroundColor: "#ED6BFD",
    height: 30,
    width: 90,
    position: "absolute",
    right: 20,
    borderRadius: 18,
    marginTop: 20,
  },
  bestvaluetext: {
    fontSize: 15,
    color: "#FFFFFF",
    fontWeight: "bold",
    textAlign: "center",
    top: 3,
  },

  bottomtext1: {
    fontSize: 15,
    color: "#9081A3",
    marginTop: 5,
  },

  bottomtext2: {
    fontSize: 15,
    color: "#FFFFFF",
    marginTop: 5,
  },
  container5: {
    height: 80,
    width: "100%",
    backgroundColor: "#3D265E",

    marginTop: 35,
    borderRadius: 10,
    justifyContent: "center",
  },

  termstext: {
    fontSize: 13,
    color: "#ccc",
    textAlign: "center",
    marginTop: 15,
  },
});
