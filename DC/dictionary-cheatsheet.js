// Ternary Operator example

const twoFace = function(){
  // Generates random num between 0-1 and rounds
  let ranNum = Math.round((Math.random() * 1));
  // Coin flip 1 - Heads, 0 Tails
  console.log(`Two-Face flips a coin: ${ranNum === 1 ? "Head's" : "Tails"}`);
}

twoFace();