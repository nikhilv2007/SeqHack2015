
var speak = require("speakeasy-nlp");
 
// Analyze sentences at a basic level 
// ------------------------------------- // 
speak.classify("What is your name?")
console.log(speak.classify("Please tell me how to use this application?"))//=> { action: "what", owner: "listener", subject: "name" } 
speak.classify("Do you know what time it is?")   //=> { action: "what", owner: "it", subject: "time" } 

// Sentiment analysis 
// ------------------------------------- // 
speak.sentiment.negativity("I hate your guts") 
//console.log(speak.sentiment.negativity("I hate your guts"))//=> { score: 0.25, words: [hate] } 
speak.sentiment.positivity("I love you")         //=> { score: 0.33, words: [love] } 
 
speak.sentiment.analyze("I love you, but you smell something aweful")  
//console.log(speak.sentiment.analyze("I love you, but you smell something aweful"));
// (Negative scores dictate a stronger influence of negative words) 
//=> { score: -0.12, positive: { ... }, negative: { ... } } 