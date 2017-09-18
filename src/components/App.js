import React from "react";
import { Component } from "react";
import "../App.css"
import SearchBar from './search_bar';




import ArtistList from "../containers/artist_list";

 class App extends Component {
  render() {
    return (
      <div> 
        <SearchBar/>
        <ArtistList />
      </div>
    );
  }
}

export default App;
