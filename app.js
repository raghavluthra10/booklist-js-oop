// Book class: represent a book

class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn
    }
}

// ui class: handle UI tasks

class Ui {
    static displayBooks () {
        const StoredBooks = [
            {
                title: 'Book one',
                author: 'John Doe',
                isbn: '2324232'
            },
            {
                title: 'Book two',
                author: 'kaalu karim',
                isbn: '2432223'
            }
        ];

        const books = StoredBooks;
    
        books.forEach((book) => Ui.addBookToList(book));
    }

    static addBookToList(book) {
        const list = document.getElementById('book-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td> ${book.title} </td>
            <td> ${book.author} </td>
            <td> ${book.isbn} </td>
            <td> <a href='#' class='btn btn-danger btn-sm delete'> X </a> </td>
        `;
    
        list.appendChild(row);
    }

    static deleteBook(el) {
        if(el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('isbn').value = '';
    }

}

// Store class: Handles storage

// Event: Display Books
document.addEventListener('DOMContentLoaded', Ui.displayBooks)


// Event: Add a book

document.getElementById('book-form').addEventListener('submit', (e) => {
    e.preventDefault();
    
    // get form values
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const isbn = document.getElementById('isbn').value;

    // Validation
    if (title === '' || author === '' || isbn === '') {
        alert('Please fill in all fields');
    } else {
        // Instantiate book
        const book = new Book(title, author, isbn);

        // add book to Ui
        Ui.addBookToList(book);

        //clear fields
        Ui.clearFields();
    }
})

// Event: Remove a book

document.getElementById('book-list').addEventListener('click', (e) => {
    Ui.deleteBook(e.target)
})

// 41: 00
// https://www.youtube.com/watch?v=JaMCxVWtW58&t=1796s