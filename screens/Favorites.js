import React from 'react'
import { StyleSheet, Text } from 'react-native'
import Films from '../Donaters/Films'
import FilmList from './FilmList'
import { connect } from 'react-redux'

class Favorites extends React.Component {
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
  render() {
    return (
      <FilmList
        films={this.props.favoritesFilm}
        navigation={this.props.navigation}
        favoriteList={true}
      />
    )
  }
}

const styles = StyleSheet.create({})

const mapStateToProps = state => {
  return {
    favoritesFilm: state.favoritesFilm
  }
}

export default connect(mapStateToProps)(Favorites)