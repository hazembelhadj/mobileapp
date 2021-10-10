import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
    View,
    Text,
    TouchableOpacity,
    Dimensions,
    StyleSheet,

    Image,
    Button
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
//import { TouchableOpacity} from 'react-native-gesture-handler'

//import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons  from 'react-native-vector-icons/MaterialIcons';
import  {useTheme}  from '@react-navigation/native';

const Welcome = ({navigation,route}) => {
  const {colors}   = useTheme();

    return (
      <View style={styles.container}>
          <StatusBar backgroundColor='#9e4244' barStyle="light-content"/>
        <Animatable.View style={styles.header}
            animation="fadeInLeftBig">
            <Animatable.Image
                animation="bounceIn"
                duraton="1500"
            source={require('../assets/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
            />
        </Animatable.View>
        <Animatable.View
            style={[styles.footer, {
                backgroundColor: colors.background
            }]}
            animation="fadeInRightBig"
        >
            <Text style={[styles.title, {
               color: colors.text
                  }]}>Welcome to my App!</Text>
            <Text style={styles.text}>Sign in with account </Text>
            <View style={styles.button}>
            <TouchableOpacity onPress={() => navigation.navigate ('Signin')}>

                <LinearGradient
                    colors={['#fc4c4e', '#f25278']}
                    style={styles.signIn}
                    hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                >
                        <Text style={styles.textSign}>Get Started</Text>
                        <MaterialIcons
                           name="navigate-next"
                           color="#fff"
                           size={30}
                />
                </LinearGradient>




            </TouchableOpacity>
            </View>
        </Animatable.View>
      </View>
    );
};


const AnimatableTouchableOpacity = Animatable.createAnimatableComponent(TouchableOpacity);

const {height} = Dimensions.get("screen");
const height_logo = height * 0.25;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9e4244',


  },
  header: {
      flex: 2,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:10



  },
  footer: {
      flex: 1,
      backgroundColor: '#fa86c4',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo,
      borderRadius: 90
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30,
      fontSize:40
  },
  plus: {
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 50},
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
  },
  plus: {
      alignItems: "center",
      backgroundColor: "#DDDDDD",
      padding: 10
    }
});
export default (Welcome);