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
  TouchableOpacity
} from "react-native";
import * as firebase from 'firebase';
import Feather from 'react-native-vector-icons/Feather';
import { TypingAnimation } from 'react-native-typing-animation';
import FontAwesome from "react-native-vector-icons/FontAwesome";
import * as Animatable from 'react-native-animatable';
import Firebase from './Firebase.js';
import Welcomee from './Welcomee.js';

export default class  Signup extends React.Component{
  constructor(props){
    super(props);
    this.state={
      typing_email: false,
      typing_password: false,
      typing_ConfirmPassword: false,
      animation_login : new Animated.Value(width-40),
      enable:true,
        email: "",
            password: "",
            confirmpassword : "",
            error:""
    }
  }
   SignUp = (email, password,) => {

         Firebase.auth()
         .createUserWithEmailAndPassword(email, password,)
         .then(() => this.props.navigation.navigate('Signin'))
         .catch (err => this.setState({ error :err.message }));


     };
  _foucus(value){
      if(value=="email"){
        this.setState({
          typing_email: true,
          typing_password: false,
           typing_ConfirmPassword: false
        })
      }
      else if(value=='password') {
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
        duration: 250,
         useNativeDriver: false,
      }
    ).start();

    setTimeout(() => {
      this.setState({
        enable:false,
        typing_email: false,
        typing_password: false
      })
    }, 150);
  }
  firebase(){
  this._animation();
  this.SignUp(this.state.email, this.state.password);

  }

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
                }}>Sign up in to continue</Text>

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
                       onChangeText={email => this.setState({ email })}

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
                       onChangeText={password => this.setState({ password })}

                    />
                    {this.state.typing_password ?
                      this._typing()
                    : null}
                </View>

                 <Text style={[styles.title,{
                                  marginTop:20
                                }]}>Confirm Password</Text>
                <View style={styles.action}>
                                     <Feather style={{marginTop:7.5}}
                                      name="lock"
                                      color='#05375a'
                                      size={20}
                                     />
                                    <TextInput
                                      secureTextEntry
                                      placeholder="Confirm Password"
                                      style={styles.textInput}
                                      onFocus={()=>this._foucus("Confirm Password")}
                                       onChangeText={ confirmpassword  => this.setState({ confirmpassword  })}
                                    />
                                    {this.state.typing_ConfirmPassword?
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
                            <Text style={styles.textLogin}>Signup</Text>
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
    padding:20
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
    flexDirection:'row',
    borderBottomWidth:1,
    borderBottomColor:'#f2f2f2'
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

