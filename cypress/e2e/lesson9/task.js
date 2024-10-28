class Student {
  constructor(firstName, lastName, age, courses = []) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.courses = courses;
  }

  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  printInfo() {
    console.log(
        `Студент: ${this.getFullName()}, Вік: ${this.age}, Курси: ${this.courses.join(
            ', ')}`);
  }
}

const student = new Student('Іван', 'Петренко', 21,
    ['Математика', 'Історія', 'Програмування']);
student.printInfo();
