export class Task3 {
  static multiplicationTable(number) {
    console.log(`Таблиця множення для ${number} (for loop):`);
    for (let i = 1; i <= 10; i++) {
      console.log(`${number} x ${i} = ${number * i}`);
    }

    console.log(`Таблиця множення для ${number} (while loop):`);
    let j = 1;
    while (j <= 10) {
      console.log(`${number} x ${j} = ${number * j}`);
      j++;
    }
  }
}