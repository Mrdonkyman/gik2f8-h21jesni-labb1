const BookListItem = (book) => {
    let html = `<li
            class="book-list__item mb-2 mx-2 last:mb-0 p-3 last:border-b-0 border-b border-white cursor-pointer">
            ${book.author} - ${book.title}
         </li>`;
    return html;     
};