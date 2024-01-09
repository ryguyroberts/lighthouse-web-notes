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

}

console.log(sumTheNums(slicedArgs[0],slicedArgs[1]));
// Expected output: The sum of the two parameters
```

process.argv
## ES6 Template Literals
