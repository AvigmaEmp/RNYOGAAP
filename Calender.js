import React, { Component, useState } from 'react'
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList
} from 'react-native'
import CalendarStrip from 'react-native-calendar-strip'
import { ScrollView } from 'react-native-gesture-handler'
import { Colors } from 'react-native-paper'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const Calender = () => {
  const list = [
    {
      id: 1,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    },
    {
      id: 2,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    },
    {
      id: 3,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    },
    {
      id: 4,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    },
    {
      id: 5,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    },
    {
      id: 6,
      text: 'Completed',
      title: 'Mountain Pose(Tadasana)',
      label: '16:00 / 30 minutes'
    }
  ]

  const renderItem = ({ item }) => {
    return (
      <View>
        <TouchableOpacity
          style={{
            backgroundColor: '#511d66',
            paddingVertical: 10,
            marginTop: 20,
            borderRadius: 10,
            height: windowHeight / 7.8,
            paddingHorizontal: 15,
            justifyContent: 'center'
          }}
        >
          <View style={{ marginTop: -30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#AB29FC',
                borderRadius: 20,
                width: windowWidth / 4,
                alignItems: 'center',
                paddingVertical: 5
              }}
            >
              <Text style={{ color: '#fff' }}>{item.text}</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 18 }}>
            <Text style={{ color: '#fff' }}>{item.title}</Text>
            <Text style={{ color: '#ccc', marginTop: 5 }}>{item.label}</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <ScrollView
      style={{ backgroundColor: '#2D1350', flex: 1, paddingHorizontal: 15 }}
    >
      <View>
        <CalendarStrip
          style={{ height: windowHeight / 6 }}
          calendarColor={'#2D1350'}
          dayContainerStyle={{
            backgroundColor: '#402562',
            height: 80,
            borderRadius: 10
          }}
          highlightDateContainerStyle={{
            height: 80,
            backgroundColor: '#AB29FC',
            borderRadius: 10,
            paddingVertical: 5
          }}
          // dateContainerStyle={{ height:80,backgroundColor:'red',borderRadius:10,justifyContent:'space-between',paddingVertical:5,}}
          dateNumberStyle={{
            textAlignVertical: 'center',
            color: '#fff',
            fontSize: 14,
            fontWeight: '300',
            marginTop: 15,
            borderColor: '#fff',
            width: 40,
            marginHorizontal: 10
          }}
          highlightDateNumberStyle={{
            textAlignVertical: 'center',
            color: 'white',
            fontSize: 14,
            fontWeight: '300',
            marginTop: 15,
            width: 40
          }}
          highlightDateNameStyle={{
            color: '#fff',
            fontSize: 14,
            fontWeight: '500'
          }}
          dateNameStyle={{ color: '#ccc', fontSize: 12 }}
          selectedDate={new Date()}
          calendarHeaderStyle={{
            width: '100%',
            fontSize: 16,
            fontWeight: '700',
            backgroundColor: '#2D1350',
            paddingLeft: 20,
            color: 'white',
            paddingVertical: 8
          }}
          onDateSelected={(date) => {
            console.log(date)
          }}
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{ type: 'border', duration: 200 }}
          leftSelector={[]}
          rightSelector={[]}
        />
      </View>
      <View style={{ marginTop: 10 }}>
        <Text style={{ color: '#fff', fontSize: 15 }}>Tracked for today</Text>
      </View>

      <View>
        <FlatList data={list} renderItem={renderItem} />
      </View>
    </ScrollView>
  )
}
export default Calender
{
  /* <CalendarStrip
          style={{ height:windowHeight/5,}}
          calendarColor={'#2D1350'}
          highlightDateContainerStyle={{ height:80,borderColor:'red',borderWidth:1}}
          dateNumberStyle={{ textAlignVertical: "center", color: '#fff', fontSize: 14, fontWeight: "300", marginTop: 15, borderWidth: 1, borderColor: "#fff", height: 60, width: 40, borderRadius: 10, paddingHorizontal: 10, marginHorizontal: 10 }}
          highlightDateNumberStyle={{ textAlignVertical: "center", backgroundColor: '#AB29FC', color: 'white', fontSize: 14, fontWeight: "300", marginTop: 15, height: 60, width: 40, borderRadius: 10, paddingHorizontal: 10, }}
          highlightDateNameStyle={{ color: '#fff', fontSize: 14, fontWeight: "500", }}
          dateNameStyle={{color:'#ccc',fontSize:12}}
          selectedDate={new Date()}
          calendarHeaderStyle={{ width: "100%", fontSize: 16, fontWeight: "700", backgroundColor: '#2D1350', paddingLeft: 20, color: 'white', paddingVertical: 8 }}
          onDateSelected={(date) => { console.log(date) }}
          calendarAnimation={{ type: 'sequence', duration: 30 }}
          daySelectionAnimation={{ type: 'border', duration: 200 }}
        leftSelector={[]}
        rightSelector={[]}
        /> */
}
