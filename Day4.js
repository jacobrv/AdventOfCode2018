var events = document.getElementsByTagName("PRE")[0];
var myEvents = events.innerText.split('\n');
myEvents = myEvents.slice(0, myEvents.length-1);

var currentGuard = -1;

function parseEventDate(eventString) {
    const event = {};
    const timestampRegex = /\[\d{4}-\d{2}-\d{2} \d{2}:\d{2}\]/g;
    const timestampTest = timestampRegex.exec(eventString);
    event.timestamp = timestampTest[0];
    event.timestamp = event.timestamp.replace('[','');
    event.timestamp = event.timestamp.replace(']','');
    event.string = eventString;
    return event;
}

function parseEventInfo(event) {
    const eventString = event.string;

    if(eventString.indexOf('Guard')>=0) {
        const idRegex = /#\d+/g;
        const idTest = idRegex.exec(eventString);
        currentGuard = idTest[0];
        event.type = 'change';
    }
    else if(eventString.indexOf('wakes up')) {
        event.type = 'wake'
    }
    else if(eventString.indexOf('falls asleep')) {
        event.type = 'sleep'
    }
    else {
        event.type = 'unknown'
    }
    event.id = currentGuard;
    return event;
}

for(let i=0; i<myEvents.length; i++) {
    myEvents[i] = parseEventDate(myEvents[i]);
}

myEvents.sort( (a,b) => {
    const d1 = new Date(a.timestamp);
    const d2 = new Date(b.timestamp);
    return d1.getTime() - d2.getTime();
});

for(let i=0; i<myEvents.length; i++) {
    myEvents[i] = parseEventInfo(myEvents[i]);
}

console.log(myEvents);