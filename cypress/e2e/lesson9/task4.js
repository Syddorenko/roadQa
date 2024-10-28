class task4 {
  constructor(firstName, lastName, age, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.email = email;
  }

  removeAge() {
    delete this.age;
  }

  getInfo() {
    if (!this.email) {
      console.log('Email field is missing');
    }

    return {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      age: this.age,
    };
  }

  printInfo() {
    console.log("Інформація про особу:", this.getInfo());
  }
}

const person = new task4("Artem", "Sydorenko", 25, 'hille@example.com');
const person2 = new task4("Nikita", "Trambi", 23, '');
person.removeAge();
person2.removeAge();
person.printInfo();
person2.printInfo();
