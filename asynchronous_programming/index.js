// In this tutorial we will learn about setTimeOut() function

/* 
    Synchronous Programming 

    console.log('first');
    console.log('second');
    console.log('third');
*/

// Asynchronous Programming
/*
    console.log("first");

    setTimeout(() => {
    console.log("second");
    }, 2000); // 2000 === 2 seconds
    
    console.log("third");
*/

// disadvantage of asynchronous programming
/*
    let a = 10;
    let b = 40;

    setTimeout(() => {
        b = 90;
    }, 2000);

    console.log(a + b);
    // since we updated the value of b after 2 seconds so 50 was printed instead of 100 so this is a disadvantage of setTimeOut and we will improve it by using promises
*/

// using promises
let a = 10;
let b = 40;

let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    b = 90;
    resolve(b);
  }, 2000);
});

waitingData.then((data) => {
  b = data;
  console.log(a + b); // now 100 is printed
});
