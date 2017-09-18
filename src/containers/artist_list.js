import React, {Component} from "react";
import {connect} from "react-redux";
import {selectArtist} from "../actions/index";
import {bindActionCreators} from "redux";
import {Link} from 'react-router-dom'
import { withRouter } from 'react-router-dom';


class ArtistList extends Component {
  renderList() {
  
    return this
      .props
      .artists
      .map(artist => {
        return ( 
          <div key={artist.name} >
        <img className="imgHome" src={artist.image} alt=""/>
        <br/>
          <button className="btn btn-primary"  ><Link to="/about"  onClick={() => this.props.selectArtist(artist)}>More Info</Link></button>
         </div>
        );
      });
  }

  render() {
    return (
      <div className="container-flex">
        {this.renderList()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {artists: state.artists};
}

function mapDispatchToProps(dispatch) {

  return bindActionCreators({
    selectArtist: selectArtist
  }, dispatch);
}

export default withRouter( connect(mapStateToProps, mapDispatchToProps)(ArtistList));
