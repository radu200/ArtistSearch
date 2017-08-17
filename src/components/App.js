import React from "react";
import { Component } from "react";
import SearchBar from './search_bar';


import ArtistList from "../containers/artist_list";
import ArtistDetail from "../containers/artist_detail";

 class App extends Component {
 
  render() {
    return (
      <div>
        <SearchBar/>
        <ArtistList />
        <ArtistDetail />
      </div>
    );
  }
}

export default App;