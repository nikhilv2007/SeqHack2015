var express = require('express');
var app = express();
var fs = require('fs');
var speak = require("speakeasy-nlp");

//refer https://github.com/NaturalNode/natural
var natural = require('natural'),
    tokenizer = new natural.WordTokenizer();
//console.log(tokenizer.tokenize("your dog has fleas."));

var compareData = "";

var memoryJson;

var ACCURACY_LEVEL = 0.7;


app.get('/', function (req, res) {

    //ON server start add all the q&a into the memory
    fs.readFile('data/qna.js', 'utf8', function (err, data) {
        if (err) {
            return console.log(err);
        }
        //  console.log(data);
        compareData = JSON.parse(data);
        memoryJson = compareData;
        // console.log(compareData["faq"]);
    });

    //res.send('Hello World!');
    res.sendfile('client/chat.html');
    //console.log(req);
});

app.get('/js', function (req, res) {
    //res.send('Hello World!');

    //console.log(req["query"]);
    var q = req["query"]["q"];

    switch (q) {
    case "jquery":
        res.sendfile('client/js/jquery.js');
        break;
    case "bootstrap":
        res.sendfile('client/js/bootstrap.min.js');
        break;
    }
    // console.log(req);
});

app.get('/css', function (req, res) {
    //res.send('Hello World!');
    var q = req["query"]["q"];

    switch (q) {
    case "bootstrap":
        res.sendfile('client/css/bootstrap.min.css');
        break;
    case "bootstrap-theme":
        res.sendfile('client/css/bootstrap-theme.min.css');
        break;
    }
    //console.log(req);
});

app.get('/chatMsg', function (req, res) {
    //res.send('Hello World!');
    var q = req["query"]["q"];

    // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    var val = compareQuestion(q);
    res.send("" + val);
    // var dataSpl = speak.classify("What is your name?");

    //console.log(req);
});

app.get('/feedback', function (req, res) {
    //res.send('Hello World!');
    var q = req["query"]["q"];

    switch (q) {
    case "yes":
            //update the json and write into the fs
        break;

    case "no":
            //update the json and write into the fs
        break;
    }

    // res.header("Access-Control-Allow-Origin", "http://localhost:8080");
    var val = compareQuestion(q);
    res.send("" + val);
    // var dataSpl = speak.classify("What is your name?");

    //console.log(req);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log('Example app listening at http://%s:%s', host, port);
});

//function to return the answer of the closest answer
function compareQuestion(question) {
    //var question = "What is your name?";

    var highest = 0;
    var answer = "";

    for (var i = 0; i < compareData["faq"].length; i++) {
        var cmpQ = compareData["faq"][i]["q"];
        var distance = natural.JaroWinklerDistance(cmpQ, question);
        console.log(distance);
        if (distance > highest && distance > ACCURACY_LEVEL) {
            // console.log(highest);
            highest = distance;
            answer = compareData["faq"][i]["a"];
        }

    }

    if (highest == 0 || answer == "") {
        answer = "Can you please be specific!";
    }

    return answer;


    //console.log(natural.JaroWinklerDistance(q, question));
}