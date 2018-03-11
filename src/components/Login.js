import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import * as firebase from 'firebase';

/**
 * @IMPORTANT: firebase configuration
 * @type {{apiKey: string, authDomain: string, databaseURL: string, projectId: string, storageBucket: string, messagingSenderId: string}}
 */
const firebaseConfig = {
    apiKey: "AIzaSyAEgMSIVcaLUNFJ8MvL5TFvFwaJxDcIYYE",
    authDomain: "whatsnext-2018.firebaseapp.com",
    databaseURL: "https://whatsnext-2018.firebaseio.com",
    projectId: "whatsnext-2018",
    storageBucket: "whatsnext-2018.appspot.com",
    messagingSenderId: "920031413651"
    };
firebase.initializeApp(firebaseConfig);

/**
 * Main Login class handles login, register, button display
 */
class Login extends Component {
    state = {
        email: '',
        password: ''
    };

    handleEmail = (text) => {
      this.setState({ email: text })
    };

    handlePassword = (text) => {
      this.setState({ password: text })
    };

    /**
     * Logs in user
     * @TODO Pass to next task when logged in
     */
    onLogin = () => {
        this.email = this.state.email;
        this.password = this.state.password;

        firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then((user) => {
                /**
                 * @TODO Return main screen
                 */
            })
            .catch((error) => {
                const { code, message } = error;
                alert('wrong credentials')
            });
    };

    /**
     * Registers user
     * @TODO Pass to next task when registered
     */
    onRegister = () => {
        const { email, password } = this.state;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((user) => {
                alert('account created');
                /**
                 * @TODO Return main screen
                 */
            })
            .catch((error) => {
                const { code, message } = error;
                alert('error creating new account')
            });
    };

    /**
     * Display buttons top-bottom:
     *  email
     *  password
     *  login | register
     * @returns {*}
     */
    render(){
      return (
        <View style = {styles.container}>
            <TextInput style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "Email"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       onChangeText = {this.handleEmail}/>

            <TextInput secureTextEntry={true} style = {styles.input}
                       underlineColorAndroid = "transparent"
                       placeholder = "Password"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       type = "hidden"
                       onChangeText = {this.handlePassword}/>

            <View style = {styles.containerButtons}>
                <TouchableOpacity
                    style = {styles.loginButton}
                    onPress = {
                        () => this.onLogin()
                    }>
                    <Text style = {styles.buttonText}> Login </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style = {styles.registerButton}
                onPress = {
                    () => this.onRegister()

                }>
                <Text style = {styles.buttonText}> Register </Text>
            </TouchableOpacity>
        </View>
    )
  }
}
export default Login

/**
 * CSS
 */
const styles = StyleSheet.create({
    container: {
        paddingTop: '40%'
    },
    input: {
        margin: 15,
        padding: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    containerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginButton: {
        width:'40%',
        alignSelf: 'flex-start',
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    registerButton: {
        width:'40%',
        alignSelf: 'flex-end',
        backgroundColor: '#24CE84',
        padding: 10,
        margin: 15,
        height: 40,
    },
    buttonText:{
        color: 'white'
    }
});