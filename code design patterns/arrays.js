// const arr = ['Ace', 10, true];
// const value = 10;
// const value = '11';

// function findElement(arr, value) {
//     arr.filter(() => {

//     });
// }


// const len = 5;

// function generateOdds(len) {
//     const arr = [...Array(len).keys()].map( x => x += 1);
//     const finArr =  arr.map(x => x + x).map(x => x - 1)
//     return finArr;
// }

// console.log(generateOdds(len));

// const arr = [0, 1, 2, 3, 4, 5];

// function doubleArray(arr) {
//     const newArr = arr.map((_z, a, x) => (a < 1 ? x : x));
//     const finArr = newArr.filter((elem, index) => index < 2).flat();
//     return finArr;
// }

// console.log(doubleArray(arr))

// const arr = [-1, 2, -5, -4, 0]; 

// function getArrayOfPositives(arr) {
//     return arr.filter((value) => value > 0);
// }

// console.log(getArrayOfPositives(arr))

// const arr =  [ 0, 1, 'cat', 3, true, 'dog' ];

// function getArrayOfStrings(arr) {
//     return arr.filter((value) => typeof(value) === 'string');;
// }

// console.log(getArrayOfStrings(arr))


// const falsey = [false, null, 0, "", undefined, NaN];
// const arr = [ 0, false, 'cat', NaN, true, '' ];

// function removeFalsyValues(arr) {
//     return arr.filter((value) => falsey.includes(value) === false);
// }

// console.log(removeFalsyValues(arr));

// const arr = ['permanent-internship', 'glutinous-shriek', 'multiplicative-elevation'];
// function getUpperCaseStrings(arr) {
//     return arr.map((value) => value.toUpperCase());
// }

// console.log(getUpperCaseStrings(arr))

// const arr = ['', 'a', 'bc', 'def', 'ghij'];
// function getStringsLength(arr) {
//     const newArr = [];
//     arr.map((elem) => newArr.push(elem.length));
//     return newArr;
// }
// console.log(getStringsLength(arr))

// const arr = ['a', 'b', 'c', 'd'];
// const n = 3;
// function getHead(arr, n) {
//     return arr.filter((value, index) => index < n);
// }

// console.log(getHead(arr, n))

// const arr = [1, 3, 4, 5];
// const n = 2;

// function getTail(arr, n) {
//     return arr.filter((value, index) => index > arr.length - n - 1);
// }

// console.log(getTail(arr, n))
const arr =  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]

function getSecondItems(arr) {
    return arr.filter((value, index) => index % 2 === 0);
}
console.log(getSecondItems(arr))


// const arr = [[0, 1, 2, 3, 4], [10, 11, 12, 13, 14], [20, 21, 22, 23, 24], [30, 31, 32, 33, 34]]
// function toCsvText(arr) {
//     const newArr = arr.map((elem, index) => {
//         console.log(elem[elem[length -1]);
//         //  = toString(elem[-1] + '\n')  
//     })
//     return newArr;
//     // newArr.flat().toString().split().join(',');
// }

// console.log(toCsvText(arr) )

// const arr = [ 1, 3, 4, 5 ];
// const item = 2;
// const index = 1;

// function insertItem(arr, item, index) {
//     const newArr = Array.from(arr);
//     newArr.push('');
//     const finArr = [];
//     newArr.map((elem, posit) => {
//         if(posit < index) {
//             finArr.push(elem);
//         } else if ( posit > index) {
//             finArr.push(arr[posit - 1]);
//         } else {
//             finArr.push(item);
//         }
//         return finArr;
//     })

    
// }
// console.log(insertItem(arr, item, index))


// 



// 

// 

// console.log()

// console.log()





