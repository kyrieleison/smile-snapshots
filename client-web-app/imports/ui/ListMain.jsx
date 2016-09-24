import React, { Component, PropTypes } from 'react';
import ListImages from './ListImages';

const imgs = [
      { id:1, url:'img/images.jpg',msg:'A店' },
      { id:2, url:'img/images.jpg',msg:'B店' },
      { id:3, url:'img/images.jpg',msg:'C店' },
      { id:4, url:'img/images.jpg',msg:'観光地A' },
      { id:5, url:'img/images.jpg',msg:'観光地B' },
    ];
    
// Task component - represents a single todo item
export default class Home extends Component {
  
  /* TODO: iPhoneから送信されてきた画像をnode.jsでpublic/imgに保存した後、
  　　画像一覧のURLをimgsを参考に生成してListImagesに渡してください。

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ListImages images={imgs} />
      </div>
    );
  }
} 
 

