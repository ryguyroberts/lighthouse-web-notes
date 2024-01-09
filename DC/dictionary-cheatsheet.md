# Dictionary Cheat-Sheet
## Ternary Operators

```javascript
// A miniature if statement
console.log(output === "" ? num : output);
// If output is empty; true print number; false print output

// Ternary Operator example

const twoFace = function(){
  // Generates random num between 0-1 and rounds
  let ranNum = Math.round((Math.random() * 1));
  // Coin flip 1 - Heads, 0 Tails
  console.log(`Two-Face flips a coin: ${ranNum === 1 ? "Head's" : "Tails"}`);
}

```

## Command Line Args
## ES6 Template Literals