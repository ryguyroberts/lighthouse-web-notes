# Dictionary Cheat-Sheet
## Ternary Operators
A miniature *if* statement.
```javascript
console.log(output === "" ? num : output);
// If output is empty; true print number; false print output

// Ternary Operator example

const twoFace = function(){
  // Generates random num between 0-1 and rounds
  let ranNum = Math.round((Math.random() * 1));
  // Coin flip 1 - Heads, 0 Tails
  console.log(`Two-Face flips a coin: ${ranNum === 1 ? "Head's" : "Tail's"}`);
}

// Expected output:
// Two-Face flips a coin: (Head's) or (Tail's)
```

## Command Line Args
A way to parse input from the CLI, using a prenamed Array.
```javascript
// Prenamed array called process.argv takes values from CLI parameters.

// Example
// Running your file with params.
~/node sum.js -parameter1 -parameter2

// declare Variables
const args = process.argv;
// Get rid of first two. First in index are node and file location(s)
const slicedArgs = args.slice(2);

// function adds the nums
function sumTheNums(num1, num2) {
  //add sums but change to ints instead of strings.
  let sum = ((Number(slicedArgs[0])) + Number(slicedArgs[1]));
  return sum;
}

console.log(sumTheNums(slicedArgs[0],slicedArgs[1]));
// Expected output: The sum of the two parameters
```

process.argv
## ES6 Template Literals
