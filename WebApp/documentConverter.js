//program to convert document to question

var fs = require('fs');

fs.readFile('data/noveldata.txt', 'utf8', function (err,data) {
  if (err) {
    return console.log(err);
  }
  console.log(data);
});