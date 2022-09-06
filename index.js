


function fetchBooks() {

  return fetch("https://anapioficeandfire.com/api/books")
  .then(res => res.json())
  .then(data => renderBooks(data));

}

function renderBooks(books) {
  console.log("Hi being called.")
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name
    main.appendChild(h2)
  })
}




document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});



//   fetch('https://anapioficeandfire.com/api/books')
//   .then(response => response.json())
//   .then(data => console.log(data));  
// }
  
  
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(response => response.json())
//   .then(data => console.log(data));  
// }

// function fetchBooks() {
//   fetch('https://anapioficeandfire.com/api/books')
//   .then(function(resp){
//     console.log(resp);
//     return resp.json();
//   }) 
//   .then(function(data){
//     console.log(data);
//   })
// }
