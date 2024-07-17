// Project Library

// 1. Create Interfaces
// Create Book interface (title, author, year, isAvailale)
// Create Library interface: (addBook(), getDetails(), searchBook(), listBooks())
interface Book {
  title: string;
  author: string;
  year: number;
  isAvailable: boolean; 
}

interface Library {
  addBook(book: Book): void;
  getDetails(title: string): Book | undefined;
  searchBook(query: string): Book[] // Array<Book>
  listBooks(): {list: Book[], numberOfBooks: number}
}
// 2. Create classes
// Create BookClass class that implements Book interface
// Create LibrayClass class that implements Library interface

class BookClass implements Book {
  constructor(
    public title: string,
    public author: string,
    public year: number,
    public isAvailable: boolean = true
  ) {
  }
  
}

class LibrayClass implements Library {
  private books: Book[] = [];
  
  addBook(book: Book) {
    this.books.push(book);
  }

  getDetails(title: string): Book | undefined {
    const book = this.books.find(b => b.title === title);
    return book;
  }

  searchBook(query: string): Book[] {
    const books = this.books.filter(b => b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()))
    return books;
  }
  listBooks() {
    return { list: this.books, numberOfBooks: this.books.length }
  }
}
// 3. Type annotations
// Make sure to annotate all the fields

// - DONE

// 4. You can make isAvailable by default true in addBook()

// - DONE

// 5. Use class

const library = new LibrayClass();
const book1 = new BookClass('Book1', 'Alex', 2000);

console.log('Library start', library);

library.addBook(book1);

console.log(library);

console.log(library.getDetails('Book1'));

console.log(library.searchBook('Alex'));

console.log(library.listBooks());



