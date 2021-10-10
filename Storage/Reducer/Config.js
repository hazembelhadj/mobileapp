import { createStore } from 'redux';
import toggleFavorite from './Favoris.js'

export default () => {

    let store =  createStore(toggleFavorite)
    return {store}
       }