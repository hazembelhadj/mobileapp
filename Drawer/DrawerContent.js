import React,{useContext} from 'react';
import { View, StyleSheet } from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    provider as paperProvider,
    DarkTheme as PaperDarkTheme,

    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';
import Firebase from '../screens/Firebase.js';
import Welcomee from '../screens/Welcomee.js';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Signin from '../screens/Signin.js';
import Signup from '../screens/Signup.js';
import Mains from '../screens/Mains.js';
import  {AuthContext} from '../screens/Test.js';

const DrawerContent  = (props,{navigation}) => {
    const paperTheme = useTheme();

    // const { toggleTheme } = useContext(AuthContext);


   const onSignoutPress = (navigation) => {
        Firebase.auth()
        .signOut()
        .then(() => props.navigation.navigate('Welcomee'))
    };


   return(

 <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://api.adorable.io/avatars/50/abott@adorable.png'
                                }}
                                size={50}
                            />
                            <View style={{marginLeft:15, flexDirection:'column'}}>
                                <Title style={styles.title } numberOfLines = {2}>Hazem Belhadj </Title>
                                <Caption style={styles.caption}>hazem.belhadj222@gmail.com</Caption>
                            </View>
                        </View>


                    </View>

                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({color, size}) => (
                            <Icon
                               name="home-outline"
                                color={color}
                                size={size}
                            />
                            )}
                             label="Main"
                                 onPress={() => {props.navigation.navigate('Mains')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="home-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Welcome"
                            onPress={() => {props.navigation.navigate('Welcomee')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="account-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Signin"
                            onPress={() => {props.navigation.navigate('Signin')}}
                        />
                        <DrawerItem
                            icon={({color, size}) => (
                                <Icon
                                name="bookmark-outline"
                                color={color}
                                size={size}
                                />
                            )}
                            label="Signup"
                            onPress={() => {props.navigation.navigate('Signup')}}
                        />


                    </Drawer.Section>
                    <Drawer.Section title="Preferences">
                        <TouchableRipple onPress={() => {}}>
                            <View style={styles.preference}>
                                <Text>Dark Theme</Text>
                                <View pointerEvents="none">
                                    <Switch value={paperTheme.dark}/>
                                </View>
                            </View>
                        </TouchableRipple>
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({color, size}) => (
                        <Icon
                        name="exit-to-app"
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {onSignoutPress ()}}
                />
            </Drawer.Section>
        </View>
                 );
             }



             const styles = StyleSheet.create({
                 drawerContent: {
                   flex: 1,
                 },
                 userInfoSection: {
                   paddingLeft: 20,
                 },
                 title: {
                   fontSize: 16,
                   marginTop: 3,
                   fontWeight: 'bold',
                 },
                 caption: {
                   fontSize: 14,
                   lineHeight: 14,
                 },
                 row: {
                   marginTop: 20,
                   flexDirection: 'row',
                   alignItems: 'center',
                 },
                 section: {
                   flexDirection: 'row',
                   alignItems: 'center',
                   marginRight: 15,
                 },
                 paragraph: {
                   fontWeight: 'bold',
                   marginRight: 3,
                 },
                 drawerSection: {
                   marginTop: 15,
                 },
                 bottomDrawerSection: {
                     marginBottom: 15,
                     borderTopColor: '#f4f4f4',
                     borderTopWidth: 1
                 },
                 preference: {
                   flexDirection: 'row',
                   justifyContent: 'space-between',
                   paddingVertical: 12,
                   paddingHorizontal: 16,
                 },
               });
 export default DrawerContent;