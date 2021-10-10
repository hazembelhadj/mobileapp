

import React,{Component} from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  StatusBar,
  TextInput,
  Animated,
  Dimensions,
  TouchableOpacity,
  Alert
} from "react-native";
import Feather from 'react-native-vector-icons/Feather';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import Mains from './Mains.js';
import Firebase from './Firebase.js';
import * as firebase from 'firebase';


export default class  Signin extends React.Component{
  constructor(props){
    super(props);
    this.state={
      typing_email: false,
      typing_password: false,
      typing_ConfirmPassword: false,
      animation_login : new Animated.Value(width-40),
      enable:true,
       email: '',
       password: '',
       isLoading: false,
       error:''
    }
  }
  updateInputVal = (val, prop) => {
    const state = this.state;
    state[prop] = val;
    this.setState(state);
  }


 userLogin = () => {
    if(this.state.email === '' && this.state.password === '') {
      Alert.alert('Enter details to signin!')
    } else {
      this.setState({
        isLoading: true,
      })
      Firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res)
        console.log('User logged-in successfully!')
        this.setState({
          isLoading: false,
          email: '',
          password: ''
        })
        this.props.navigation.navigate('Mains')
      })
      .catch(err => this.setState({ error: err.message }))
    }
  }



  _foucus(value){
    if(value=="email"){
      this.setState({
        typing_email: true,
        typing_password: false,
         typing_ConfirmPassword: false
      })
    }
    else if(value='password') {
      this.setState({
        typing_email: false,
        typing_password: true,
        typing_ConfirmPassword: false
      })
    }
    else{ this.setState({
                 typing_email: false,
                 typing_password: false,
                 typing_ConfirmPassword: true

    })
  }
}
  _typing(){
    return(
      <TypingAnimation
        dotColor="#93278f"
        style={{marginRight:25}}
      />
    )
  }

  _animation(){
    Animated.timing(
      this.state.animation_login,
      {
        toValue: 40,
        duration: 1000,
         useNativeDriver: false,
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable:false,
        typing_email: false,
        typing_password: false,
        typing_ConfirmPassword: false
      })
    }, 150);
  }
  firebase(){
    this._animation();
    this.userLogin();}

  render(){
    const width = this.state.animation_login;
    return(
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
          <View style={styles.header}>
              <ImageBackground
                source={require('../assets/header.png')}
                style={styles.imageBackground}
              >
                <Text style={{
                  color:'white',
                  fontWeight:'bold',
                  fontSize:30
                }}>Welcome Back</Text>
                <Text style={{
                  color:'white'
                }}>Sign in to continute</Text>

              </ImageBackground>
          </View>
          {
            this.state.error ?
             <Text style={styles.eror}>{this.state.error}</Text>
                : null
           }
          <View style={styles.footer}>
                <Text style={[styles.title,{
                  marginTop:50
                }]}>E-mail</Text>

                <View style={styles.action}>
                    <FontAwesome style={ {marginTop:7.5}}
                      name="user-o"
                      color='#05375a'
                      size={20}
                    />
                    <TextInput
                      placeholder="Your email.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("email")}
                       value={this.state.email}
                       onChangeText={(val) => this.updateInputVal(val, 'email')}
                    />
                    {this.state.typing_email ?
                      this._typing()
                    : null}
                </View>

                <Text style={[styles.title,{
                  marginTop:20
                }]}>Password</Text>
                <View style={styles.action}>
                     <Feather style={{marginTop:7.5}}
                       name="lock"
                       color='#05375a'
                       size={20}
                                    />
                    <TextInput
                      secureTextEntry
                      placeholder="Your password.."
                      style={styles.textInput}
                      onFocus={()=>this._foucus("password")}
                      value={this.state.password}
                       onChangeText={(val) => this.updateInputVal(val, 'password')}
                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>

                <TouchableOpacity
                onPress={()=>this.firebase()}>
                  <View style={styles.button_container}>
                        <Animated.View style={[styles.animation,{
                          width
                        }]}>
                          {this.state.enable ?
                            <Text style={styles.textLogin}>Login</Text>
                            :
                            <Animatable.View
                            animation="bounceIn"
                            delay={50}>
                              <FontAwesome
                                name="check"
                                color="white"
                                size={20}
                              />
                            </Animatable.View>
                          }
                        </Animated.View >
                  </View>
                </TouchableOpacity>

                <View style={styles.signUp}>
                      <Text style={{color:'black'}}>don't have an account yet?</Text>
                      <TouchableOpacity onPress ={ () => this.props.navigation.navigate('Signup')}>
                         <Text style={[{color:'#9e4244'},{fontSize:20},{marginTop:-5}]}> Sign up?</Text>
                      </TouchableOpacity>
                </View>
          </View>
      </View>
    )
  }
}

const width = Dimensions.get("screen").width;

var styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'white',
    justifyContent:'center'
  },
  header: {
    flex:1,
  },
  footer: {
    flex:2,
    padding:20,

  },
  imageBackground:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    width:"100%",
    height:'100%'
  },
  title: {
    color:'#9e4244',
    fontWeight:'bold'
  },
  action: {
     marginTop: 2,
    flexDirection:'row',
    borderBottomWidth:2,
    borderBottomColor:'#f2f2f2',
     paddingBottom: 5,
    justifyContent: 'space-between'
  },
  textInput: {
    flex:1,
    marginTop:5,
    paddingBottom:5,
    color:'gray',
    paddingLeft:10
  },
  button_container: {
    alignItems: 'center',
    justifyContent:'center'
  },
  animation: {
    backgroundColor:'#9e4244',
    paddingVertical:10,
    marginTop:30,
    borderRadius:100,
    justifyContent:'center',
    alignItems:'center'
  },
  textLogin: {
    color:'white',
    fontWeight:'bold',
    fontSize:18
  },
  signUp: {
    flexDirection:'row',
    justifyContent:'center',
    marginTop:20
  },
  eror:{
  color: '#9e4244' ,
  marginTop:50,
  paddingLeft:30

  }
});

