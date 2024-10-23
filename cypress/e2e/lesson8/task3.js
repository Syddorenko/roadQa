//  Завдання 3: Обчислення суми елементів масиву
//  Вам потрібно створити програму, яка обчислює суму всіх елементів у масиві за допомогою методу reduce.
//  Ось кроки, які вам потрібно виконати:
//  Створіть масив чисел, наприклад, [10, 20, 30, 40, 50].
//  Використовуючи метод reduce, обчисліть суму всіх елементів масиву.
//  Виведіть отриману суму на консоль.

export class Task3 {
  static calculateSum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
}

const numbersArray = [10, 20, 30, 40, 50];

console.log(Task3.calculateSum(numbersArray));
