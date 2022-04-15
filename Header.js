import React, { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { normalize } from "../services/api.function";

export default class Header extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          // backgroundColor: "pink",
          height: 50,
        }}
      >
      <View style={{justifyContent:'flex-start',flexDirection:'row',alignItems:'center'}}>
     <View>
     <TouchableOpacity
          onPress={() => this.props.navigation.goBack()}
          style={{
            backgroundColor: "#fff",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 3,
            marginHorizontal: 20,
          }}
        >
          <Image
            resizeMode="contain"
            style={{ height: 30, width: 30 }}
            source={require("../assets/backarrow.png")}
          />
        </TouchableOpacity>
     </View>
       <View>
       <Text
          style={{ color: "#fff", fontWeight: "bold", fontSize:25}}
        >
          {this.props.title}
        </Text>
       </View>
      </View>
        <View style={{alignItems:'center',justifyContent:'center',flex:1}}> 
          <Text
            style={{ color: "#fff", fontWeight: "bold", fontSize:20}}
          >
            {this.props.title2}
          </Text>
        </View>
        <View>
        <TouchableOpacity
          onPress={this.props.onPress}
        
        >
          <Text style={{color:'#fff'}}>{this.props.title3}</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}
