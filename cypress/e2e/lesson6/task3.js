export class Task3 {
  static checkOrder(available, ordered) {
    if (typeof available !== 'number' || typeof ordered !== 'number') {
      return "Invalid input: both available and ordered must be numbers.";
    }
    if (available < 0 || ordered < 0) {
      return "Invalid input: available and ordered must be non-negative numbers.";
    }

    if (ordered === 0) {
      return "Your order is empty";
    } else if (ordered > available) {
      return "Your order is too large, we don’t have enough goods.";
    } else {
      return "Your order is accepted";
    }
  }
}

console.log(Task3.checkOrder(10, 5));
console.log(Task3.checkOrder(10, 15));
console.log(Task3.checkOrder(10, 0));
console.log(Task3.checkOrder(-5, 5));
console.log(Task3.checkOrder(10, '5'));
