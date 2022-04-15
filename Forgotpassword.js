import React, { Component } from 'react'
import {
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
  Platform,
  ScrollView,
  Clipboard
} from 'react-native'
import { basecolor } from '../services/constant'
import InputText from '../customcomponent/InputText'
import ButtomCustom from '../customcomponent/ButtomCustom'
import { Snackbar } from 'react-native-paper'
import KeyboardSpacer from 'react-native-keyboard-spacer'
// import LinearGradient from "react-native-linear-gradient";
import { forgotpassword } from '../services/api.function'
import qs from 'qs'
import { connect } from 'react-redux'
import { setLoggedIn, setToken } from '../store/action/auth/action'
import dynamicLinks from '@react-native-firebase/dynamic-links'

class Forgotpassword extends Component {
  constructor() {
    super()
    this.state = {
      ErrorEmail: null,
      ErrorUserEmail: null,
      email: null,
      message: null,
      color: 'green',
      device: 1,
      isLoading: false,
      link: '',
      form: []
    }
  }
  onDismissSnackBar = () => this.setState({ visible: false })
  onHandleChange = (key, value) => {
    this.setState({
      ...this.state,
      form: {
        ...this.state.form,
        [key]: value
      }
    })
  }
  componentDidMount() {
    if (Platform.OS === 'android') {
      this.setState({
        device: 1
      })
    } else {
      this.setState({
        device: 2
      })
    }
  }
  generateLink = async (email) => {
    const link = await dynamicLinks().buildShortLink({
      link: `https://rnyogameditation.page.link/forgetpassword/${email}`,
      domainUriPrefix: 'https://rnyogameditation.page.link',
      ios: {
        bundleId: 'com.RNYogaMeditation',
        appStoreId: '1618941188',
        fallbackUrl:
          'https://apps.apple.com/us/app/com.RNYogaMeditation/id11618941188'
      },
      android: {
        packageName: 'com.rnyogameditation',
        fallbackUrl:
          'https://play.google.com/store/apps/details?id=com.rnyogameditation'
      },
      navigation: {
        forcedRedirectEnabled: true
      }
    })
    console.log(link)
    Clipboard.setString(link)
    this.setState({ link })
    return link
  }
  onHandleForgotPassword = async () => {
    const { email, link, device } = this.state.form
    const linkurl = await this.generateLink(email)
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!(email == undefined || email === '')) {
      this.setState({ isLoading: true })
      if (email.match(reg)) {
        let data = {
          EmailID: email,
          Type: 1,
          Email_Url: linkurl,
          Device: Platform.OS === 'android' ? 1 : 2
        }
        console.log(data)
        await forgotpassword(data)
          .then((res) => {
            console.log('res: ', JSON.stringify(res))
            console.log('res:123', res[0].UserCode)
            this.setState({ isLoading: false })
            if (res[0].UserCode === 'Sucesss') {
              this.setState({
                color: '#53a20a',
                visible: true,
                message:
                  'Link sent successfully. Please check your registered email.'
              })
            }
            if (res[0].UserCode === 'Error') {
              this.setState({
                color: 'red',
                visible: true,
                message: 'Please check your email.'
              })
            }
          })
          .catch((error) => {
            if (error.response) {
              console.log('responce_error', error.response)
              this.setState({
                isLoading: false,
                color: 'red',
                visible: true,
                message: 'Some Response Error'
              })
            } else if (error.request) {
              this.setState({
                isLoading: false,
                color: 'red',
                visible: true,
                message: 'Some Request Error'
              })
              console.log('request error', error.request)
            }
          })
      } else {
        this.setState({
          color: 'red',
          visible: true,
          message: 'Check email formate.'
        })
      }
    } else {
      this.setState({
        color: 'red',
        visible: true,
        message: 'Empty Fields.'
      })
    }
  }
  render() {
    console.log(this.state.form)
    return (
      <SafeAreaView style={{ backgroundColor: basecolor }}>
        <ScrollView
          contentContainerStyle={{ backgroundColor: basecolor, height: '100%' }}
        >
          <View
            style={{
              alignItems: 'center',
              paddingVertical: 4,
              height: '10%',
              marginTop: 20
              // backgroundColor: "pink",
            }}
          >
            <Text
              style={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 'bold',
                lineHeight: 30
              }}
            >
              Forgot password
            </Text>
          </View>
          <View
            style={{
              marginHorizontal: 20,
              height: '20%'
              // backgroundColor: "red",
            }}
          >
            <InputText
              onChangeText={(text) => this.onHandleChange('email', text)}
              title={'Email'}
            />
            <View style={{ marginTop: 35 }}>
              <ButtomCustom
                backgroundColor={'#C441FD'}
                title={'Forgot Password'}
                onPress={() => this.onHandleForgotPassword()}
                // onPress={() => this._handleLogin()}
              />
            </View>
          </View>

          <KeyboardSpacer />
          <Snackbar
            duration={100000}
            visible={this.state.visible}
            style={{ backgroundColor: this.state.color }}
            onDismiss={() => this.onDismissSnackBar()}
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
  // parentid: state.parentidReducer.parentid,
})

const mapDispatchToProps = {
  setLoggedIn,
  setToken
}
export default connect(mapStateToProps, mapDispatchToProps)(Forgotpassword)