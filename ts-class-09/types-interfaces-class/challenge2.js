// Project Library
// 2. Create classes
// Create BookClass class that implements Book interface
// Create LibrayClass class that implements Library interface
var BookClass = /** @class */ (function () {
    function BookClass(title, author, year, isAvailable) {
        if (isAvailable === void 0) { isAvailable = true; }
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = isAvailable;
    }
    return BookClass;
}());
var LibrayClass = /** @class */ (function () {
    function LibrayClass() {
        this.books = [];
    }
    LibrayClass.prototype.addBook = function (book) {
        this.books.push(book);
    };
    LibrayClass.prototype.getDetails = function (title) {
        var book = this.books.find(function (b) { return b.title === title; });
        return book;
    };
    LibrayClass.prototype.searchBook = function (query) {
        var books = this.books.filter(function (b) { return b.title.toLowerCase().includes(query.toLowerCase()) || b.author.toLowerCase().includes(query.toLowerCase()); });
        return books;
    };
    LibrayClass.prototype.listBooks = function () {
        return { list: this.books, numberOfBooks: this.books.length };
    };
    return LibrayClass;
}());
// 3. Type annotations
// Make sure to annotate all the fields
// - DONE
// 4. You can make isAvailable by default true in addBook()
// - DONE
// 5. Use class
var library = new LibrayClass();
var book1 = new BookClass('Book1', 'Alex', 2000);
console.log('Library start', library);
library.addBook(book1);
console.log(library);
console.log(library.getDetails('Book1'));
console.log(library.searchBook('Alex'));
console.log(library.listBooks());
