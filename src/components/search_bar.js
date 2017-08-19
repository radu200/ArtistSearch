import React from "react";
import { Component } from "react";
import { connect } from 'react-redux';
import * as actions from '../actions';


class SearchBar extends Component {

  constructor(props){
    super(props);
    this.state ={search: ''};
  
    this.onInputChange = this.onInputChange.bind(this);

  }
  onInputChange(e){
    const value = e.target.value
    this.props.searchArtist(value);
    this.setState({search:value});

  }
  render() {
    return (
      <div className="container">
         <input type="text" 
          className="form-control col-md-6 mx-auto "
          placeholder="Search artist names from list"
          value={this.state.search} 
          onChange={this.onInputChange} />
      </div>
    );
  }
}
  
export default connect(null,actions)(SearchBar);