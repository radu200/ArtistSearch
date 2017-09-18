import { combineReducers } from "redux";
import ArtistsReducer from "./reducer_artists";
import ActiveArtist from "./reducer_active_artist";
import { routerReducer } from 'react-router-redux';


const rootReducer = combineReducers({
 routing: routerReducer,
 artists: ArtistsReducer,
  activeArtist: ActiveArtist
});

export default rootReducer;

