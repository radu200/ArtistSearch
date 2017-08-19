import React, { Component } from "react";
import { connect } from "react-redux";

class ArtistDetail extends Component {
  render() {
    if (!this.props.artist) {
      
      return <div className="container"><div className=" col-md-6 h3 mt-4 float-right ">Click on artist image to get artist tour details.</div></div>;
                                                                     
    }

    return (
      <div className="container">
         <div className=" col-md-6 col-sm-12 bg-primary text-white detail-wrapper float-right" >
        <h3> Artist Tour Details:</h3>
        <img  className="img-fluid img-big" src={this.props.artist.image} alt=''/>
        <div >Name: {this.props.artist.name}</div>
        <div>Location: {this.props.artist.location}</div>
        <div>Price: {this.props.artist.price}</div>
        <div>Date: {this.props.artist.date}</div>
        <div>Time: {this.props.artist.time}</div>
        
       </div>
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

