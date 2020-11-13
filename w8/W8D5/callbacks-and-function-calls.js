const { read } = require('fs');
const readline = require('readline');

//Simple Timeout
window.setTimeout(function(){alert("HAMMERTIME")}, 5000);
//Asynchronous

//Timeout Plus Closure
function hammerTime(time) {
    window.setTimeout(function () { alert(`${time} is hammertime!`) }, 5000);
}
hammerTime();


const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

reader.question("Would you like some tea?", (response) => {
    firstResponse = response;
    console.log(`You replied ${response}`);
});

reader.question('Would you like some biscuits?', (response) => {
    secondResponse = response;
    console.log(`You replied ${response}.`);
});