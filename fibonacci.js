const prompt = require('prompt-sync')({ sigint: true});

const number = parseInt(prompt('Enter number of sequences: '));

let n1 = 0, n2 = 1, nextTerm;

console.log('fibonacci sequence: ');

for (let i = 1; i<= number; i++) {
    console.log(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
}
