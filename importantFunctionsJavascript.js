//GENERATING RANDOM NUMBERS USE Math.random()

function randomNum() {
  return Math.random();
}
console.log(randomNum()); //this will generate all numbers between 0 - 1

//GENERATING A RANDOM NUMBER PAST 0 TO SOME NUMBER X eg.10 (just * by that number 10)
//TO GENERATE A WHOLE NUMBER USE Math.floor function
//math.random can never reproduce 1 when generating random numbers
function randomNumToTen() {
  return Math.floor(Math.random() * 10);
}
console.log(randomNumToTen());

//GENERATING WHOLE NUMBERS FROM A RANGE OF NUMBERS
//USE THIS FORMULAE TO SOLVE THE RANDOM RANGE OF NUMBER WITH (maxNum - minNum + 1) + minNum
function randomNumRange(ourMax, ourMin) {
  return Math.floor(Math.random() * (ourMax - ourMin + 1) + ourMin);
}
console.log(randomNumRange(5, 10));

//CONVERT STRINGS INTO INTEGERS
//USE THE praseInt() function.

function convertToInt(str) {
  return parseInt(str); //method will convert to integer
}
console.log("10");

//parseInt() can be sued to identify the base of an integer with the radix feature.
//default base is ten.
//lets get the output of a string into a binary base integer

function binaryBaseString(str) {
  return parseInt(str, 2); //where 2 is the base of the string to output and the radix
}
console.log("10001");

//USING THE CONDITIONAL (TERNARY) OPERATOR
//USED TO REPLACE THE IF ELSE OPERATOR WITH A ONE LINE STATEMENT
// condition? if sttmt is true: if sttmt is false;

function ternaryCondition(a, b) {
  return a == b ? true : false;
}
console.log(ternaryCondition(4, 4));
//the above function may NOT NORMALLY USED CAUSE YOU CAN JUST WRITE CONDITION THEN RETURN EITH FALSE OR TRUE
//e.g
function simpleCheckCondition(x, y) {
  return x === y;
}
console.log(simpleCheckCondition(4, "4"));

//NESTED STATEMENT TO CHECK WHETHER SEVERAL STTMTS ARE TRUE OR NOT
//to check negative or positive output.
function checkSign(numSign) {
  return numSign > 0
    ? "Number is Positive"
    : numSign < 0
    ? "Number is Negative"
    : "Number is Zero";
}
console.log(checkSign(-40));

//example 5
function phLevel(percentage) {
  return percentage > 70
    ? "Liquid is Acidic"
    : percentage < 40
    ? "Liquid is Alkaline"
    : "Liquid is Average";
}
console.log(phLevel(50));
