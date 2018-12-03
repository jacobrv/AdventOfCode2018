// Part 1

var words = document.getElementsByTagName("PRE")[0];
var myWords = words.innerText.split('\n');
myWords = myWords.slice(0, myWords.length-1);
var sums = [];
var c2 = 0;
var c3 = 0;
for(var i=0; i<myWords.length; i++) {
    var myArray = myWords[i].split('');
    var unique = myArray.filter((v, i, a) => a.indexOf(v) === i); 
    var hasC2 = false;
    var hasC3 = false;
    for(let j=0; j<unique.length; j++) {
        var count = myArray.filter(item => item == unique[j]).length;
        if(count == 2){hasC2 = true;}
        if(count == 3){hasC3 = true;}
    }
    if(hasC2){c2++;}
    if(hasC3){c3++;}
}
console.log(c2 * c3);


// Part 2

var words = document.getElementsByTagName("PRE")[0];
var myWords = words.innerText.split('\n');
myWords = myWords.slice(0, myWords.length-1);
var found = false;
for ( var i = 0; i < myWords.length; i++) {
    if(found) {break;}
    for ( var j = 0; j < myWords.length; j++) {
        if(found) {break;}
        var word1 = myWords[i].split('');
        var word2 = myWords[j].split('');
        var numDiff = 0;
        for( var k=0; k<word1.length; k++) {
            numDiff += word1[k] == word2[k] ? 0 : 1;
        }
        if (numDiff == 1) {
            var same = [];
            for( var l=0; l<word1.length; l++) {
                if(word1[l] == word2[l]) {
                    same.push(word1[l]);
                }
            }
            console.log(same.join(''));
            found = true;
        }
    }
}