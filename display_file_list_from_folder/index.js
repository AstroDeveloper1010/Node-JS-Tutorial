// In this tutorial we will learn how to display the list of files from a folder

const fs = require("fs");
const path = require("path");
const dirPath = path.join(__dirname, "files");
const filePath = `${dirPath}/a.txt`; // file path

for (let i = 0; i < 5; i++) {
  fs.writeFileSync(dirPath + `/hello${i}.txt`, "this is a sample text");
  // fs.writeFileSync(dirPath + "hello" + i + ".txt", "this is a sample text");

  /* we have to specify the path where we want to create our files because by default it is in the same directory */
}

// to read the directory
fs.readdir(dirPath, (error, files) => {
  if (!error) {
    files.forEach((item) => {
      console.log("file name is", item);
    });
  }
});

// to read the files
fs.readFile(filePath, "utf-8", (error, item) => {
  console.log(item);
});

// to update a file
fs.appendFile(filePath, " this is a very important file", (error) => {
  if (!error) {
    console.log("file is updated");
  }
});

// to rename a file
fs.rename(filePath, `${dirPath}/temp.txt`, (error) => {
  if (!error) {
    console.log("file name is updated");
  }
});
