

import React,{useState} from 'react'
import { StyleSheet, View, TextInput, Button,TouchableOpacity, Text ,FlatList,ActivityIndicator} from 'react-native'
import   Data from '../Donaters/Data.js';
import   Films from '../Donaters/Films.js';
import   FilmDetail from '../Drawer/FilmDetail.js';
import   getFilmsFromApiWithSearchedText from '../Api/Token.js';

import Firebase from './Firebase.js';
import Welcomee from './Welcomee.js';
import * as firebase from 'firebase';
import  {useTheme}  from '@react-navigation/native';

const Search =  ({navigation}) => {
  const {colors}   = useTheme();
  //const page = 0;
 // const totalpages = 0;


 const [films, setFilms] = useState( [] );
 const [search,setSearch] = useState('');
 const [page,setPage] = useState(0);
 const [totalpages,setTotalPages] = useState(0);
 const [loading ,setLoading] = useState('false');
 /*const loading = () => {

      getFilmsFromApiWithSearchedText("never back down").then(data =>
         {setFilm (data.results)})
}*/
  const SearchedTextChange = (text) => {

   setSearch (  text)

  }

 // Components/Search.js

  const loadFilms = ()  => {
     console.log(search)
     if (search.length > 0) {

       getFilmsFromApiWithSearchedText(search).then(data => {

            setFilms ( data.results)})


     }
 }
/* const searchFilms = () => {
   setTotalPages === 0
   setPage === 0

   setFilms ( loadFilms())





 }
 const displayLoading = () => {
   if (setLoading){
   return(
       <View style={styles.loading_container}>
                <ActivityIndicator size='large' />
              </View>


   )


   }



 }
*/
 const displayDetailForFilm = (idFilm) => {
    console.log("Display film with id " + idFilm)
    navigation.navigate('FilmDetail' , { idFilm : idFilm})

}

    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput } placeholder='Titre du film'
         onChangeText={(text) => SearchedTextChange(text)}
        />

        <TouchableOpacity style={styles.button} onPress = { () => loadFilms()   }



        >
           <Text style ={[styles.text , {}]}>Rechercher</Text>
        </TouchableOpacity>


        <FlatList
           data={films}
           keyExtractor={(item) => item.id.toString()}
           renderItem={({item}) =>  <Films film={item}   dsplayDetailForFilm={displayDetailForFilm} />}



        />

      </View>
    )
  }


const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 40

  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    height: 50,
    borderColor: '#000000',
    borderRadius: 40,
    borderWidth: 1,
    paddingLeft: 5,
       backgroundColor: '#666666',
       color:	'#FFFFFF',
      textAlign: 'center'

  },
   loading_container: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 100,
      bottom: 0,
      alignItems: 'center',
      justifyContent: 'center'
    },
  button :{
  alignItems:'center',
  justifyContent:'center'
  },
  text : {
color: '#666666'
  }
})

export default Search