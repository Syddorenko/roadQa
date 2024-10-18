export class NumberHandler {
  static handleNum(number, handleEven, handleOdd) {
    if (number % 2 === 0) {
      handleEven();
    } else {
      handleOdd();
    }
  }

  static handleEven() {
    console.log('Number is even');
  }

  static handleOdd() {
    console.log('Number is odd');
  }
}

NumberHandler.handleNum(10, NumberHandler.handleEven, NumberHandler.handleOdd);
NumberHandler.handleNum(10, NumberHandler.handleEven, NumberHandler.handleOdd);
