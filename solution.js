console.log("********** 1 **********");

const euroCountries = ["Ireland", "Spain", "Germany"];
const asianCountries = ["Japan", "Hong Kong", "Nepal"];
const mergeArrays = [...euroCountries, ...asianCountries];
console.log(mergeArrays);

console.log("********** EX.2 **********");

const allCountries = [...mergeArrays];
console.log(allCountries);

console.log("********** EX.3 **********");

const numArray = [2, 8, 3, 45, 91, 76, 0];
function theLargestNumber(arr) {
  console.log(Math.max(...arr));
}
theLargestNumber(numArray);

console.log("********** EX.4 **********");

function theSmallestNumber(arr) {
  console.log(Math.min(...arr));
}
theSmallestNumber(numArray);

console.log("********** EX.5 **********");

const person = { name: "John" };
const job = { role: "Teacher" };
const personClone = { ...person };
console.log(personClone);
const employee = { ...person, ...job };
console.log(employee);
employee.name = "Thomas";
employee.role = "Doctor";
console.log(employee);
