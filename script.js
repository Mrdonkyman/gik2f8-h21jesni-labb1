'use strict';
let bookList = [];
window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));  
});
searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));
async function searchBooks(searchTerm) {
    renderBookList(
        bookList.filter(
            ({ title, author }) =>
                title.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0 ||
                author.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0
        )
    );
};
function renderBookList(bookList) {
    BookList(bookList);
    const existingElement = document.querySelector('.book-list');
    const root = document.getElementById('root');

    existingElement && root.removeChild(existingElement);

    bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
}
function renderBookDetail() {
    const existingElement = document.getElementById('bookDetail');
    const Test = document.querySelector('.Test');

    existingElement
    Test.insertAdjacentHTML('afterend', bookHover());
    /* existingElement.remove(); */
}

const bookHover = (bookList) => {
/*     bookList.filter(title, author, coverImage, pages, releaseDate) */
    let html = `
        <ul id="bookDetail" class="box-border h-[17rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside">
            <li class="text-2xl font-semibold m-1">Title: Oliver twist</li>
            <li class="m-2">Author: Charles Dickens</li>
            <img class="float-right max-w-[70%] m-2" src="https://www.empowervate.org/wp-content/uploads/2015/11/circle.jpg" alt="book cover">
            <p class="m-2">Cover: </p>
        </ul>`;
    return html;
}