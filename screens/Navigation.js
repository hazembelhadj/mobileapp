import * as React from 'react';
import { View, Text ,Image,StyleSheet} from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator,DrawerIcon } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/Ionicons';
import Welcomee from './Welcomee';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Mains from './Mains.js';
import Favorites from './Favorites.js';
import FilmDetail from '../Drawer/FilmDetail.js';
import Films from '../Donaters/Films.js';
import DrawerContent from '../Drawer/DrawerContent.js';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';



import 'react-native-gesture-handler';
const WelcomeStack = createStackNavigator();
const SignupStack = createStackNavigator();
const SigninStack = createStackNavigator();
const MainsStack = createStackNavigator();
const FilmStack = createStackNavigator();
const FilmsStack = createStackNavigator();

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator () ;
const Tab = createMaterialBottomTabNavigator();

const navigation = ( { route,navigation}) => {




/*const WelcomeStackScreen = ({navigation}) => (
<WelcomeStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#9e4244',

        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <WelcomeStack.Screen name="Welcomee" component={Welcomee} options={{

        }} />
</WelcomeStack.Navigator> );
const FilmStackScreen = ({navigation}) => (
                        <FilmStack.Navigator screenOptions={{
                                headerStyle: {
                                backgroundColor: '#9e4244',
                                },
                                headerTintColor: '#fff',
                                headerTitleStyle: {
                                fontWeight: 'bold'
                                }
                            }}>
                                <SigninStack.Screen name="FilmDetail" component={FilmDetail} options={{

                                }} />
                        </FilmStack.Navigator>);
 const FilmsStackScreen = ({navigation}) => (
 <FilmsStack.Navigator screenOptions={{
         headerStyle: {
         backgroundColor: '#9e4244',
         },
         headerTintColor: '#fff',
         headerTitleStyle: {
         fontWeight: 'bold'
         }
     }}>
         <SigninStack.Screen name="Films" component={Films} options={{

         }} />
 </FilmsStack.Navigator>);

const SigninStackScreen = ({navigation}) => (
<SigninStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#9e4244',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SigninStack.Screen name="Signin" component={Signin} options={{

        }} />
</SigninStack.Navigator>);


const SignupStackScreen = ({navigation}) => (
<SignupStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#9e4244',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <SignupStack.Screen name="Signup" component={Signup} options={{

        }} />
</SignupStack.Navigator>);
const MainsStackScreen = ({navigation}) => (
<MainsStack.Navigator screenOptions={{
        headerStyle: {
        backgroundColor: '#9e4244',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        fontWeight: 'bold'
        }
    }}>
        <MainsStack.Screen name="Main" component={Mains} options={{
         headerLeft: () => (
                    <Icon.Button name="ios-menu" size={25} backgroundColor="#9e4244"
                    onPress={() => navigation.openDrawer()}></Icon.Button>
                )}} />


</MainsStack.Navigator>);


*/
 const DrawerRoutes = (props) => {
 return(
<Drawer.Navigator  drawerContent = {props =>   <DrawerContent { ...props}/>  }>

        <Drawer.Screen name="Mains" component={Mains}
         />





 </Drawer.Navigator>)
}

const Navig = (navigation) => {
 return(


<Tab.Navigator
activeColor="#9e4244"
barStyle={{ backgroundColor: '#FFFFFF' }}>
      <Tab.Screen name="Recherche" component={Mains} options={{  tabBarIcon: () => {
                                                                    return <Image
                                                                      source={require('../assets/recherche.png')}
                                                                      style={styles.icon}/>




                                                                        }}} />
      <Tab.Screen name="Favoris" component={Favorites} options={{ tabBarIcon: () => {
                                                                            return <Image
                                                                              source={require('../assets/favoris.png')}
                                                                              style={styles.icon}/>
                                                                          }}} />
    </Tab.Navigator>

)

}
const Final = (navigation) =>{
return (
DrawerRoutes(),
Navig()

)


}

 return (




     <Stack.Navigator initialRouteName="Welcomee" >
        <Stack.Screen name="Welcomee" component={Welcomee}
         options={{
                 headerStyle: {
                 backgroundColor: '#9e4244',
                 },
                 headerTintColor: '#fff',
                 headerTitleStyle: {
                 fontWeight: 'bold'
                 }
             }}/>
        <Stack.Screen name="Signup" component={Signup}
         options={{
                 headerStyle: {
                 backgroundColor: '#9e4244',
                 },
                 headerTintColor: '#fff',
                 headerTitleStyle: {
                 fontWeight: 'bold'
                 }
             }}/>
        <Stack.Screen name="Signin" component={Signin}
         options={{
                headerStyle: {
                backgroundColor: '#9e4244',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                fontWeight: 'bold'
                }
            }}/>
        <Stack.Screen name="Mains" component={Final}
         options={{  headerStyle: {
                                    backgroundColor: '#9e4244',
                                    },
                                    headerTintColor: '#fff',
                                    headerTitleStyle: {
                                    fontWeight: 'bold'
                                    },
                          headerLeft: (props) => (
                            <Icon.Button name="ios-menu" size={25} backgroundColor="#9e4244"
                              onPress={() => props.navigation.openDrawer()}></Icon.Button>
                                 )}} />
        <Stack.Screen name="FilmDetail" component={FilmDetail} />

      </Stack.Navigator>






);
};


const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30
  }
})
export default navigation;