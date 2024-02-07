import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export const ButtonComponent = ({text="text"}) => {
  return (
    <TouchableOpacity style={{backgroundColor: '#646ddf', padding:10, borderRadius: 5, marginTop: 20}}>
        <Text style={{color:'#fff', fontSize: 17, textAlign: 'center'}}>
            {text}
        </Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({

})