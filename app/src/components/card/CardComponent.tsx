import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

export const CardComponent = () => {
    return (
        <View style={{ backgroundColor: '#fff',borderRadius: 10, padding: 20, marginTop: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{width: 120}}>
                    <Text style={styles.title}>
                        BEG
                    </Text>
                    <Text style={styles.text}>
                        Serbia
                    </Text>
                </View>
               <View>
               <Icon name='airplane' size={30} color="#646fee" />
               </View>
                <View style={{width: 120}}>
                    <Text style={styles.title2}>
                        AMS
                    </Text>
                    <Text style={styles.text2}>
                        Netherland
                    </Text>
                </View>
            </View>
            <View style={{ borderColor: '#dededf', borderWidth: 0.6, marginTop: 10 }} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 10}}>
                <View>
                    <Text style={styles.footer}>
                        september 3, 2023
                    </Text>
                </View>
                <View>
                    <Text style={styles.footer}>
                        2 passengers
                    </Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: "800",
        color: "#000",
        textAlign: 'left'
    },
    title2: {
        fontSize: 24,
        fontWeight: "800",
        color: "#000",
        textAlign: 'right'
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
        color: "#727373",
        textAlign: 'left'
    },
    text2: {
        fontSize: 14,
        fontWeight: "400",
        color: "#727373",
        textAlign: 'right'
    },
    footer:{
        fontSize: 15,
        fontWeight: "500",
        color: "#444444",
        textAlign: 'center'
    }
})