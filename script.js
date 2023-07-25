let myLibrary = [];
const bookshelf = document.getElementById("content");
const newBookSection = document.getElementById("new-book-section");

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }

    //changes book from read to unread or vice versa
    changeReadStatus(readElement) {
        this.read = !this.read;
        readElement.classList.toggle("read");
    }

    //removes book from myLibrary array
    removeBook() {
        const bookIndex = myLibrary.findIndex((book) => book.title === this.title);
        myLibrary.splice(bookIndex, 1);
    }

}

//creates a new book object and displays in DOM
function addBookToLibrary(title, author, pages, read) {
    book = new Book(title, author, pages, read);
    myLibrary.push(book);

    //creates the "book" element
    let bookCard = document.createElement("div");
    bookCard.classList.add("book");
    bookshelf.appendChild(bookCard);

    //creates the close button
    let closeBtn = document.createElement("div");
    closeBtn.classList.add("close-btn");
    closeBtn.textContent = "+";
    closeBtn.addEventListener("click", () => {
        //onclick, remove from myLibrary and DOM
        book.removeBook();
        bookCard.remove();
    });
    bookCard.appendChild(closeBtn);

    //adds title, pages, and whether it is read or not
    let titleElement = document.createElement("p");
    titleElement.classList.add("title");
    titleElement.textContent = book.title;
    bookCard.appendChild(titleElement);

    let authorElement = document.createElement("p");
    authorElement.classList.add("author");
    authorElement.textContent = (`Author: ${book.author}`);
    bookCard.appendChild(authorElement);

    let pagesElement = document.createElement("p");
    pagesElement.classList.add("pages");
    pagesElement.textContent = (`Pages: ${book.pages}`);
    bookCard.appendChild(pagesElement);

    let readElement = document.createElement("p");
    readElement.classList.add("is-read")
    if (book.read) {
        readElement.classList.add("read");
    }
    bookCard.appendChild(readElement);
    readElement.addEventListener("click", () => {
        book.changeReadStatus(readElement);
    });
}

function submitNewBookForm(event) {

    title = document.getElementById("title-input").value;
    author = document.getElementById("author-input").value;
    pages = document.getElementById("pages-input").value;
    isRead = document.getElementById("is-read-input").value;

    if (title && author && pages) {
        addBookToLibrary(title, author, pages, isRead);
        toggleNewBookForm();
    } else {
        console.log("false");
    }

    event.preventDefault();
}

function toggleNewBookForm() {
    newBookSection.classList.toggle("hide");
    const newBookForm = document.getElementById("add-book-form");
    newBookForm.reset();
}


addBookToLibrary("The Hobbit", "JRR Tolkien", 295, true);
addBookToLibrary("The Wonderful Wizard of Oz", "L. Frank Baum", 342, false);
addBookToLibrary("Moby Dick", "Herman Melville", 315, false);
addBookToLibrary("Cherub", "Robert Muchamore", 224, true);
addBookToLibrary("Hendersons Boys", "Robert Muchamore", 524, false);

submitBookButton = document.getElementById("submit-book-btn");
submitBookButton.addEventListener("click", submitNewBookForm);
cancelBookButton = document.getElementById("cancel-book-btn");
cancelBookButton.addEventListener("click", toggleNewBookForm);
showBookFormButton = document.getElementById("show-form-btn");
showBookFormButton.addEventListener("click", toggleNewBookForm);