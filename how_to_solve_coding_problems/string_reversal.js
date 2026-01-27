// This function takes a string as input and returns the reversed version of it.
// It uses a for loop to iterate through the string in reverse order.

function stringReversal(str) {
    if( !str || str.length < 2 || typeof str !== 'string') {
        return 'Not a valid string';
    }else{
        let reversedString = [];
        totalString = str.length;
        for( let i = totalString - 1; i >= 0; i--){
            reversedString.push(str[i]);
        }
        return reversedString.join('');
    }
}

function stringReversal2(str) {
    let reversedString = '';
    for(let i = str.length -1; i>=0; i--){
        reversedString += str[i];
    }
    return reversedString;
}

function stringReversal3(str) {
    return str.split('').reverse().join('');
}

const stringReversal4 = str => [...str].reverse().join('');

console.log(stringReversal("First Reversal"));
console.log(stringReversal2("Second Reversal"));
console.log(stringReversal3("Third Reversal"));
console.log(stringReversal4("Fourth Reversal"));