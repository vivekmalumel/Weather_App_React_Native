import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    StatusBar
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
export default SignUpScreen = ({ navigation }) => {
    const [data, setData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
        check_text_input_change: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true
    })

    const textInputChange = (val) => {
        if (val.length !== 0) {
            setData({
                ...data,
                email: val,
                check_text_input_change: true
            })
        }
        else {
            setData({
                ...data,
                email: val,
                check_text_input_change: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        setData({
            ...data,
            password: val
        })
    }
    const handleConfirmPasswordChange = (val) => {
        setData({
            ...data,
            confirmPassword: val
        })
    }
    const toggleSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }
    const toggleConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        })
    }
    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#009387"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Register Now</Text>
            </View>
            <Animatable.View style={styles.footer} animation="fadeInUpBig">
                <Text style={styles.text_footer}>Email</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Email"
                        style={styles.TextInput}
                        onChangeText={textInputChange}
                        value={data.email}
                    />
                    {data.check_text_input_change ?
                        <Animatable.View animation="bounceIn">
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                <Text style={styles.text_footer}>Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry}
                        style={styles.TextInput}
                        value={data.password}
                        onChangeText={handlePasswordChange}
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                        <Feather
                            name={data.secureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <Text style={styles.text_footer}>Confirm Password</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Confirm Password"
                        secureTextEntry={data.confirm_secureTextEntry}
                        style={styles.TextInput}
                        value={data.confirmPassword}
                        onChangeText={handleConfirmPasswordChange}
                    />
                    <TouchableOpacity onPress={toggleConfirmSecureTextEntry}>
                        <Feather
                            name={data.confirm_secureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.textPrivate}>
                    <Text style={styles.color_textPrivate}>
                        By signing up you agree to our
                </Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                    <Text style={styles.color_textPrivate}>{" "}and</Text>
                    <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                </View>
                <View style={styles.button}>
                    <LinearGradient
                        colors={["#08d4c4", "#01ab9d"]}
                        style={styles.signIn}
                    >
                        <Text style={[styles.textSign, { color: "#fff" }]}>Sign Up</Text>
                    </LinearGradient>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('SigninScreen') }}
                        style={[styles.signIn, {
                            borderColor: "#009387",
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: "#009387"
                        }]}>Sign In</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#009387"
    },
    header: {
        flex: 1,
        paddingHorizontal: 20,
        justifyContent: "flex-end",
        paddingBottom: 50
    },
    footer: {
        flex: 2,
        backgroundColor: "#fff",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingVertical: 30,
        paddingHorizontal: 20
    },
    textHeader: {
        color: "#fff",
        fontWeight: "bold",
        fontSize: 30
    },
    text_footer: {
        color: "#05375a",
        fontSize: 18
    },
    action: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#f2f2f2",
        paddingBottom: 5,
        marginBottom: 10
    },
    TextInput: {
        flex: 1,
        marginLeft: 10
    },
    button: {
        alignItems: "center",
        marginTop: 50
    },
    signIn: {
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: "bold"
    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: 'grey'
    }
})