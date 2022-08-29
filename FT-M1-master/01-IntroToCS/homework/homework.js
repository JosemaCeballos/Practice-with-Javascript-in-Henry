'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  var array = num.split('');
  var sum = 0;

  for (var i=0; i<array.length; i++){
    sum = sum + 2**(array.length -i -1) * array[i]
  }

  return sum;
}

function DecimalABinario(num) {
  // tu codigo aca
  if (num === 0) return '0';
  if (num === 1) return '1';
  return DecimalABinario(Math.floor(num/2)) + (num%2)
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}