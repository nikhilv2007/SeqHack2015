var nlpsum = require('nlpsum');

var content = "Nobody who has lived in modern times has so stirred up the world as Napoleon Bonaparte. Nobody has upset so many old things, and startedso many new ones. No man ever lived who had more faith in his own powers--and less respect for those of other men. Napoleon had, too, an unusual combination of those personal qualities which excite and interest men. It is nearly a hundred years since he dropped out of active life; but his story is more rather than less thrilling as time goes on.";

var sum = new nlpsum();
var summary = sum.fractalSummary(content, 6);

var summary2= sum.wordFrequencySummary(content, 6);

var summary3    = sum.sinFrequencySummary(content, 10); 

var summary4     = sum.sinWordFrequencySummary(content, 6); 

//console.log(summary);
//console.log(summary2);

console.log(summary4);