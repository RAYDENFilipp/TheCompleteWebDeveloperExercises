// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, "1", 1, "1", 20, 20];

// here are our variables we are going to use
let subArray, numberArray, stringArray;

//sort our numberArray and stringArray
const firstSortOfSubArray = arrayToSort => {
        for (let i = 0; i < arrayToSort.length; i++) {
                // at first, we should filter out equal numbers and group them into subArray.
                subArray = arrayToSort.filter(num => num === arrayToSort[i]);
                // let's check if our subArray is not an array of only one integer
                if (subArray.length > 1) {
                        // check if number in subArray equal to integer in arrayToSort
                        if (subArray[0] === arrayToSort[i]) {
                                //before adding subArray into arrayToSort, we should remove the integers that are already in subArray from arrayToSort, starting from the index of that integer and going as many times forward as the length of the subArray
                                arrayToSort.splice(i, subArray.length);
                        }
                        // after that we can unshift our subArray into arrayToSort
                        arrayToSort.unshift(subArray);
                } else {
                        //if theere were no equal numbers and our subArray was an array of only one item, lets just concat it into arrayToSort
                        arrayToSort.concat(subArray);
                }
        }
}

// we should sort our items in the numberArray or stringArray so that it goes from lesser to greater integers no matter if they're stored in an array or just simple numbers
const sortItemsWithinEachSubArray = array => array.sort((num1, num2) => {
        // if we are to compare two arrays
        if (num1[0] && num2[0]) {
                return num1[0] - num2[0];
        }
        // if we are to compare first - an array and second - a number
        else if (num1[0]) {
                return num1[0] - num2;
        }
        // vice versa
        else if (num2[0]) {
                return num1 - num2[0];
        }
        // if we compare just two numbers
        else {
                return num1 - num2;
        }
});

const answer = (array) => {
        // Our method will modify the original array
        array.sort((num1, num2) => num1 - num2);
        /* then we have to find identical items, get them out of the array, add
        to a sub-array and then unshift this sub-array into the array.*/

        //1st, lets divide our numbers into strings array and numbers array
        numberArray = array.filter(num => typeof num === 'number');
        stringArray = array.filter(num => typeof num === 'string');


        firstSortOfSubArray(numberArray);
        firstSortOfSubArray(stringArray);

        sortItemsWithinEachSubArray(numberArray);
        sortItemsWithinEachSubArray(stringArray);

        array.splice(0);
        console.log(array.push(numberArray, stringArray));
        return array;
}
answer(array);