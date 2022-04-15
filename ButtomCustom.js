import React, { Component } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { normalize } from '../services/api.function'

export default class ButtomCustom extends Component {
  render() {
    return (
      <TouchableOpacity
        onPress={this.props.onPress}
        style={{
          backgroundColor: this.props.backgroundColor, //"#3D265E",
          paddingHorizontal: 10,
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: this.props.margin ? null : 20,
          borderRadius: 10,
          flexDirection: 'row',
          marginTop: 20,
          height: 40
        }}
      >
        <AntDesign name={this.props.name} size={25} color='#FFF' />
        <Text
          style={{ color: '#fff', fontSize: normalize(15), fontWeight: 'bold' }}
        >
          {this.props.title}
        </Text>
      </TouchableOpacity>
    )
  }
}
