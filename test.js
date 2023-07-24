function populateLibrary() {
    clearShelf(bookshelf);
    myLibrary.forEach((book) => {
        //add each "book" to the main
        let bookCard = document.createElement("div");
        bookCard.classList.add("book");
        bookshelf.appendChild(bookCard);

        let closeBtn = document.createElement("div");
        closeBtn.classList.add("close-btn");
        closeBtn.textContent = "+";
        closeBtn.addEventListener("click", () => {
            book.removeBook();
            populateLibrary();
        });
        bookCard.appendChild(closeBtn);

        let title = document.createElement("p");
        title.classList.add("title");
        title.textContent = book.title;
        bookCard.appendChild(title);

        let author = document.createElement("p");
        author.classList.add("author");
        author.textContent = book.author;
        bookCard.appendChild(author);

        let pages = document.createElement("p");
        pages.classList.add("pages");
        pages.textContent = book.pages;
        bookCard.appendChild(pages);

        let read = document.createElement("p");
        read.classList.add("is-read")
        if (book.read) {
            read.classList.add("read");
            read.textContent = "Read"
        } else {
            read.classList.add("unread");
            read.textContent = "Unread"
        }
        bookCard.appendChild(read);
        read.addEventListener("click", () => {
            book.changeReadStatus();
            populateLibrary();
        });
    });

}