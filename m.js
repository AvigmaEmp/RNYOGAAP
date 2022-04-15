import React, { Component } from 'react';
import { SafeAreaView, Text, View, Pressable, Image, Platform, ImageBackground, StyleSheet, StatusBar } from 'react-native';
import { Header } from '../UI/Common/Header';
import LinearGradient from 'react-native-linear-gradient';
import { ScrollView, TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Constant from './Common/Constant';
import axios from 'axios';
import Spinner from 'react-native-loading-spinner-overlay';
import Toast from 'react-native-simple-toast';
import messaging from '@react-native-firebase/messaging';
import Login from './Login';
import AppButton from './Common/AppButton';
export default class CreateAccount extends Component {
  constructor(props) {
    super(props);
    this.state = {
      passwordVisible: true,
      FirstName: '',
      Email: '',
      Password: '',
      Idea_board_name: '',
      image: '',
      destiation: '',
      destiations:[],
      dates: '',
      date: [],
      spinner: false,
      ///
      on_board_id: '',
      Destination_id: '',
      on_boardDate_id: '',

      board_details: [],
      Destination: [],
      // mulltipal date & Destination ke lie  myArray
      myDatesArray:[],
      Destination_Array:[],
      dateAndDestination:[],
    // 
  myNewArray:[],
  apiDataDestiation:[],
  invitedBy:this.props.route.params.invited_by,
      boardId:this.props.route.params.board_id,
    };
  }

  componentDidMount =  () => {

    this._retrieveData();
    // console.log('jjjj',this.state.Destination_Array)
    // Array.prototype.push.apply(this.state.Destination_Array,this.state.myDatesArray)
    // console.log('456564',JSON.stringify(this.state.Destination_Array))  
  }

  //  
  _retrieveData = async () => {
    const on_board_id = await AsyncStorage.getItem('on_board_id');
    const Destination_on_board_id = await AsyncStorage.getItem('Destination_on_board_id');
    const on_boardDate_id = await AsyncStorage.getItem('on_boardDate_id');
  // mullipal dates ke lie 
    // const myArray = await AsyncStorage.getItem('myArray');
    await AsyncStorage.getItem('myDatesArray', async (err, myDatesArray) => {
      this.setState({ myDatesArray:JSON.parse( myDatesArray )})
    })
    await AsyncStorage.getItem('Destination_Array', async (err, Destination_Array) => {
      this.setState({ Destination_Array:JSON.parse( Destination_Array )})
    })
   
    await AsyncStorage.getItem('board_details', async (err, value) => {
      if (value != null){
        let json1 = JSON.parse(value)
        json1.map((item) =>
        this.setState({ Idea_board_name: item.name, image: item.image }),
        )
      }
    
    })
    this.setState({ on_board_id: on_board_id })
    this.setState({ Destination_id: Destination_on_board_id })
    this.setState({ on_boardDate_id: on_boardDate_id })
  };
 
  callBackFun =  () => {
    this.props.navigation.goBack(null);
  }

  // Logindata =()=>{
  //   const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
  //   if (reg.test (this.state.Email)!= true ){
  //     Toast.show('please enter valid your email')
  //   }else if (this.state.Password == ""){
  //     Toast.show('please enter your password ')
  //   }else {
  //  this.loginApidata()
  //   }
  // }


    Register = () => {
      // this.props.navigation.navigate("home")
     const reg = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (this.state.FirstName == "") {
      Toast.show('please Enter your FirstName');
    }
    else if (reg.test (this.state.Email)!= true ){
          Toast.show('please enter valid your email')
        }
     else if (this.state.Password == "") {
      Toast.show('please Enter your Password')
    } else {
      this.Registerdata()
    }
  }

  Registerdata = async() => {
    let fcmToken = await messaging().getToken();
    this.setState({
      spinner: true
    })
    var bodyFormData = new FormData();
    bodyFormData.append('name', this.state.FirstName);
    bodyFormData.append('email', this.state.Email);
    bodyFormData.append('password', this.state.Password);
    bodyFormData.append('idea_board_name', this.state.Idea_board_name);
    bodyFormData.append('image', this.state.image);
    bodyFormData.append('dates', JSON.stringify(this.state.myDatesArray));
    bodyFormData.append('created_user_id',this.state.invitedBy) ;
    bodyFormData.append('board_id', this.state.boardId);
    bodyFormData.append('destiation',JSON.stringify(this.state.Destination_Array));
     bodyFormData.append("device_type", Platform.OS == "android" ? "Android": "IOS");;
    bodyFormData.append("fcm_token", fcmToken);
    console.log('register data =====>',bodyFormData)
  await axios.post(Constant.api_link + 'register', bodyFormData)
      .then(async(res) => {
        console.log(res.data)
        if (res.data.status == "1") {
          this.setState({
            spinner: false
          })
          Toast.show(res.data.message);
          await AsyncStorage.setItem('user_data',JSON.stringify(res.data.data))
          // this.props.navigation.navigate("OnBoardingInviteFriends",{board_id:res.data.board_name[0].id})
          if(this.state.boardId != "" && this.state.invitedBy != ""){
            // this.props.navigation.navigate("Home") 
            // this.props.navigation.reset({  index: 0,
            //   routes: [{name: 'Notifications'}],
            // });
            this.props.navigation.replace("Notifications",{invited_by:this.state.invitedBy,board_id:this.state.boardId})
            
          }else{
            this.props.navigation.navigate("OnBoardingInviteFriends",{board_id:res.data.board_name[0].id})
          }
        }else{
          this.setState({
            spinner: false
          })
          setTimeout(() => Toast.show(res.data.message,Toast.LONG), 200)
        clearTimeout()
        
        }
      }).catch((err) => {
        console.log(err)
        this.setState({
          spinner: false
        })
        Toast.show('Something went wrong please try again',);
      })
  }



  render() {
 console.log('image===',this.state.image)
  return (
      <View style={{ flex: 1, backgroundColor: "#FFFFFF", }}>
        <Spinner
            visible={this.state.spinner}
          />
          <StatusBar animated={true} translucent={true} backgroundColor='transparent' />
          <SafeAreaView style={{ flex: 1 }}>
            <Header
              GoBack={() => this.callBackFun()}
            />
              <SafeAreaView style={{ flex: 1 ,}}>
                <View style={{ flex: 1, marginHorizontal:24}}>
                  <Text style={[styles.create_account]}>Become a member</Text>
                  <View style={styles.TextInputView}>
                        <Text style={[styles.lebelText,{width:68}]}>First Name</Text>
                        <TextInput
                          placeholderTextColor={'#606060'}
                          placeholder="First Name"
                          returnKeyType = {"next"}
                          style={styles.text_input2}
                          value={this.state.FirstName}
                          onChangeText={(value) => this.setState({ FirstName: value })}
                        />
                  </View>
                  <View style={styles.TextInputView}>
                        <Text style={[styles.lebelText,{width:35}]}>Email</Text>
                        <TextInput
                          placeholderTextColor={'#606060'}
                          placeholder="Email"
                          style={[styles.text_input2,{bottom:3}]}
                          returnKeyType = {"next"}
                            value={this.state.Email}
                            keyboardType="email-address"
                          onChangeText={(value) => this.setState({ Email: value })}
                        />
                  </View>


                 
                 <View style={styles.TextInputView}>
                     <Text style={[styles.lebelText,{width:60}]}>Password</Text>
                    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
                        <TextInput
                          placeholder="Password"
                          placeholderTextColor={'#606060'}
                          style={styles.pwd_text_input}
                          secureTextEntry={this.state.passwordVisible}
                          value={this.state.Password}
                          onChangeText={(value) => this.setState({ Password: value })}
                        />
                        <Pressable
                          onPress={() => this.setState({ passwordVisible: !this.state.passwordVisible })}
                          style={{ marginEnd:12 }}>
                            <Image
                            style={{height:15,width:22,resizeMode:'contain'}}
                            source={this.state.passwordVisible ?require("../assets/Images/passwordhide.png"):require("../assets/Images/passwordShow.png")}
                          />
                        </Pressable>
                    </View>
                 </View>
                 

                 
                  
                </View>
        
                <View style={{marginBottom:15}}>
                <AppButton
              handelButton={()=> this.Register()} 
              title="SIGN IN"
              />
                </View>
              </SafeAreaView>
          </SafeAreaView>
      </View>

    )

  }
}

const styles = StyleSheet.create({
  spinnerTextStyle: {
    color: 'red'
  },
  bg_img: {
    position: "absolute",
    bottom: 0,
    top: "20%",
    left: 0,
    right: 0
  },
  TextInputView:{
    borderWidth:1,
    height:62,
    backgroundColor: "#FFFFFF",
    justifyContent:"center",
    borderRadius: 6,
    marginTop:30
      },
      lebelText:{
        marginStart:20,fontSize:12,paddingHorizontal:2,
        position:"absolute",
        top:-10,
        backgroundColor: "white",
      }
      ,
  text_input: {
    backgroundColor: "#FFFFFF",
    borderRadius: 4,
    height: 48,
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "sofiapro-light" : "SofiaProLight",
    marginTop: 53
  },
  text_input2: {
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "sofiapro-light" : "SofiaProLight",
  },

  pwd_text_input: {
    color:'black',
    borderRadius: 4,
    paddingLeft: 16,
    fontSize: 18,
    fontFamily: Platform.OS == "android" ? "sofiapro-light" : "SofiaProLight",
  },
  show_pdw_btn: {
    position: "absolute",
    right: 12,
    top: 40,
    padding: 10
  },
  show_pwd: {
    fontSize: 16,
    color: "#42526E",
    fontFamily: Platform.OS == "android" ? "sofiapro-light" : "SofiaProLight",

  },
  descripation: {
    textAlign: "center",
    fontSize: 18,
    color: "#FFFFFF",
    fontFamily: Platform.OS == "android" ? "sofiapro-light" : "SofiaProLight",
    marginTop: 20
  },
  create_account: {
    marginTop:25,
    fontSize: 24,
    color: "#202224",
    fontFamily: Platform.OS == "android" ? "sofia_pro_bold" : "Sofia Pro",
  },
  liner_gradient_view: {
    borderRadius: 10,
    marginTop: 34,
    marginLeft: 16,
    marginRight: 16,
marginBottom:40
},
  sign_in_btn: {
    height: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  sign_in: {
    fontSize: 16,
    fontFamily: Platform.OS == "android" ? "sofia_pro_bold" : "Sofia Pro",
    color: '#ffffff',
    backgroundColor: 'transparent',
    textTransform: "uppercase"
  }
});