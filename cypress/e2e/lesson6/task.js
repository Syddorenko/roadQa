export class Task {
  static getRectangleArea(width, height) {
    return width * height;
  }

  static computeRectangleArea = function(width, height) {
    return width * height;
  };

  static calculateRectangularArea = (width, height) => width * height;
}

console.log(Task.getRectangleArea(5, 10));
console.log(Task.computeRectangleArea(5, 10));
console.log(Task.calculateRectangularArea(5, 10));

