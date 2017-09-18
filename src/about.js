import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';


class About extends Component {
  render() {
    // if (!this.props.artist) {
    //   return null                                                                 
    // }

    return (
      <div className="container">
        hello from details
         {/* <div className="" >
        <h3> Artist Tour Details:</h3>
        <img  className=" " src={this.props.artist.image} alt=''/>
        <div >Name: {this.props.artist.name}</div>
        <div>Location: {this.props.artist.location}</div>
        <div>Price: {this.props.artist.price}</div>
        <div>Date: {this.props.artist.date}</div>
        <div>Time: {this.props.artist.time}</div> */}
        
       </div>
      
    );
  }
}

function mapStateToProps(state) {
  return {
    artist: state.activeArtist
  };
}


export default  withRouter(connect(mapStateToProps)(About))

