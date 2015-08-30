//var say = require('say');
//
//// no callback, fire and forget
//say.speak('Alex', 'whats up, dog?');

var tts = require('node-google-text-to-speech')
 
  tts.translate('en', 'dog', function(result) {
    console.log(result); 
    if(result.success) { //check for success 
        var response = { 'audio' : result.data };
        socket.emit('ttsResult', response); //emit the audio to client 
    }
  });