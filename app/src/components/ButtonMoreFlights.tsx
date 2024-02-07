import React from 'react'
import { TouchableOpacity } from 'react-native'
import { Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

export const ButtonMoreFlights = () => {
  return (
    <TouchableOpacity style={{backgroundColor: '#5f6cf0', width:60, height: 60, zIndex: 99, borderRadius: 100, position: 'absolute', bottom: 40, right: 10, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>

       <Icon name="add" size={50} color="#fff" />

    </TouchableOpacity>
  )
}
