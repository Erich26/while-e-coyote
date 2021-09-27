const prompt = require('prompt-sync')({ sigint: true });

console.log('Enter your string');
let string = prompt('> ');
console.log('');

let string2 = string;

while (string.length < 10) {
    console.log(string);
    string = string + string2;
}

console.log(string);
