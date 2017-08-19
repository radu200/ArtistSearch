import React, { Component } from "react";
import { connect } from "react-redux";
import { selectArtist } from "../actions/index";
import { bindActionCreators } from "redux";

class ArtistList extends Component {
  renderList() {
    return this.props.artists.map(artist => {
      return (
        <li
          key={artist.name}
          onClick={() => this.props.selectArtist(artist)}
          className="list-group-item bg-success list-container">
          <img className="img-fluid img-small " src={artist.image} alt=""/>
          {artist.name}
        </li>
      );
    });
  }

  render() {
    return (
           <div className="container">
           <div className="col-md-6 float-left  ">
          <ul className="list-group">
          {this.renderList()}
        </ul>
      </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artists: state.artists
  };
}


function mapDispatchToProps(dispatch) {

  return bindActionCreators({ selectArtist: selectArtist }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ArtistList);

