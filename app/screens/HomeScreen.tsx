import React from 'react'
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { CardComponent } from '../src/components/card/CardComponent'
import { FlatList } from 'react-native-gesture-handler'
import { ButtonMoreFlights } from '../src/components/ButtonMoreFlights'

export const HomeScreen = () => {

  const data = [
    {
      id: 1,
    },
    {
      id: 2,
    },
    {
      id: 3,
    },
    {
      id: 4,
    },
    {
      id: 5,
    },
    {
      id: 6,
    },
    {
      id: 7,
    },
    {
      id: 8,
    }
  ]

  return (
    <View style={{paddingVertical:40 ,paddingHorizontal: 10, backgroundColor: '#fff', flex: 1, flexDirection: 'column', justifyContent: 'flex-end', }}>

      <View style={{flexDirection: 'column', justifyContent: 'space-between', backgroundColor: '#fff', height: '70%'}}>
      
      {/* card */}
      <View>
      <CardComponent />
      <Text style={styles.title}>
        Your request was received. 
      </Text>
      </View>

      {/* button */}
      <View style={{paddingHorizontal: 10}}>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>
            Finish
          </Text>
        </TouchableOpacity>

      </View>

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  title: {
    width: '85%',
    padding: 20,
    fontSize: 44,
    fontWeight: "800",
    color: "#000",
    textAlign: 'left'
  },
  button:{
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {width: 2, height: 2},
    shadowRadius: 3,
    backgroundColor: '#5f6def',
    width: '100%',
    padding: 13,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText:{
    color: '#fff',
    fontSize: 20,
    fontWeight: '500'
  }
})