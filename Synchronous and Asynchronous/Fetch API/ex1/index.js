//========= Fetch API ===================

// The Fetch API uses Request and Response objects (and other things involved with network 
// requests), as well as related concepts such as CORS and the HTTP Origin header semantics.

// The Fetch API provides a JavaScript interface for accessing and manipulating parts of 
// the protocol, such as requests and responses. It also provides a global fetch() method 
// that provides an easy, logical way to fetch resources asynchronously across the network.


// An event listener is a function that waits for a specific event to 
// occur, such as a click, keypress, or page load, and then executes the 
// provided callback function.

// 'DOMContentLoaded' => This ensures that the JavaScript code is executed after all 
// the HTML elements have been created and are accessible, allowing you to 
// manipulate them effectively.

document.addEventListener('DOMContentLoaded', function() {

  function fetchData() {
      const ul = document.getElementById('authors');
      const list = document.createDocumentFragment();

      const url = 'https://jsonplaceholder.typicode.com/users';

      fetch(url)
          .then((response) => {
              return response.json();
          })
          .then((data) => {
              let authors = data;

              authors.map(function(author) {
                  let li = document.createElement('li');
                  let name = document.createElement('h2');
                  let email = document.createElement('span');

                  name.innerHTML = `${author.name}`;
                  email.innerHTML = `${author.email}`;

                  li.appendChild(name);
                  li.appendChild(email);
                  list.appendChild(li);
              });

              ul.appendChild(list);
          })
          .catch(function(error) {
              console.log(error);
          });
  }

  fetchData();
});

//===================== EXPLAINATION =======================

/*
Certainly! Let's break down the code step by step:

1. `document.addEventListener('DOMContentLoaded', function() { ... })`:
   - This line adds an event listener to the `document` object for the `'DOMContentLoaded'` event. It waits for the DOM content of the page to be fully loaded and parsed before executing the provided callback function.

2. `function fetchData() { ... }`:
   - This line declares a function named `fetchData`. It is defined within the event listener callback function.

3. `const ul = document.getElementById('authors');`:
   - This line selects an element with the `id` attribute `'authors'` using the `getElementById` method. It assigns the element to the variable `ul`.

4. `const list = document.createDocumentFragment();`:
   - This line creates a document fragment using the `createDocumentFragment` method. A document fragment is a lightweight container used to hold a list of nodes before appending them to the DOM. It assigns the document fragment to the variable `list`.

5. `const url = 'https://jsonplaceholder.typicode.com/users';`:
   - This line declares a constant variable named `url` and assigns it the value `'https://jsonplaceholder.typicode.com/users'`. It specifies the URL from which data will be fetched.

6. `fetch(url) ...`:
   - This line initiates a fetch request to the specified URL using the `fetch` function. It returns a promise that resolves to the HTTP response.

7. `.then((response) => { ... })`:
   - This line chains a `then` method to the fetch request's promise, which takes a callback function as an argument. The callback function receives the response from the previous promise as an argument.

8. `return response.json();`:
   - This line parses the response as JSON using the `json` method of the response object. It returns another promise that resolves to the parsed JSON data.

9. `.then((data) => { ... })`:
   - This line chains another `then` method to the previous promise, which takes a callback function as an argument. The callback function receives the parsed JSON data from the previous promise as an argument.

10. `authors.map(function(author) { ... })`:
    - This line iterates over each author object in the `authors` array using the `map` method. It takes a callback function as an argument.

11. `let li = document.createElement('li');`:
    - This line creates a new `<li>` element using the `createElement` method and assigns it to the variable `li`.

12. `let name = document.createElement('h2');`:
    - This line creates a new `<h2>` element using the `createElement` method and assigns it to the variable `name`.

13. `let email = document.createElement('span');`:
    - This line creates a new `<span>` element using the `createElement` method and assigns it to the variable `email`.

14. `name.innerHTML = `${author.name}`;`:
    - This line sets the `innerHTML` property of the `name` element to the value of `author.name`, which represents the name of the author.

15. `email.innerHTML = `${author.email}`;`:
    - This line sets the `innerHTML` property of the `email` element to the value of `author.email`, which represents the email of the author.

16. `li.appendChild(name);`:
    - This line appends the `name` element as a child of the `li` element.

17. `li.appendChild(email);`:
    - This line appends the `email` element as a child of the

 `li` element.

18. `list.appendChild(li);`:
    - This line appends the `li` element as a child of the `list` document fragment.

19. `ul.appendChild(list);`:
    - This line appends the `list` document fragment, containing all the `<li>` elements, as a child of the `ul` element. This will insert the list of authors into the HTML.

20. `.catch(function(error) { ... })`:
    - This line handles any errors that occur during the fetch request or data processing. The callback function receives the error object as an argument and logs it to the console.

21. `fetchData();`:
    - This line calls the `fetchData` function. It is executed immediately after the event listener is attached, so the data fetching and rendering process begins when the DOM content is fully loaded.

Overall, this code fetches data from the specified URL, processes the JSON response, creates `<li>` elements for each author, and appends them to the `<ul>` element in the HTML. It demonstrates how to dynamically populate a list of authors on a web page using JavaScript and the DOM.

*/