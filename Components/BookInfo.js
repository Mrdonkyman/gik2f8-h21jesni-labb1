function BookInfo(book){
    let html
      if (book.coverImage == ""){
        html = `<ul id="bookDetail" class="float-right box-border h-[12rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside">
            <li class="text-2xl font-semibold m-1">Title: ${book.title}</li>
            <li class="m-2">Author: ${book.author}</li>
            <li class="m-2">Pages: ${book.pages}</li>
            <li class="m-2">Year: ${book.releaseDate}</li>
        </ul>`;
      }
      else {
        
       html = `<ul id="bookDetail" class="float-right box-border h-[30rem] w-64 border-4 rounded-md border-black bg-neutral-700 list-inside">
            <li class="text-2xl font-semibold m-1">Title: ${book.title}</li>
            <li class="m-2">Author: ${book.author}</li>
            <li class="m-2">Pages: ${book.pages}</li>
            <li class="m-2">Year: ${book.releaseDate}</li>
            <img class="float-right max-w-[70%] m-2" src="${book.coverImage}" alt="Cover of the book">
            <p class="m-2">Cover: </p>
        </ul>`;
      
    
      }
      return html;}