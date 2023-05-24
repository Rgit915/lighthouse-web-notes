/*
- Get the arguments from the the command line.
  - we need at least 2 args
  - if any arg is not a number output error message
  - goes through each and prints out the sum of them
  - argument is not a whole number, skip it.
  -support negative numbers
  

*/
const arguments = process.argv.slice(2);
if(arguments.length < 2){
  console.log("Please provide at least 2 arguments");
process.exit();
}
for(const arguments of arguments){
  if (isNaN(argument)) {
    console.log("provide valid values");
    process.exit();
  }

}
/*
const sum = function (array)
let sum = 0;
for(const argument of arguments){
  sum */

console.log(arguments);