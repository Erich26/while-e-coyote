const prompt = require('prompt-sync')({ sigint: true });

let input = prompt('Enter some numbers and type "done" when completed:' );

let sum = 0;

while (input !== 'done' ) {
    sum = sum + Number(input);
    input = prompt('Enter some numbers and type "done" when completed:' );
} 

console.log('Sum: ', sum);
     
    