'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sum = 0;
  let position = 0;
  for (var i=num.length - 1; i>=0; i--){
    sum = sum + 2**position * num[i];
    position++
  }

  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  let resto = [];
  while (num > 0) {
    resto.unshift(num % 2);
    num = Math.floor(num / 2);
  }
 return resto.join("");
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}