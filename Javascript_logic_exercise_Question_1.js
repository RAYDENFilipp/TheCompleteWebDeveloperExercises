// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, "1", 1, "1", 20, 20];

// here are our variables we are going to use
let subArray, numberArray, stringArray;

let answer = (array) => {
        // Our method will modify the original array
        // At first we have to sort the array
        array.sort((num1, num2) => num1 - num2);
        /* then we have to find identical items, get them out of the array, add
        to a sub-array and then unshift this sub-array into the array.*/

        //1st, lets divide our numbers into strings array and numbers array
        numberArray = array.filter(num => typeof num === 'number');
        stringArray = array.filter(num => typeof num === 'string');
        // then, lets sort our numberArray 
        for (let i = 0; i < numberArray.length; i++) {
                // at first, we should filter out equal numbers and group them into subArray.
                subArray = numberArray.filter(num => num === numberArray[i])
                // let's check if our subArray is not an array of only one integer
                if (subArray.length > 1) {
                        // check if number in subArray equal to integer in numberArray
                        if (subArray[0] === numberArray[i]) {
                                //before adding subArray into numberArray, we should remove the integers that are already in subArray from numberArray, starting from the index of that integer and going as many times forward as the length of the subArray
                                numberArray.splice(i, subArray.length);
                        }
                        // after that we can unshift our subArray into numberArray
                        numberArray.unshift(subArray);
                } else {
                        //if theere were no equal numbers and our subArray was an array of only one item, lets just concat it into numberArray
                        numberArray.concat(subArray);
                }
        }
        // totally the same steps are taken for stringArray as for numberArray. Just simple copy-paste
        for (let i = 0; i < stringArray.length; i++) {
                subArray = stringArray.filter(strng => strng === stringArray[i])
                if (subArray.length > 1) {
                        if (subArray[0] === stringArray[i]) {
                                stringArray.splice(i, subArray.length);
                        }
                        stringArray.unshift(subArray);
                } else {
                        stringArray.concat(subArray);
                }
        }
        // we should sort our items in the numberArray so that it goes from lesser to greater integers no matter if they're stored in an array or just simple numbers
        numberArray.sort((num1, num2) => {
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
        // totally the same steps are taken for stringArray as for numberArray. Just simple copy-paste
        stringArray.sort((strng1, strng2) => {
                if (strng1[0] && strng2[0]) {
                        return strng1[0] - strng2[0];
                } else if (strng1[0]) {
                        return strng1[0] - strng2;
                } else if (strng2[0]) {
                        return strng1 - strng2[0];
                } else {
                        return strng1 - strng2;
                }
        });
        // let's empty our original array
        array.splice(0);
        // and return it with numberArray and stringArray so that numbers are divided from strings
        console.log(array.push(numberArray, stringArray));
        return array;
}
answer(array);