import { StatusBar } from 'expo-status-bar';
import React,{ useColorScheme } from 'react';
import { StyleSheet, TouchableOpacit, View } from 'react-native';
import Welcomee from './screens/Welcomee';
import Signin from './screens/Signin.js';
import Signup from './screens/Signup.js';
import Mains from './screens/Mains.js';
import Navigation from './screens/Navigation.js';
import 'react-native-gesture-handler';
import * as firebase from 'firebase';
import { NavigationContainer, DarkTheme,DefaultTheme,} from '@react-navigation/native';
import {

    Provider as PaperProvider,
    DarkTheme as PaperDarkTheme



} from 'react-native-paper';
import { Provider } from 'react-redux'
import Config from './Storage/Reducer/Config.js'
const {store} = Config();

  const Ap = () => {

    return(
    <Provider store = {store}>
    <NavigationContainer /*theme ={DarkTheme}*/>
        <Navigation/>
    </NavigationContainer>
    </Provider>
    )
  }




export default Ap;