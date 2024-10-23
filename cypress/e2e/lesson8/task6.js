// Завдання 6: Сортування масивів
// У вас є вихідний масив сonst numbersList = [1,10,14,2,4,5,43,34]
// Створіть новий масив на основі вихідного масиву (копіюйте його)
// Відсортуйте створений масив (від меншого до більшого)
// Виведіть обидва масиви в консоль
export class Task6 {
  static sortArray(numbers) {
    const sortedArray = [...numbers];

    sortedArray.sort((a, b) => a - b);
    return sortedArray;
  }
}

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

console.log("Original array:", numbersList);
console.log("Sorted array:", Task6.sortArray(numbersList));
