// Завдання 2: Копіювання з мутацією
//  Вам потрібно створити програму, яка мутує значення кожного елемента в масиві за допомогою методу map.
//  Ось кроки, які вам потрібно виконати:
//  Створіть початковий масив, наприклад, [1, 2, 3, 4, 5].
//  Створіть новий масив, де кожне значення це елемент вихідного масиву помножений на значення індексу відповідного елемента початкового масиву.
//  Виведіть новий масив на консоль.

export class Task2 {
  static mutateArrayByIndex(arr) {
    return arr.map((value, index) => value * index);
  }
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 14, 28];
console.log(Task2.mutateArrayByIndex(originalArray));