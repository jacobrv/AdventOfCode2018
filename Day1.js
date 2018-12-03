// Part 2:

var numbers = document.getElementsByTagName("PRE")[0];
var myNumbers = numbers.innerText.split('\n');
for(let i=0; i<myNumbers.length-1;i++) { myNumbers[i] = parseInt(myNumbers[i]); }
myNumbers = myNumbers.slice(0, myNumbers.length-1);
var sums = [];
var count = 0;
for(let j=0; j<1000; j++){for(let i=0; i<myNumbers.length;i++) { count += myNumbers[i]; sums.push(count); }}
for(let i=0; i<sums.length;i++) { if(sums.slice(0, i).indexOf(sums[i]) >= 0){console.log('found: '+sums[i]); break;}}