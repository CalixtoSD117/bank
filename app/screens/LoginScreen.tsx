import React from 'react'
import { ImageBackground, StyleSheet, Text, TextInput, View } from 'react-native'
import { InputComponent } from '../src/components/InputComponent';
import { ButtonComponent } from '../src/components/ButtonComponent';


export const LoginScreen = () => {

    const imageurl = 'https://images.unsplash.com/photo-1565347878134-064b9185ced8?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'

    return (
        <ImageBackground
        source={{ uri: imageurl }}
        style={{ flex: 1}}
        >

        
        <View style={styles.container}>

            <View>
                <Text style={styles.apptitle}>
                    Bank of México
                </Text>
            </View>

            <View style={styles.with}>
                <Text style={styles.title}>Login</Text>
            </View>

            <View>
                <InputComponent title='Email' password={false} />

                <InputComponent title='Password' password={true}/>
            </View>

            <View style={{paddingTop: 20, width: '100%'}}>
                <Text style={{textAlign: 'right', color: '#bfc4ff', textDecorationLine:'underline'}}>
                    Forgot Password?
                </Text>
            </View>

            <View>
                <ButtonComponent text='Log In'/>
                <Text style={{textAlign: 'center', marginTop: 20, color: '#fff'}}>
                    Or
                </Text>
                <ButtonComponent text='Log In With Google'/>
            </View>

        </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(27, 8, 35, 0.7)',
        paddingHorizontal: 20,
        paddingTop: 80
    },
    title: {
        fontSize: 25,
        fontWeight: "bold",
        color: "#fff",
        paddingTop: 20,
    },
    with: {
        width: "100%",
    },
    apptitle:{
        fontSize: 35,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "left",
    }
});
