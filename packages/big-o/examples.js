// What are the runtime for each of these functions? And what do they do?
// Could you improve them?

function foo(listOfNumbers) {
    let sum = 0;
    const product = 1;

    for (let i = 0; i < listOfNumbers.length; i++) {
        sum += listOfNumbers[i];
    }

    for (let i = 0; i < listOfNumbers.length; i++) {
        product += listOfNumbers[i]
    }

    console.log(`${sum}, ${product}`);
}

function printPairs(listOfNumbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        for (let j = 0; j < listOfNumbers.length; j++) {
            console.log(`${listOfNumbers[i]}, ${listOfNumbers[j]}`);
        }
    }
}



function printUnorderedPairs(listOfNumbers) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        for (let j = i + 1; j < listOfNumbers.length; j++) {
            console.log(`${listOfNumbers[i]}, ${listOfNumbers[j]}`);
        }
    }
}

function printUnorderedPairsTwo(listOfNumbers, secondList) {
    for (let i = 0; i < listOfNumbers.length; i++) {
        for (let j = 0; j < secondList.length; j++) {
            if (listOfNumbers[i] < secondList[j]) {
                console.log(`${listOfNumbers[i]}, ${secondList[j]}`);
            }
        }
    }
}