const BookList = (bookList) => {
    let html = `
            <ul class="book-list rounded-md border-2 border-white bg-neutral-700 w-5/6 mx-auto">`;
        for(let i = 0; i < bookList.length; i++) {
            html += BookListItem(bookList[i]);
        }
        html += `</ul>`;
    return html;
};