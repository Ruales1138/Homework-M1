'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // 1   | 0   | 1   | 1
  // 2**3| 2**2| 2**1| 2**0
  // 8   | 4   | 2   | 1
  // 8 + | 0 + | 2 + | 1  = 11
  var suma = 0;
  for(var i = 0; i < num.length; i++) {
    suma += Math.pow(2, num.length - 1 - i) * num[i]
  }
  return suma
}

console.log(BinarioADecimal('1011'))


function DecimalABinario(num) {
  // tu codigo aca
  // 11 -- 11/2 -- 5.5 -- 5 | 1
  // 5  -- 5/2  -- 2.5 -- 2 | 1
  // 2  -- 2/2  -- 1   -- 1 | 0
  // 1  -- 1/2  -- 0.5 -- 0 | 1
  var result = [];
  while(num > 0) {
    if(num % 2 === 0) {
      result.unshift(0);
      num = Math.floor(num / 2);
    }
    if(num % 2 !== 0) {
      result.unshift(1);
      num = Math.floor(num / 2);
    }
  }
  return result.join('')
}

console.log(DecimalABinario(11))


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}