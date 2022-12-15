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
    const existingElementBookList = document.querySelector('.book-list');
    const root = document.getElementById('root');
    existingElementBookList && root.removeChild(existingElementBookList);
    bookList.length > 0 && searchField.value && root.insertAdjacentHTML('beforeend', BookList(bookList));
    
    const bookListHover = document.querySelectorAll('.book-list__item');
    bookListHover.forEach((item) => {
    console.log(item.innerHTML);
    var innerHTML;
    innerHTML = item.innerHTML;
    item.addEventListener('mouseover', () => renderBookListPlusFetch(innerHTML));
    item.addEventListener('mouseout', hoverRemoveElement());
    });
}
async function getOneBook(id) {
    const result = await fetch(url + "/" + id).then((result) => result.json());
    return result;
  }
async function renderBookListPlusFetch(innerHTML) {
    for (let i = 1; i <= bookList.length; i++) {
      const book = await getOneBook(i);
    if (innerHTML.toLowerCase().indexOf(book.author.toLowerCase()) >= 0){
      let html;
        html = BookInfo(book);
        root.insertAdjacentHTML("afterend", html);
        }
    }
}
/* function hoverRemoveElement()
{
const existingElementBookDetails = document.getElementById('bookDetail');

try {root.removeChild(existingElementBookDetails);}
 catch {}

}  */


function hoverRemoveElement() {
    const box = document.getElementById("bookDetail");
    box.remove();
}