export class Counter {
  static recursiveCounter(num) {
    if (num > 0) {
      console.log(num);
      this.recursiveCounter(num - 1);
    }
  }
}

Counter.recursiveCounter(55);