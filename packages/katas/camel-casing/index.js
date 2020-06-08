function solution(string) {
    const array = string.split('');
    const newArray = [];

    array.map(char => {
        if (char === char.toUpperCase()) {
            newArray.push(' ');
            newArray.push(char);
        } else {
            newArray.push(char);
        }
    })

    return newArray.join('');
}

//  
// 1. Split the string to get an array of charackters
// 2. Map through whole array and check if the charackter is upperCase, if it is

// string.replace
// a) add a space before the charakter
// b) if it isnt: continue

// 3. Convert the array into a string

console.assert(solution('camelCasing') === 'camel Casing');
console.assert(solution('camelCasingTest') === 'camel Casing Test');
// console.assert(solution('camelcasingtest') === ' c a m e l c a s i n g t e s t ');