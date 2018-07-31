/* Question 2: Write a javascript
function that takes an array of numbers and a target number.The
function should find two different numbers in the array that, when added together, give the target number.For example: answer([1, 2, 3], 4) should
return [1, 3] */
const array = [1, 2, 3, 4, 5]
const targetNumber = 6;

const answer = (array, targetNuber) => {
    let termsArray = [];

    for (let i = 0; i < array.length / 2; i++) {
        for (let j = array.length; j >= Math.floor(array.length / 2); j--) {
            if (array[i] + array[j] === targetNuber && i !== j)
                termsArray.push([array[i], array[j]]);
        }
    }

    if (termsArray.length === 1) {
        return termsArray[0];
    } else if (!termsArray.length) {
        return 'There are no numbers which can make a sum equal to target';
    }
    return termsArray;
}

answer(array, targetNumber);