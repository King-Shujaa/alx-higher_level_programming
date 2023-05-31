#!/usr/bin/node

const request = require('request');
const fs = require('fs');
const url = process.argv[2];
const filePath = process.argv[3];

request(url, function (err, response, body) {
  if (err) {
    console.log(err);
  } else {
    fs.writeFile(filePath, body, 'utf-8', function (err) {
      if (err) {
        console.log(err);
      } else {
        console.log('Webpage content has been saved to:', filePath);
      }
    });
  }
});
