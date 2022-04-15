import React, { Component } from "react";
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
} from "react-native";
import { basecolor } from "../services/constant";
import InputText from "../customcomponent/InputText";
import ButtomCustom from "../customcomponent/ButtomCustom";
import { Snackbar } from "react-native-paper";
import KeyboardSpacer from "react-native-keyboard-spacer";
// import LinearGradient from "react-native-linear-gradient";
import { resetpassword } from "../services/api.function";
import { connect } from "react-redux";
import { setLoggedIn, setToken } from "../store/action/auth/action";
import Spinner from "react-native-loading-spinner-overlay";

class ResetPassword extends Component {
  constructor() {
    super();
    this.state = {
      message: null,
      color: "green",
      visible: false,
      cpassword: null,
      password: null,
      email: null,
      device: 1,
      isLoading: false,
    };
  }
  componentDidMount() {
    console.log("restpassword", this.props.route.params.link);
    const { link } = this.props.route.params;
    const spliturl = link.split("/");
    console.log("spliturl", spliturl[4]);
    this.setState({ email: spliturl[4] });
  }
  onHandleChange = (key, value) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [key]: value,
      },
    });
  };
  onHandleResetPassword = async () => {
    console.log(this.state.email);
    const error = this.Validation();
    if (!error) {
      const { password, email } = this.state;
      this.setState({ isLoading: true });
      if (email && password) {
        let data = {
          User_Email: email,
          Type: 5,
          User_Password: password,
          User_Type: 1,
        };
        console.log(data);
        await resetpassword(data)
          .then((res) => {
            console.log("res: ", JSON.stringify(res));
            this.setState({ isLoading: false });
            this.setState({
              color: "#53a20a",
              visible: true,
              message: "Password Changed Successfully",
            });
            setTimeout(() => {
              this.props.navigation.navigate("SuccessPage", {
                register: false,
              });
            }, 2000);
          })
          .catch((error) => {
            if (error.response) {
              this.setState({
                color: "red",
                visible: true,
                message: "Something went wrong!!!",
              });
              console.log("responce_error", error.response);
              this.setState({ isLoading: false });
            } else if (error.request) {
              this.setState({
                color: "red",
                visible: true,
                message: "Something went wrong!!!",
              });
              this.setState({ isLoading: false });
              console.log("request error", error.request);
            }
          });
      } else {
        this.setState({
          color: "red",
          visible: true,
          message: "Something went wrong!!!",
        });
      }
    }
  };
  onDismissSnackBar() {
    this.setState({
      visible: false,
      message: null,
    });
  }
  render() {
    console.log(this.state.form);
    return (
      <SafeAreaView style={{ backgroundColor: basecolor }}>
        <ScrollView
          contentContainerStyle={{ backgroundColor: basecolor, height: "100%" }}
        >
          <View
            style={{
              alignItems: "center",
              paddingVertical: 4,
              // height: "20%",
              // backgroundColor: "pink",
            }}
          >
            <Text
              style={{
                color: "#fff",
                fontSize: 25,
                fontWeight: "bold",
                lineHeight: 30,
              }}
            >
              Reset Password
            </Text>
            <Text
              style={{
                color: "#fff",
                fontSize: 20,
                textAlign: "center",
                lineHeight: 30,
              }}
            >
              We'll personalize your usage accross all our platform with your
              Reset Password
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              height: "30%",
              // backgroundColor: "red",
            }}
          >
            <InputText
              onChangeText={(text) => this.onHandleChange("password", text)}
              title={"Paswword"}
            />
            <InputText
              onChangeText={(text) => this.onHandleChange("cpassword", text)}
              title={"Confirm Paswword"}
            />
          </View>

          <KeyboardSpacer />
          <Snackbar
            duration={100000}
            visible={this.state.visible}
            style={{ backgroundColor: this.state.color }}
            onDismiss={() => this.onDismissSnackBar()}
            action={{
              label: "close",
              onPress: () => {
                this.setState({ visible: false });
              },
            }}
          >
            {this.state.message}
          </Snackbar>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
const mapStateToProps = (state, ownProps) => ({
  // parentid: state.parentidReducer.parentid,
});

const mapDispatchToProps = {
  setLoggedIn,
  setToken,
};
export default connect(mapStateToProps, mapDispatchToProps)(ResetPassword);
