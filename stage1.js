function Book(title, author, genre) {
  this.title = title,
  this.author = author,
  this.genre = genre

}

function LibararyCatalog() {
  this.books = []

}

LibararyCatalog.prototype.addBook = function(book) {
  return this.books.push(book)
}

LibararyCatalog.prototype.bookIterator = function() {
  for(const x of this.books) {
   return console.log(this.books)
    //yield this.books
  }
}

LibararyCatalog.prototype[Symbol.iterator] = LibararyCatalog.prototype.bookIterator


LibararyCatalog.prototype.getBooksByAuthor = function(authorName) {
  return this.books.filter(book => book.author === authorName)
}   

const catalog = new LibararyCatalog()
catalog.addBook(new Book('God is good', 'Moses', 'fiction'))
catalog.addBook(new Book('Save the world', 'James', 'Non fiction'))
catalog.addBook(new Book('Let us rock', 'Jude', 'Romance'))

catalog.bookIterator()
console.log(catalog.books)  

console.log(catalog)
for(const book of catalog.books) {
  console.log(book)
}

console.log(catalog.getBooksByAuthor('Moses'))
