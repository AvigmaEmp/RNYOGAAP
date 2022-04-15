import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Keyboard
} from 'react-native'
import { basecolor } from '../services/constant'
import InputText from '../customcomponent/InputText'
// import LinearGradient from "react-native-linear-gradient";
import qs from 'qs'
import { connect } from 'react-redux'
import { setLoggedIn, setToken } from '../store/action/auth/action'
import { register, normalize } from '../services/api.function'
import { Snackbar } from 'react-native-paper'
import Spinner from "react-native-loading-spinner-overlay";
import ButtomCustom from '../customcomponent/ButtomCustom'
import ActivityIndicatorApp from '../customcomponent/ActivityIndicator'
// import ActivityIndicatorApp from '../customcomponent/ActivityIndicator'
// import KeyboardSpacer from "react-native-keyboard-spacer";

class Register extends Component {
  constructor() {
    super()
    setTimeout(() => {}, 3000)

    this.state = {
      ErrorPassword: null,
      ErrorEmail: null,
      ErrorUserEmail: null,
      form: [],
      grant_type: 'password',
      access_token: '',
      clientid: 2,
      isLoading: false,
      fcmtoken: '',
      visible: false
    }
  }
  onHandleChange = (key, value) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [key]: value
      }
    })
  }
  onDismissSnackBar = () => this.setState({ visible: false })

  _handleRegister = async () => {
    Keyboard.dismiss()
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const { email, password, firstname } = this.state.form
    if (
      email == undefined ||
      email === '' ||
      password == undefined ||
      password === '' ||
      firstname === undefined ||
      firstname === ''
    ) {
      this.setState({
        visible: true,
        message: 'Empty Fields.'
      })
    } else {
      if (email.match(re)) {
        if (password.length < 5) {
          this.setState({ isLoading: true })
          let data = qs.stringify({
            grant_type: this.state.grant_type,
            username: email, // 'jainminals@gmail.com', //email,
            password: password, //'12343', //password,
            ClientId: this.state.clientid,
            Role: 2,
            FirstName: firstname
            // IMEI: this.state.fcmtoken,
          })
          console.log('registernnnnn', data)
          await register(data)
            .then((res) => {
              console.log('res: ', JSON.stringify(res))
              this.props.setToken(res.access_token)
              this.props.setLoggedIn(true)
              this.setState({
                isLoading: false,
                access_token: res.access_token,
                visible: true,
                message: 'Account created successfully.'
              })
            })
            .catch((error) => {
              if (error.response) {
                console.log('error.response', error.response)
                this.setState({
                  isLoading: false,
                  visible: true,
                  message: 'Email already exists'
                })
                if (error.response.data.error == '-90') {
                  this.setState({
                    isLoading: false,
                    visible: true,
                    message: 'The Email ID or password is incorrect.'
                  })
                }
                if (error.response.data.error == '0') {
                  this.setState({
                    isLoading: false,
                    visible: true,
                    message: 'The Email ID or password is incorrect.'
                  })
                }
              } else if (error.request) {
                this.setState({
                  isLoading: false,
                  visible: true,
                  message: 'Request Error.'
                })
              } else if (error) {
                this.setState({
                  isLoading: false,
                  visible: true,
                  message: 'Server Error.'
                })
              }
            })
        } else {
          this.setState({
            isLoading: false,
            visible: true,
            message: 'Password length should be grater then 4.'
          })
        }
      } else {
        this.setState({
          isLoading: false,
          visible: true,
          message: 'Check email format.'
        })
      }
    }
  }
  _handleFaceBook() {}
  _handleApple() {}

  render() {
    return (
      <SafeAreaView style={{ backgroundColor: basecolor, height: '100%' }}>
        <Spinner visible={this.state.isLoading} />
        <ScrollView
          keyboardShouldPersistTaps={'handled'}
          contentContainerStyle={{ backgroundColor: basecolor, height: '100%' }}
        >
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 4,
              paddingHorizontal: 10,
              marginTop: 15
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: normalize(18),
                fontWeight: 'bold',
                lineHeight: 30
              }}
            >
              Sign Up
            </Text>
            <Text
              style={{
                color: '#fff',
                fontSize: normalize(15),
                textAlign: 'center',
                lineHeight: 30,
                fontWeight: '200'
              }}
            >
              We'll personalize your usage across all our platform with your
              login
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              height: '30%'
              // backgroundColor: "red",
            }}
          >
            <InputText
              onChangeText={(text) => this.onHandleChange('firstname', text)}
              title={'First Name'}
            />
            <InputText
              onChangeText={(text) => this.onHandleChange('email', text)}
              title={'Email'}
            />
            <InputText
              onChangeText={(text) => this.onHandleChange('password', text)}
              title={'Password'}
              secureentery={true}
            />
          </View>
          <View
            style={{
              paddingHorizontal: 20,
              // backgroundColor: "pink",
              justifyContent: 'center',
              alignItems: 'center',
              // height: "10%",
              marginTop: Platform.OS === 'ios' ? 0 : 25
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: normalize(15),
                textAlign: 'center',
                lineHeight: 25
              }}
            >
              By continuing you are agreeing to medit app{' '}
              <Text style={{ color: '#C441FD' }}>terms </Text> of service and{' '}
              <Text style={{ color: '#C441FD' }}>privacy policy</Text>
            </Text>
          </View>
          <View style={{ marginTop: 20 }}>
            <ButtomCustom
              backgroundColor={'#C441FD'}
              title={'Sign up'}
              onPress={() => this._handleRegister()}
            />
          </View>

          {this.state.isLoading && <ActivityIndicatorApp />}

          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              paddingVertical: 10
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: normalize(15),
                fontWeight: 'bold'
              }}
            >
              Or
            </Text>
          </View>

          {Platform.OS === 'ios' && (
            <ButtomCustom
              backgroundColor={'#3D265E'}
              title={' Sign In With Apple'}
              name={'apple1'}
              onPress={() => this._handleApple()}
            />
          )}

          <ButtomCustom
            name={'facebook-square'}
            backgroundColor={'#3D265E'}
            title={' Sign In With Facebook'}
            onPress={() => this._handleFaceBook()}
          />

          <View
            style={{
              marginHorizontal: 20,
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              marginTop: 20
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: normalize(15),
                fontWeight: 'bold'
              }}
            >
              Already registered!{' '}
            </Text>

            <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Login')}
              style={{
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              <Text
                style={{
                  color: '#C441FD',
                  fontSize: normalize(15),
                  fontWeight: 'bold',
                  textDecorationLine: 'underline'
                }}
              >
                Login
              </Text>
            </TouchableOpacity>
          </View>
          {/* <KeyboardSpacer /> */}
          <Snackbar
            visible={this.state.visible}
            onDismiss={() => this.onDismissSnackBar()}
            style={{ color: 'green' }}
            action={{
              label: 'close',
              onPress: () => {
                this.setState({ visible: false })
              }
            }}
          >
            {this.state.message}
          </Snackbar>
        </ScrollView>
      </SafeAreaView>
    )
  }
}
const mapStateToProps = (state, ownProps) => ({
  // contacts: state.contactReducer.contacts,
  // parentid: state.parentidReducer.parentid,
})

const mapDispatchToProps = {
  setLoggedIn,
  setToken
}
export default connect(mapStateToProps, mapDispatchToProps)(Register)