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
/* const bookHover {
    let html = `
    <ul class="box-border h-[17rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside">
        <li class="text-2xl font-semibold m-1">Title: Oliver Twist</li>
        <li class="m-2">Author: Charles Dickens</li>
        <img class="float-right max-w-[70%] m-2" src="https://www.empowervate.org/wp-content/uploads/2015/11/circle.jpg" alt="colored cirles">
        <p class="m-2">Cover: </p>
    </ul>`;
    return html;
}; */