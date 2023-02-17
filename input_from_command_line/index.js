// In this tutorial we will learn how to create and remove files and how to take input from command lines
const fs = require("fs");

const input = process.argv;
// fs.writeFileSync(input[2], input[3]); // fs.writeFileSync(filename, string)
// console.log("process completed")

if (input[2] == "add") {
  fs.writeFileSync(input[3], input[4]);
} else if (input[2] == "delete") {
  fs.unlinkSync(input[3]);
} else {
  console.log("invalid input");
}
