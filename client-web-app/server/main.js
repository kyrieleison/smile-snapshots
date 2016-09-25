import { Meteor } from 'meteor/meteor';
import querystring from 'querystring';
import fs from 'fs';

Meteor.startup(() => {
  WebApp.connectHandlers.use("/image", (req, res, next) => {
    // console.log(Object.keys(req));
    // リクエストデータ処理
    let data = '';
    if (req.method === 'POST') { 
      console.log("Receive POST");
      //readableイベントが発火したらデータにリクエストボディのデータを追加
      req.on('readable', (chunk) => {
        data += req.read();
      });
      //リクエストボディをすべて読み込んだらendイベントが発火する。
      req.on('end', () => {
        console.log("Request Body:" + data);
        let image = querystring.parse(data).image;
        res.end(data);
        fs.writeFile('../web.browser/app/img/uploaded.jpg', image, 'base64', (err) => {
          console.log("error:" + (err));
        })
      });
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ payload: 'ok' }));
  });
});
