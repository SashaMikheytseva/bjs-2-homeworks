class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = state;
      this.type = type;
    }
  
    fix() {
      this.state *= 1.5;
    }
  
    set state(newState) {
      if (newState < 0) {
        this._state = 0;
      } else if (newState > 100) {
        this._state = 100;
      } else {
        this._state = newState;
      }
    }
    get state() {
      return this._state;
    }
  }

  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type) {
      super(name, releaseDate, pagesCount, state = 100, type);
      this.type = 'magazine';
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
      super(name, releaseDate, pagesCount, state = 100, type);
      this.type = 'book';
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
      super(author, name, releaseDate, pagesCount, state = 100, type);
      this.type = 'novel';
    }
  }
  
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
      super(author, name, releaseDate, pagesCount, state = 100, type);
      this.type = 'fantastic';
    }
  }
  
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state = 100, type) {
      super(author, name, releaseDate, pagesCount, state = 100, type);
      this.type = 'detective';
    }
  }

  //task 2

  class Library {
    constructor (name, books) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
  
    findBookBy(type, value) {
      const findResult = this.books.find((book) => book[type] === value);
      return findResult || null;
    }
  
    giveBookByName(bookName) {
      const thisBook = this.findBookBy('name', bookName);
      if (thisBook) {
        this.books.splice(this.books.indexOf(bookName), 1);
        return thisBook;
      } else {
        return null;
      } 
    }
  }

  ///task 3

  class Student {
    constructor(name, marks) {
      this.name = name;
      this.marks = {};
    }
  
    addMark(mark, subject) {
      if (mark >= 2 && mark <= 5) {
        if (this.marks[subject] === undefined) {
          this.marks[subject] = [];
        }
        this.marks[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (this.marks.hasOwnProperty(subject) && this.marks[subject].length > 0) {
        return this.marks[subject].reduce((acc, mark) => acc + mark, 0) / this.marks[subject].length;
      } else {
        return 0;
      }
    }
  
    getAverage() {
      let arr = Object.keys(this.marks);
      if (arr.length === 0) {
        return 0;
      } else {
        let averageMarks = arr.map((item) => this.getAverageBySubject(item));
        return averageMarks.reduce((acc, item) => acc + item, 0) / arr.length;
        }
      }
    }