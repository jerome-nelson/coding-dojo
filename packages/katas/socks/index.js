// array = n
// finalArray = o
// copyArray = p
// sameElements = q
// 
// 
// 
// function sockMerchant(array) {

//     let copyArray = [...array];
//     // O(array + copy of array)
//     // O(n + n) == O(n)

//     // O (n)
//     const finalArray = [];
//     // O(n)
//     array.map(sock => {

//         if (!copyArray.length) {
//             return;
//         }

//         /////////////////////////
//         // O(n^2)


//         const sameElementsArray = copyArray.filter(el => el === sock);

//         // O(n^2)
//         copyArray = copyArray.filter(el => el != sock);

//         // O (n^2)
//         finalArray.push({
//             amount: Math.floor(sameElementsArray.length / 2),
//             color: sock
//         })
//         ///////////////////////////
//     });

//     let i = 0;

//     // O(n^2)
//     // O(n^3)
//     finalArray.map(el => i += el.amount);
//     console.log(i)
//     return i;
// }

// 1. [Red, Blue, Red, Yellow, Purple] => []
//  i. [Red, Blue, Red, Yellow] => [Purple]
// ii. [Red, Blue, Red] => [Yellow, Purple].filter(return yellow elements)

// Real Life
// The actual Socks
// Written list - this is an empty array
// We have a sock and are looking for the same socks
// We count how many socks of the kind we have found and we push an object to the array with the color and number of pairs

// let socks = [....]
// let copy = [];
// let i = 0
// socks.map( el => if(copy.includes(el){  remove all el elements from socks, count them and divide by 2  }else{  push el to copy array  }))


// 1. A Group of Socks
// 2. You a have a paper list
// [Red, Blue, Yellow,Red, Purple]
/*
    Object.keys(array).reduce((obj, sockName) => obj = { ...obj, [sockName]: 0 }, {});
*/
/*
{
    Red: 2,
    Blue: 1,
    Yellow: 1,
    Purple: 1
}
*/

// 3. For each sock, make a tick under each type of sock onto the List
//
//  array.forEach(elem => List[colour] += 1);
// 4. Then count the even pairs and total
// i. return List.reduce(total, sock => total = sock%2(is not odd) ? total+1 : total, 0);

function sockMerchant(socks) {
    const list = socks.reduce((obj, sockName) => {
        return Object.assign(
            obj,
            { [sockName]: 0 }
        )
    }, {});
    socks.forEach(colour => list[colour] += 1);
    return Object.keys(list).reduce((total, sock) => {
        const pairs = Math.floor(list[sock] / 2);
        return total + pairs;
    }, 0);
}


console.assert(sockMerchant([9, 10, 20, 20, 10, 10, 30, 50, 10, 20]) === 3);