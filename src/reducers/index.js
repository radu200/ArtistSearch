import { combineReducers } from "redux";
import ArtistsReducer from "./reducer_artists";
import ActiveArtist from "./reducer_active_artist";

const rootReducer = combineReducers({
 artists: ArtistsReducer,
  activeArtist: ActiveArtist
});

export default rootReducer;

