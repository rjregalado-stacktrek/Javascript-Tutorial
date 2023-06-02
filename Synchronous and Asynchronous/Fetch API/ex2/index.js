
let output = document.getElementById('example');
      
function fetchData() {
         fetch('https://dummyjson.com/products/3')
         .then(response => response.json())
         .then(data => {
            output.innerHTML += "id = " + data.id + "<br/>";
            output.innerHTML += "title = " + data.title + "<br/>";
            output.innerHTML += "description = " + data.description + "<br/>";
            output.innerHTML += "brand = " + data.brand + "<br/>";
            output.innerHTML += "category = " + data.category + "<br/>";
            output.innerHTML += "price = " + data.price + "<br/>";
            output.innerHTML += "rating = " + data.rating + "<br/>";
            output.innerHTML += "stock = " + data.stock + "<br/>";
         })
      }

