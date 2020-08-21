import {
    View,
    Button,
    Text,
    StyleSheet,
    TouchableOpacity,
    Dimensions,
    Platform,
    TextInput,
    StatusBar,
    Alert
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import * as Animatable from 'react-native-animatable'
import LinearGradient from 'react-native-linear-gradient'
import { AuthContext } from '../components/context'
import Users from '../model/users'
import { useTheme } from 'react-native-paper'

export default SigninScreen = ({ navigation }) => {

    const { colors } = useTheme()
    const { signIn } = React.useContext(AuthContext)
    const [data, setData] = useState({
        username: '',
        password: '',
        check_text_input_change: false,
        secureTextEntry: true,
        isValidUsername: true,
        isvalidPassword: true
    })

    const textInputChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                username: val,
                check_text_input_change: true,
                isValidUsername: true
            })
        }
        else {
            setData({
                ...data,
                username: val,
                check_text_input_change: false
            })
        }
    }

    const handlePasswordChange = (val) => {
        if (val.trim().length >= 4) {
            setData({
                ...data,
                password: val,
                isvalidPassword: true
            })
        }
        else {
            setData({
                ...data,
                password: val
            })
        }
    }
    const toggleSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        })
    }

    const handleSignIn = () => {
        const founduser = Users.filter((item) => (item.username == data.username && item.password === data.password))
        if (founduser.length === 0) {
            Alert.alert('Invalid User!', 'Username or Password is incorrect.', [{ text: "Okey" }])
            return
        }
        signIn(founduser)
    }

    const handleValidUser = (value) => {
        if (value.length >= 4) {
            setData({
                ...data,
                isValidUsername: true
            })
        }
        else {
            setData({
                ...data,
                isValidUsername: false
            })
        }
    }
    const handleValidPassword = (value) => {
        if (value.trim().length >= 4) {
            setData({
                ...data,
                isvalidPassword: true
            })
        }
        else {
            setData({
                ...data,
                isvalidPassword: false
            })
        }
    }

    return (
        <View style={styles.container}>
            <StatusBar
                backgroundColor="#009387"
                barStyle="light-content"
            />
            <View style={styles.header}>
                <Text style={styles.textHeader}>Welcome!</Text>
            </View>
            <Animatable.View style={[styles.footer, {
                backgroundColor: colors.background
            }]} animation="fadeInUpBig">
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome
                        name="user-o"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Username"
                        style={[styles.TextInput, {
                            color: colors.text
                        }]}
                        autoCapitalize="none"
                        onChangeText={textInputChange}
                        value={data.username}
                        onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
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
                {data.isValidUsername ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMessage}>Username must be 4 characters Long</Text>
                    </Animatable.View>
                }
                <Text style={[styles.text_footer, {
                    color: colors.text
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather
                        name="lock"
                        color={colors.text}
                        size={20}
                    />
                    <TextInput
                        placeholder="Password"
                        secureTextEntry={data.secureTextEntry}
                        style={[styles.TextInput, {
                            color: colors.text
                        }]}
                        value={data.password}
                        onChangeText={handlePasswordChange}
                        onEndEditing={(e) => handleValidPassword(e.nativeEvent.text)}
                    />
                    <TouchableOpacity onPress={toggleSecureTextEntry}>
                        <Feather
                            name={data.secureTextEntry ? "eye-off" : "eye"}
                            color="grey"
                            size={20}
                        />
                    </TouchableOpacity>
                </View>
                {data.isvalidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMessage}>Password must be 4 characters Long</Text>
                    </Animatable.View>
                }
                <TouchableOpacity>
                    <Text style={{ color: '#009387', marginTop: 15 }}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity onPress={handleSignIn} style={styles.signIn}>
                        <LinearGradient
                            colors={["#08d4c4", "#01ab9d"]}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, { color: "#fff" }]}>Sign In</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => { navigation.navigate('SignupScreen') }}
                        style={[styles.signIn, {
                            borderColor: "#009387",
                            borderWidth: 1,
                            marginTop: 15
                        }]}
                    >
                        <Text style={[styles.textSign, {
                            color: "#009387"
                        }]}>Sign Up</Text>
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
        paddingBottom: 5
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
    errorMessage: {
        color: '#FF0000',
        fontSize: 14
    }
})