// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).

//Mark
var massM = 78;
var heightM = 1.69;
var BMIM = massM / heightM ** 2;
//John
var massJ = 92;
var heightJ = 1.95;
var BMIJ = massJ / heightJ ** 2;

console.log("Mark's BMI: ", BMIM)
console.log("John's BMI: ", BMIJ)