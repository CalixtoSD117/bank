import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const InputComponent = ({title = "title", password=false, ...props }) => {

    const [seepassword, setseepassword] = useState(false)

    const handleSeePassword = () => {
        setseepassword(!seepassword)
    }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>
            {title}
        </Text>
        <TextInput style={styles.input} secureTextEntry={seepassword}/>
  
        {
            password && 
            <Icon style={{color: '#fff', fontSize: 28, position: 'absolute', bottom: 3, right: 5}} onPress={handleSeePassword} name={seepassword ? 'eye-off-outline' : 'eye-outline' }/>
        } 

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
       flexDirection: "column",
       gap: 10,
       paddingTop: 30,
    },
    title:{
        fontSize: 15,
        fontWeight: "500",
        color: "#fff",
    },
    input:{
        borderBottomWidth: 0.5,
        borderColor: "#fff",
        borderRadius: 10,
        padding: 10,
        paddingRight: 40,
        color: "#fff",
    }
})