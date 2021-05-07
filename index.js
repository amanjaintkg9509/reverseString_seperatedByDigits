/**
 * Given a string that contains words seperated by digits(0-9). Reverse words in place
 * Eg: asd1fa -> dsa1af
 *
 * Pseudo code :-
 * 1. get string and check number or not using parseInt.
 *  1a. if string is holding number only then return same string.
 * 2. split string using regular expression (\d+), that means based on only digits based and including digit.
 * 3. now we are getting a new array with split string.
 * 4. check all element one by one using map operator.
 *  4a. element is number then add without any operation.
 *  4b. element is string then reverse.
 * 
**/

const reverseWords = (str) => {
    if(parseInt(str)) return str;

    let strSplit = str.split(/(\d+)/);
    let revString = '';
    strSplit.map((element)=>{
        revString += parseInt(element)? element : element.split("").reverse().join("");
    })
    return revString;
};