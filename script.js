'use strict';
let bookList = [];
window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));  
});
searchField.addEventListener('keyup', (e) => searchBooks(e.target.value));
/* searchField.addEventListener("keyup", (e) => renderBookList(
    bookList.filter(({ title, author }) => {
        const searchTerm = e.target.value.toLowerCase();
        return title.toLowerCase().indexOf(searchTerm) >= 0 || author.toLowerCase().indexOf(searchTerm) >= 0;
    })
  )
); */
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