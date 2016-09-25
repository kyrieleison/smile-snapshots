import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import querystring from 'querystring';
import base64 from 'urlsafe-base64';
import fs from 'fs';
import {Photos } from '../imports/api/photos.js'

Meteor.startup(() => {
  WebApp.connectHandlers.use("/hello", (req, res, next) => {
    // console.log(Object.keys(req));
    // リクエストデータ処理
    let data = '';
    /* if (req.method === 'POST') { 
      console.log("Receive POST");
      //readableイベントが発火したらデータにリクエストボディのデータを追加
      req.on('readable', (chunk)　=> {
            data += req.read();
        });
      //リクエストボディをすべて読み込んだらendイベントが発火する。
      req.on('end', () => {
        //パースする
        querystring.parse(data);
          res.end(data);
          console.log("Request Body:"+data);
          
          let img =  base64.decode( data );
          fs.writeFile('../web.browser/app/img/uploaded.jpg',img,(err) =>{
            console.log("error:"+(err));  
          }) 
      }); 
    } */
    // 受信したファイル名を記録

    // Todos = new Mongo.Collection('Todos');
    // Todos.insert({_id: 'my-todo'});

    Photos.insert({
      userID: 1,
      user: '利用者A',
      url:'img/images.jpg',
      shopID: 1,
      shopName:'A店',
      createdAt: new Date()
    }); 

    /* Meteor.publish("update_images", () => {
      console.log("notify upload");
      this.ready();
    }); */

    res.writeHead(200);
    res.end("Hello world from: " + Meteor.release);
  })
});
