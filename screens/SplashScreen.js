import { View, Button, Text, StyleSheet, Dimensions, Image, TouchableOpacity, StatusBar } from 'react-native'
import React from 'react'
import { shadow } from 'react-native-paper';
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default SplashScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#009387"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <Animatable.Image
                    animation="bounceIn"
                    duration={1500}
                    style={styles.logo}
                    source={require('../assets/logo.png')}
                />
            </View>
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig"
            >
                <Text style={styles.title}>Stay Connected With Everyone!</Text>
                <Text style={styles.text}>Signin with account</Text>
                <View style={styles.button}>
                    <TouchableOpacity onPress={() => { navigation.navigate('SigninScreen') }}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={styles.textSign}>Get Started</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View >
    );
};

const { height } = Dimensions.get("screen")
const height_logo = height * 0.28

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#009387'
    },
    header: {
        flex: 2,
        justifyContent: "center",
        alignItems: "center"
    },
    footer: {
        flex: 1,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        paddingVertical: 50
    },
    logo: {
        height: height_logo,
        width: height_logo
    },
    title: {
        color: '#05375a',
        fontSize: 30,
        fontWeight: 'bold'
    },
    text: {
        color: 'grey',
        marginTop: 5
    },
    button: {
        alignItems: "flex-end",
        marginTop: 30
    },
    signIn: {
        width: 150,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
    },
    textSign: {
        color: 'white',
        fontWeight: 'bold'
    }
})