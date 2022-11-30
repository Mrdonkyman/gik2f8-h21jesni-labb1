const url = 'https://gik2f8-labs.herokuapp.com/books';
 async function getAll() {
    const result = await fetch(url)
    .then((result) => result.json())
    .catch((e) => e);
    return result;
}
async function getBook(id) {
    const response = await fetch(`https://gik2f8-labs.herokuapp.com/books/${id}`)
      .then((response) => response.json())
      .catch((e) => console.log(e));
    return response;
  }