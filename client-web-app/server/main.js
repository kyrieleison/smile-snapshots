import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';
import querystring from 'querystring';
import dateformat from 'dateformat';
import fs from 'fs';

import { Photos } from '../imports/api/photos.js';

Meteor.startup(() => {

  // console.log(process.argv[1], "a.js", "cwd", process.cwd());
  let paths = process.cwd().split('.');
  console.log(paths[0]);
  fs.writeFileSync(paths[0]+"/public/img/test.txt","testes");
  // fs.writeFile(__dirname+'/test.txt',"aaaaaa");

  WebApp.connectHandlers.use("/image", (req, res, next) => {
    let data = '';
    let filename = dateformat(new Date(), 'yyyymmddHHMMss');

    if (req.method === 'POST') { 
      console.log("Receive POST");

      req.on('readable', (chunk) => {
        data += req.read();
      });

      req.on('end', () => {
        console.log("Request Body:" + data);
        let image = querystring.parse(data).image;
        res.end(data);

        //fs.writeFile(`../web.browser/app/img/uploaded_${filename}.jpg`, image, 'base64', (err) => {
        fs.writeFile(paths[0]+`/public/img/uploaded_${filename}.jpg`, image, 'base64', (err) => {
          if (err) { console.log("Error:" + err) };
          console.log('It\'s Saved');

          Photos.insert({
            userID: 1,
            user: '山田太郎',
            url: `img/uploaded_${filename}.jpg`,
            shopID: 1,
            shopName:'A店',
            createdAt: new Date()
          });
        })
      });
    }

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ payload: 'ok' }));
  });
});
