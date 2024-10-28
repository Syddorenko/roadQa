class User {
  constructor(name, email, age) {
    this.name = name;
    this.email = email;
    this.age = age;

    if (!this.email) {
      this.email = "Не вказано";
    }
  }

  getInfo() {
    return { name: this.name, email: this.email, age: this.age };
  }

  static users = [];

  static addUser(user) {
    if (user instanceof User) {
      this.users.push(user);
    } else {
      console.error("Об'єкт не є екземпляром User");
    }
  }

  static printAllUsers() {
    for (const user of this.users) {
      const { name, email, age } = user.getInfo();
      console.log(`Ім'я: ${name}, Електронна пошта: ${email}, Вік: ${age}`);
    }
  }
}

User.addUser(new User("Анна", "anna@example.com", 22));
User.addUser(new User("Богдан", "bogdan@example.com", 25));
User.addUser(new User("Вікторія", "victoria@example.com", 29));
User.addUser(new User("Олег", "", 30));
User.printAllUsers();
