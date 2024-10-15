export class Task2 {
  static checkAndValidateAge(age) {
    try {
      if (typeof age !== 'number' || age < 0) {
        throw new Error('Invalid input: age must be a non-negative number');
      }
      const isAdult = age >= 18;
      console.log(`Age ${age}: ${isAdult ? 'Adult' : 'Not an adult'}`);
    } catch (error) {
      console.error(error.message);
    }
  }
}

Task2.checkAndValidateAge(25);
Task2.checkAndValidateAge(15);
Task2.checkAndValidateAge(-5);



