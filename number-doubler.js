const prompt = require('prompt-sync')({ sigint: true});

let number = Number(prompt('Enter a number: '));

while (number  < 100) {
    number = number * 2;
    console.log(number);
    if (number < 100) {
        number = number * 2; 
        console.log(number);
    }if (number < 100) {
        number = number * 2; 
        console.log(number);
    }if (number < 100) {
        number = number * 2; 
        console.log(number);
    }if (number < 100) {
        number = number * 2; 
        console.log(number);
    }if (number < 100) {
        number = number * 2; 
        console.log(number);
    }if (number < 100) {
        number = number * 2; 
        console.log(number);
    } 
    break
}