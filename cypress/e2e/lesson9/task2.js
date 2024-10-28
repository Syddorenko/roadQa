class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }

  getDetails() {
    const { title, author } = this;
    return { title, author };
  }

  printDetails() {
    const { title, author } = this.getDetails();
    console.log(`Назва книги: ${title}`);
    console.log(`Автор книги: ${author}`);
  }
}

const book = new Book("Мистецтво війни", "Сунь-цзи", 500);
book.printDetails();
