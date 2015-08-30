var brain  = require('brain');

var net = new brain.NeuralNetwork();
 
net.train([{input: [0, 0], output: [0]},
           {input: [0, 1], output: [1]},
           {input: [1, 0], output: [1]},
           {input: [1, 1], output: [0]}]);

var output = net.run([1, 0]);

console.log(output);


//net.train([{input: ["How are you?"], output: [0]},
//           {input: ["What are you?"], output: [1]},
//           {input: ["Who are you?"], output: [5]},{input: ["Who are you?"], output: [5]},{input: ["Who are you?"], output: [5]},
//          {input: ["Who are you?"], output: [5]},{input: ["Who are you?"], output: [5]}]);
//
//var output = net.run(["Who are you?"]);
//
//console.log(output+"");