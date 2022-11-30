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
    const bookListHover = document.querySelectorAll('.book-list__item');
    bookListHover.forEach((item) => {
    item.addEventListener('mouseover', (e) => {
        console.log(e.target.id);
        const book = getBook(e.target.id)
        console.log(book);
        item.insertAdjacentHTML('afterend', bookHover)
    }
    );item.addEventListener('mouseout', hoverRemoveElement)});
}
function hoverRemoveElement() {
    const existingElement = document.getElementById('bookDetail');
    existingElement.remove();
}/*     bookList.filter(title, author, coverImage, pages, releaseDate) */
const bookHover = `
        <ul id="bookDetail" class="float-right box-border h-[17rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside">
            <li class="text-2xl font-semibold m-1">Title: Oliver twist</li>
            <li class="m-2">Author: Charles Dickens</li>
            <img class="float-right max-w-[70%] m-2" src="https://www.empowervate.org/wp-content/uploads/2015/11/circle.jpg" alt="book cover">
            <p class="m-2">Cover: </p>
        </ul>`;