
let output = document.getElementById('reading');
      
function fetchData() {
  fetch('https://www.eightballapi.com/api')//, { mode: 'no-cors' })
    .then(response => response.text()) // Instead of response.json()
    .then(data => {
      output.innerHTML = data; // Handle the response data directly
    })
    .catch(error => {
      console.error(error);
    });
}
