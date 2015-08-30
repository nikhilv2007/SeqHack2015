//var fs = require('fs');
//
//
//
//
//fs.readFile('data/avengers2.srt', 'utf8', function (err,data) {
//  if (err) {
//    return console.log(err);
//  }
//    
//  console.log(data);
//});

var fs = require('fs'),
    readline = require('readline');

var rd = readline.createInterface({
    input: fs.createReadStream('data/avengers2.srt'),
    output: process.stdout,
    terminal: false
});

rd.on('line', function (line) {
    var txt = "";

    txt = line;
    var re1 = '((?:(?:[0-1][0-9])|(?:[2][0-3])|(?:[0-9])):(?:[0-5][0-9])(?::[0-5][0-9])?(?:\\s?(?:am|AM|pm|PM))?)'; // HourMinuteSec 1
    var re2 = '(,)'; // Any Single Character 1
    var re3 = '(\\d+)'; // Integer Number 1
    
     var re4='(\\d+)';

    var p = new RegExp(re1 + re2 + re3, ["i"]);
    var m = p.exec(txt);
    if (m != null) {
        
      //  console.log(line);
    }
    
     var p2 = new RegExp(re4, ["i"]);
    var m2 = p2.exec(txt);
    if (m2 != null) {
      

        console.log(line);
    }

});