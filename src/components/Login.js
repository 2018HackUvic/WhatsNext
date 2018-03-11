import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import currentTask from '../components/currentTask.js'
import * as firebase from 'firebase';
import TimePicker from "./timepicker";


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
                //alert('in');
                this.loadMainPages();
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
            })
            .catch((error) => {
                const { code, message } = error;
                alert('error creating new account')
            });
    };

    loadMainPages = () => {
        this.props.navigation.navigate('TimePicker');
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
        <View style = {styles.loginContainerLogin}>
            <TextInput style = {styles.loginInputLogin}
                       underlineColorAndroid = "transparent"
                       placeholder = "Email"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       onChangeText = {this.handleEmail}/>

            <TextInput secureTextEntry={true} style = {styles.loginInputLogin}
                       underlineColorAndroid = "transparent"
                       placeholder = "Password"
                       placeholderTextColor = "#9a73ef"
                       autoCapitalize = "none"
                       type = "hidden"
                       onChangeText = {this.handlePassword}/>

            <View style = {styles.loginContainerButtons}>
                <TouchableOpacity
                    style = {styles.loginLoginButton}
                    onPress = {
                        () => this.onLogin()
                    }>
                    <Text style = {styles.loginButtonText}> Login </Text>
                </TouchableOpacity>
            </View>

            <TouchableOpacity
                style = {styles.loginRegisterButton}
                onPress = {
                    () => this.onRegister()

                }>
                <Text style = {styles.loginButtonText}> Register </Text>
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
    loginContainerLogin: {
        paddingTop: '40%'
    },
    loginInputLogin: {
        margin: 15,
        padding: 10,
        height: 40,
        borderColor: '#7a42f4',
        borderWidth: 1,
    },
    loginContainerButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    loginLoginButton: {
        width:'40%',
        alignSelf: 'flex-start',
        backgroundColor: '#7a42f4',
        padding: 10,
        margin: 15,
        height: 40,
    },
    loginRegisterButton: {
        width:'40%',
        alignSelf: 'flex-end',
        backgroundColor: '#24CE84',
        padding: 10,
        margin: 15,
        height: 40,
    },
    loginButtonText:{
        color: 'white'
    }
});