// import {testCases} from '../../helpers/TestCases.js';
//
// export class Calculator {
//   static divide(numerator, denominator) {
//     if (typeof numerator !== 'number' || typeof denominator !== 'number') {
//       throw new Error('Both fields must be numbers');
//     }
//     if (denominator === 0) {
//       throw new Error('Denominator cannot be 0');
//     }
//     return numerator / denominator;
//   }
// }
//
// testCases.forEach(([numerator, denominator]) => {
//   try {
//     console.log(Calculator.divide(numerator, denominator));
//   } catch (error) {
//     console.error('Error:', error.message);
//   } finally {
//     console.log('Робота завершена');
//   }
// });

const arr = [1, 2, 5, 3, 4, 6, 8, 9, 7, 0];

console.log(arr);
console.log(arr.toSorted());