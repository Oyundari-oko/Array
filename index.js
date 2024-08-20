let studentsAge = [10, 20, 15, 19, 18, 19, 19];
let i = 0;
let sum = 0;
for (let i = 0; i < studentsAge.length; i++) {
  sum += studentsAge[i];
}
let avarage = sum / studentsAge.length;
console.log(avarage);
