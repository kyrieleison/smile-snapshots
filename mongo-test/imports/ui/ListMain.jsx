import React, { Component, PropTypes } from 'react';
import { createContainer } from 'meteor/react-meteor-data';
import ListImages from './ListImages';
import { Photos } from '../api/photos.js'


const imgs = [
      { id:1, url:'img/images.jpg',msg:'A店' },
      { id:2, url:'img/images.jpg',msg:'B店' },
      { id:3, url:'img/images.jpg',msg:'C店' },
      { id:4, url:'img/images.jpg',msg:'観光地A' },
      { id:5, url:'img/images.jpg',msg:'観光地B' },
    ];
    
// Task component - represents a single todo item
class ListMain extends Component {
  
  /* TODO: iPhoneから送信されてきた画像をnode.jsでpublic/imgに保存した後、
  　　画像一覧のURLをimgsを参考に生成してListImagesに渡してください。　*/

  constructor(props) {
    super(props);
    
    
  }

  render() {

    return (
      <div>
        {/* <ListImages images={imgs} /> */}
        <ListImages images={this.props.imgsMongo} />
      </div>
    );
  }
} 
 
export default createContainer(() => {
 // Meteor.subscribe("server_states");
 // console.log("recive upload");
 // this.imgsMongo = Photos.find({});
 // console.log("MongoDB:"+Photos.find({}));
  return {
    imgsMongo : Photos.find({}).fetch(),
  };
}, ListMain);

