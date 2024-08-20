let too = [5, 6, 4, 12, 19, 121, 1, 7, 9, 63];
let totalEvenNumbersLength = 0;
let totalOddNumbersLength = 0;
for (let i = 0; i < too.length; i++) {
  if (too[i] % 2 === 0) {
    totalEvenNumbersLength += 1;
  } else {
    totalOddNumbersLength += 1;
  }
}
console.log(totalEvenNumbersLength, totalOddNumbersLength);
