import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ListImages from './ListImages';

import { Photos } from '../api/photos.js';

// const imgs = [
//       { id:1, url:'img/images.jpg',msg:'A店' },
//       { id:2, url:'img/images.jpg',msg:'B店' },
//       { id:3, url:'img/images.jpg',msg:'C店' },
//       { id:4, url:'img/images.jpg',msg:'観光地A' },
//       { id:5, url:'img/images.jpg',msg:'観光地B' },
//     ];
    
export default class ListMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <ListImages images={this.props.imgsMongo} />
      </div>
    );
  }
} 

export default createContainer(() => {
 // Meteor.subscribe("server_states");
 // console.log("recive upload");
 // this.imgsMongo = Photos.find({});
  console.log(Photos);
  console.log("MongoDB:"+Photos.find({}).fetch());
  return {
    imgsMongo : Photos.find({}).fetch(),
  };
}, ListMain);
