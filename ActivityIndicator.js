import React, { useState } from 'react'
import { ActivityIndicator, View, } from 'react-native'
const ActivityIndicatorApp = (props) => {
   

    return (
        <View style={{
            position: 'absolute', zIndex: 1, width: '100%', height: '100%', alignItems: 'center',
            justifyContent: 'center', backgroundColor: 'rgba(0,0,0,0.40)'
        }}>
            <ActivityIndicator loaderVisible={props.loaderVisible} size="large" color="#fff"  />
        </View>
    )
}
export default ActivityIndicatorApp