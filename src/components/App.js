import React from "react";
import { Component } from "react";
import "../App.css"
import SearchBar from './search_bar';
import { Link } from 'react-router-dom';


import ArtistList from "../containers/artist_list";

 class App extends Component {
  render() {
    return (
      <div>
        <Link to="/about"></Link>
        <SearchBar/>
        <ArtistList />
      </div>
    );
  }
}

export default App;