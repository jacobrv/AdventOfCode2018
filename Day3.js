// #1 @ 604,100: 17x27

// Part 1

var patches = document.getElementsByTagName("PRE")[0];
var myPatches = patches.innerText.split('\n');
myPatches = myPatches.slice(0, myPatches.length-1);

for(var i=0; i< myPatches.length; i++) {
    var patch = myPatches[i].split(' @ ');
    var coords = patch[1].split(': ')[0];
    var wh = patch[1].split(': ')[1];
    myPatches[i] = {
        id: patch[0],
        x: parseInt(coords.split(',')[0]),
        y: parseInt(coords.split(',')[1]),
        w: parseInt(wh.split('x')[0]),
        h: parseInt(wh.split('x')[1]),
        multipleMatch: false
    };
}

function isCoordInPatch(x, y, patch) {
    return x < (patch.x + patch.w) && x >= patch.x && y < (patch.y + patch.h) && y >= patch.y;
}

var numOverlapSpots = 0;
for(var i = 0; i<1000; i++) {
    for(var j=0; j<1000; j++) {
        var numPatchesOnSpot = 0;
        for(var k=0; k<myPatches.length; k++) {
            if( isCoordInPatch(i,j,myPatches[k])) {
                numPatchesOnSpot++;
            }
        }
        if(numPatchesOnSpot > 1) {
            numOverlapSpots++;
        }
    }
}

console.log(numOverlapSpots);


// Part 2

for(var i = 0; i<1000; i++) {
    for(var j=0; j<1000; j++) {
        var numPatchesOnSpot = 0;
        var matchedPatches = [];
        for(var k=0; k<myPatches.length; k++) {
            if( isCoordInPatch(i,j,myPatches[k])) {
                numPatchesOnSpot++;
                matchedPatches.push(k);
            }
        }
        if(numPatchesOnSpot > 1) {
            for(var k=0; k< matchedPatches.length; k++) {
                myPatches[matchedPatches[k]].multipleMatch = true;
            }
        }
    }
}

for(var i=0; i<myPatches.length; i++) {
    if(!myPatches[i].multipleMatch) {
        console.log(myPatches[i].id);
    }
}