

import React,{useState} from 'react'
import { StyleSheet, View, TextInput, Button,TouchableOpacity, Text ,FlatList,ActivityIndicator} from 'react-native'
import   Data from '../Donaters/Data.js';
import   Films from '../Donaters/Films.js';
import   FilmDetail from '../Drawer/FilmDetail.js';
import { connect } from 'react-redux'
import FilmList from './FilmList'
import   getFilmsFromApiWithSearchedText from '../Api/Token.js';

import Firebase from './Firebase.js';
import Welcomee from './Welcomee.js';
import * as firebase from 'firebase';
import  {useTheme}  from '@react-navigation/native';
class Search extends React.Component {

  constructor(props) {
    super(props)
    this.searchedText = ''
      this.page = 0
        this.totalPages = 0
    this.state = {
      films: [],
      isLoading: false

    }
  }

  //const page = 0;
 // const totalpages = 0;


/* const [films, setFilms] = useState( [] );
 const [search,setSearch] = useState('');
 const [page,setPage] = useState(0);
 const [totalpages,setTotalPages] = useState(0);
 const [loading ,setLoading] = useState('false');
 const loading = () => {

      getFilmsFromApiWithSearchedText("never back down").then(data =>
         {setFilm (data.results)})
}*/
  SearchedTextChange  (text)  {
this.searchedText = text


  }

 // Components/Search.js

   loadFilms () {
     console.log(this.search)

     if (this.searchedText.length > 0) {
      this.setState({ isLoading: true })
       getFilmsFromApiWithSearchedText(this.searchedText,this.page+1).then(data => {

         this.setState ({ films: [ ...this.state.films, ...data.results ],
                                     isLoading: false })


     })
 }}
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
  displayDetailForFilm = (idFilm)  => {
    console.log("Display film with id " + idFilm)
   this.props.navigation.navigate('FilmDetail' , {idFilm : idFilm})

}
_searchFilms() {
  this.page = 0
  this.totalPages = 0
  this.setState({
    films: []
  })
    // Ici on va remettre à zéro les films de notre state
    this.loadFilms()
}
  _displayLoading() {
    if (this.state.isLoading) {
      return (
        <View style={styles.loading_container}>
          <ActivityIndicator size='large' />
        </View>
      )
    }
  }
render(){
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput } placeholder='Titre du film'
         onChangeText={(text) =>this.SearchedTextChange(text)}
           onSubmitEditing={() => this._searchFilms()}

        />

        <TouchableOpacity style={styles.button} onPress = { () => this._searchFilms()  }



        >
           <Text style ={[styles.text , {}]}>Rechercher</Text>
        </TouchableOpacity>


        <FilmList
                   films={this.state.films}
                   navigation={this.props.navigation}
                   loadFilms={this._loadFilms}
                   page={this.page}
                   totalPages={this.totalPages}
                   favoriteList={false}

        />
         {this._displayLoading()}
      </View>
    )
  }
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

  button :{
  alignItems:'center',
  justifyContent:'center'
  },
  text : {
color: '#666666'
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
})
const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}
export default connect(mapStateToProps)(Search)