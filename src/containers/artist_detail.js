import React, { Component } from "react";
import { connect } from "react-redux";

class ArtistDetail extends Component {
  render() {
    if (!this.props.artist) {
      return <div className=" col-md-6 mx-auto h3 mt-4">Click on artist name to get artist tour details.</div>;
    }

    return (
      <div className=" col-md-6 mx-auto bg-primary text-white " >
        <h3> Artist Tour Details:</h3>
        <div >Name: {this.props.artist.name}</div>
        <div>Location: {this.props.artist.location}</div>
        <div>Price: {this.props.artist.price}</div>
        <div>Date: {this.props.artist.date}</div>
        <div>Time: {this.props.artist.time}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.activeArtist
  };
}

ArtistDetail.protoTypes = {
  
}
export default connect(mapStateToProps)(ArtistDetail);

