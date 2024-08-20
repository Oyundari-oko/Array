let ofNumbers = [43, 56, 23, 89, 88, 90, 99, 652, 15, 290, 11];
let maxNumber = 0;
for (let i = 0; i < ofNumbers.length; i++) {
  if (maxNumber > ofNumbers[i]) {
    maxNumber = ofNumbers[i];
  }
}
console.log(maxNumber);

//let sum = 43;
//for (let i = 0; i < ofNumbers[0]; i++) {
// sum = ofNumbers[0] + 25;}
//console.log(sum);

//let sum2 = 11;
//for(let i = 0; i < ofNumbers[10]; i++){
//  sum2 = ofNumbers[10] + 30}
//console.log(sum2);
