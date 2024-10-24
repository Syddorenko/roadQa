// Завдання 5: Об'єднання масивів
// Вам потрібно створити програму, яка об'єднає два масиви в один
// Ось кроки, які вам потрібно виконати:
// Створіть два масиви, наприклад, firstArray і secondArray, які містять деякі значення.
// Створіть новий масив, який містить всі елементи з обох вихідних масивів.
// Виведіть отриманий об'єднаний масив на консоль.
export class Task5 {
  static mergeArrays(arr1, arr2) {
    return [...arr1, ...arr2];
  }
}

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

console.log(Task5.mergeArrays(firstArray, secondArray));
