"use strict";

function isEnoughCapacity(products, containerSize) {
  let totalNumber = 0;
  let numberProducts = Object.values(products);
  let answer = 0;

  for (let i = 0; i < numberProducts.length; i++) {
    totalNumber += numberProducts[i];
  }
  answer = totalNumber <= containerSize ? true : false;
  return answer;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
