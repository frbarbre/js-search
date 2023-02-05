var books = [
  {
    "isbn": "9781593279509",
    "title": "Eloquent JavaScript, Third Edition",
    "subtitle": "A Modern Introduction to Programming",
    "author": "Marijn Haverbeke",
    "published": "2018-12-04",
    "publisher": "No Starch Press",
    "pages": 472,
  },
  {
    "isbn": "9781491943533",
    "title": "Practical Modern JavaScript",
    "subtitle": "Dive into ES6 and the Future of JavaScript",
    "author": "Nicolás Bevacqua",
    "published": "2017-07-16",
    "publisher": "O'Reilly Media",
    "pages": 334,
  },
  {
    "isbn": "9781593277574",
    "title": "Understanding ECMAScript 6",
    "subtitle": "The Definitive Guide for JavaScript Developers",
    "author": "Nicholas C. Zakas",
    "published": "2016-09-03",
    "publisher": "No Starch Press",
    "pages": 352,
  },
  {
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "subtitle": "An In-Depth Guide for Programmers",
    "author": "Axel Rauschmayer",
    "published": "2014-04-08",
    "publisher": "O'Reilly Media",
    "pages": 460,
  },
  {
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "subtitle": "A JavaScript and jQuery Developer's Guide",
    "author": "Addy Osmani",
    "published": "2012-08-30",
    "publisher": "O'Reilly Media",
    "pages": 254,
  },
  {
    "isbn": "9798602477429",
    "title": "You Don't Know JS Yet",
    "subtitle": "Get Started",
    "author": "Kyle Simpson",
    "published": "2020-01-28",
    "publisher": "Independently published",
    "pages": 143,
  },
  {
    "isbn": "9781484200766",
    "title": "Pro Git",
    "subtitle": "Everything you neeed to know about Git",
    "author": "Scott Chacon and Ben Straub",
    "published": "2014-11-18",
    "publisher": "Apress; 2nd edition",
    "pages": 458,
  },
]

var render = function (data) {
  var app = document.getElementById('app');
  var booksHTMLString = '<ul>' +
    data.map(function (book) {
      return '<li>' +
        '<strong>ISBN </strong>' + '<br/>' + book.isbn + '<br/>' +
        '<strong>Title </strong>' + '<br/>' + book.title + '<br/>' +
        '<strong>Subtitle </strong>' + '<br/>' + book.subtitle + '<br/>' +
        '<strong>Author </strong>' + '<br/>' + book.author + '<br/>' +
        '<strong>Published </strong>' + '<br/>' + book.published + '<br/>' +
        '<strong>Publisher </strong>' + '<br/>' + book.publisher + '<br/>' +
        '<strong>Pages </strong>' + '<br/>' + book.pages + '<br/>' +
        '</li>';
    }).join('');
  + '</ul>';

  app.innerHTML = booksHTMLString;
}
render(books);

var handleSearch = function (event) {
  event.preventDefault();
  // Get the search terms from the input field
  var searchTerm = event.target.elements['search'].value;
  // Tokenize the search terms and remove empty spaces
  var tokens = searchTerm
    .toLowerCase()
    .split(' ')
    .filter(function (token) {
      return token.trim() !== '';
    });
  if (tokens.length) {
    //  Create a regular expression of all the search terms
    var searchTermRegex = new RegExp(tokens.join('|'), 'gim');
    var filteredList = books.filter(function (book) {
      // Create a string of all object values
      var bookString = '';
      for (var key in book) {
        if (book.hasOwnProperty(key) && book[key] !== '') {
          bookString += book[key].toString().toLowerCase().trim() + ' ';
        }
      }
      // Return book objects where a match with the search regex if found
      return bookString.match(searchTermRegex);
    });
    // Render the search results
    render(filteredList);
  }
};

document.addEventListener('submit', handleSearch);
document.addEventListener('reset', function (event) {
  event.preventDefault();
  render(books);
})