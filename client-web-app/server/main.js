import { Meteor } from 'meteor/meteor';
import querystring from 'querystring';

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
        //パースする
        querystring.parse(data);
        res.end(data);
      });
    }
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ payload: 'ok' }));
  });
});

