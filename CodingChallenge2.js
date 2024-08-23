// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"
//Mark
var massM = 78;
var heightM = 1.69;
var BMIM = massM / heightM ** 2;
//John
var massJ = 92;
var heightJ = 1.95;
var BMIJ = massJ / heightJ ** 2;
//1.
console.log("Mark's BMI: ", BMIM)
console.log("John's BMI: ", BMIJ)
console.log("Mark's BMI is higher than John's!")
console.log("Mark's BMI (", BMIM + ")is higher than John's(", BMIJ + ")");