import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Calender from '../screen/Calender'
import Profile from '../screen/Profile'
import HomeStack from './HomeStack'
import { basecolor } from '../services/constant'
import { Image } from 'react-native'
const Tab = createBottomTabNavigator()
export default function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let image
          if (route.name === 'Profile') {
            image = focused
              ? require('../assets/profile.png')
              : require('../assets/myprofiledeactive.png')
          } else if (route.name === 'Home') {
            image = focused
              ? require('../assets/home1.png')
              : require('../assets/home.png')
          } else if (route.name === 'Calender') {
            image = focused
              ? require('../assets/calender.png')
              : require('../assets/calendardeactive.png')
          }
          return (
            <Image
              resizeMode='contain'
              source={image}
              style={{ height: 50, width: 50 }}
            />
          )
        },

        headerShown: false,
        tabBarStyle: {
          backgroundColor: basecolor,
          borderTopColor: '#472f67'
        },
        tabBarShowLabel: false
      })}
    >
      <Tab.Screen name='Home' component={HomeStack} />
      <Tab.Screen name='Calender' component={Calender} />
      <Tab.Screen name='Profile' component={Profile} />
    </Tab.Navigator>
  )
}
