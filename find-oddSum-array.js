
// Calculate the sum of odd number in array.

function findOddSum(number) {

    let sum = 0;
    let i = 0;
    while (i < number.length) {

        sum = sum + number[i];

        i++;
        // console.log(i, number[i - 1], sum);
    }
    return sum;


}

// Find the odd numbers from array

function findOddNumbers(numbers) {

    const oddNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 !== 0) {
            //console.log(index, element);
            oddNumbers.push(element);
        }
    }
    return oddNumbers;
}

function findEvenNumbers(numbers) {

    const evenNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[index];
        if (element % 2 === 0) {
            //console.log(index, element);
            evenNumbers.push(element);
        }
    }
    return evenNumbers;
}



const the_array = [5, 7, 8, 10, 45, 77, 99, 30];


console.log('The default Array Elements = ', the_array);

callTheSum = findOddSum(the_array);

console.log('The Sum of default Array Element = ', callTheSum);

const OddNumbers = findOddNumbers(the_array);

console.log('The Odd Number Elements = ', OddNumbers);

callTheSumAgain = findOddSum(OddNumbers);

console.log('The Sum of odd Number Element = ', callTheSumAgain);

//Call the Even Numbers

const EvenNumbers = findEvenNumbers(the_array);

console.log('The Even Number Elements = ', EvenNumbers);

callTheSumAgain = findOddSum(EvenNumbers);

console.log('The Sum of Even Numbers Element = ', callTheSumAgain);