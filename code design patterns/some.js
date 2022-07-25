
// str = '<dev_tool<idk_lol>';

// function unbracketTag(str) {
//     const strArray = str.split('');
//     console.log(strArray);
//     let strNew = '';
//     for (let i = 0; i < str.length; i++) {
//         if (i != str.indexOf('<') && i != str.lastIndexOf('>')) {
//             strNew += strArray[i];
//         }
//     }  
//     return console.log(strNew);
// }

// unbracketTag(str);

// const value = new String('test');
// function isString(value) {
//     return console.log(typeof (value) === 'string');
// }
// isString(value) 

let str = 'hello';
function encodeToRot13(str) {
    const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const alphabetCap = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    const strArray = str.split('');
    let newStr = '';
    strArray.map((elem, index) => {
    if (elem.toUpperCase() !== elem && elem.match(/[a-z]/i)) {
        if ((alphabet.indexOf(strArray[index]) + 13 < 26)) {
            newStr += alphabet[alphabet.indexOf(strArray[index]) + 13];
        } else if ((alphabet.indexOf(strArray[index] + 13 > 26))) {
            newStr += alphabet[alphabet.indexOf(strArray[index]) + 13 - 26];
        }
    } else if (elem.toUpperCase() === elem && elem.match(/[A-Z]/i)) {
        if (alphabetCap.indexOf(strArray[index]) + 13 < 27) {
            newStr += alphabetCap[alphabetCap.indexOf(strArray[index]) + 13];
        } else if (alphabetCap.indexOf(strArray[index] + 13 > 26)) {
            newStr += alphabetCap[alphabetCap.indexOf(strArray[index]) + 13 - 26];
        }
    } else {
        newStr += elem;
    }
        return newStr;
    });

    console.log(newStr);
}

encodeToRot13(str)
// const value = '3♣'

// function getCardId(value) {
//     const cardsArray = [
//         'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
//         'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
//         'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
//         'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
//     ];
//     const cardsObject = {};

//     for (let i = 0; i <  cardsArray.length; i += 1) {
//         cardsObject[cardsArray[i]] = i;
//     }
    
//     const cardsEntries = Object.entries(cardsObject);
//     const cardIndex = cardsEntries.filter((elem) => elem[0] === value);

//     return console.log(cardIndex[0][1]);
// }

// getCardId(value)

