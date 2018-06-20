var request = require('request');
var fs = require('fs');

request.get(`https://apimatic.io/api/transform?format=apiblueprint&descriptionUrl=https%3A%2F%2Fdocumenter.getpostman.com%2Fview%2F839532%2FRWEfMKDJ`, function(error, response, body) {
  if (error) { return console.error(error); }
  console.log(body);
  fs.writeFile('dist/convert.apib', body, function(err) {
    if (err) { return console.error(error); }
    console.log("The file was saved!");
  });
}).auth(process.env.APIMATIC_USERNAME, process.env.APIMATIC_PASSWORD);
