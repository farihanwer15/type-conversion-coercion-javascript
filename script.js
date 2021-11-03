// type conversion
const inputYear = '1991';
console.log (Number (inputYear), inputYear);
console.log (Number (inputYear) + 18);

console.log(Number('jonas'));
console.log(typeof NaN);

console.log(String(19), 19);

// type coercion 
console.log('I am ' +  19 + ' years old');
console.log('9' - '5' );
console.log('19' - '13' + '17');
console.log('19' - '13' + 17 );
console.log('123' < 57 );

let n = '1' + 1; //'11'
n = n - 1;
console.log(n);