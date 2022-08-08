
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


const the_array = [5, 7, 8, 10, 45, 30];

callTheFunction = findOddSum(the_array);
console.log(callTheFunction);

