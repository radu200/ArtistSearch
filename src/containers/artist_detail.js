import React, { Component } from "react";
import { connect } from "react-redux";
import {Link} from 'react-router-dom';

class ArtistDetail extends Component {
  render() {
       if (!this.props.artist) {   
               
           return  <button className="btn btn-success"><Link to="/">Back to homepage</Link></button>
                                                              
    }                                                         
     
    return (
     <div className="container ">
         <div className=" row " >
          <div className="col-md-4">
            <br/>
         <img className="img-about" src={this.props.artist.image} alt=''/>
         </div>
          <div className="col-md-8">
            <br/>
        <ul className="list-group">
         <li className=" list-group-item">
         Artist Tour Details:
        </li>
         <li className=" list-group-item">
        Name: {this.props.artist.name}
        </li>
        <li className=" list-group-item">Location: {this.props.artist.location}</li>
        <li className=" list-group-item">Price: {this.props.artist.price}</li>
        <li className=" list-group-item">Date: {this.props.artist.date}</li>
        <li className=" list-group-item">Time: {this.props.artist.time}</li>
      </ul>
      <br></br>
        <button className="btn btn-success"><Link to="/">Back to homepage</Link></button>
       </div>
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