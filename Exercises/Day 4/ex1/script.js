document.getElementById('questionForm').addEventListener('submit', function(e) {
    e.preventDefault();
    var question = document.getElementById('question').value;
    getAnswer();
});

function getAnswer() {
    // Replace <API_ENDPOINT> with the actual URL of your API
    var apiEndpoint = 'https://jsonplaceholder.typicode.com/comments?postId=1'; // + encodeURIComponent(question)

    fetch(apiEndpoint)
        .then((response)=>{
            //if (response) {
                return response.json();
            //}
            //throw new Error('Error retrieving answer');
        })
        .then((data) => {
            var answer = data.id;
            console.log(answer);
            displayAnswer(answer);
        })
        .catch(function(error) {
            displayAnswer('Error retrieving answer');
        });
}

function displayAnswer(answer) {
    var answerElement = document.getElementById('answer');
    answerElement.textContent = 'Answer: ' + answer;
}

//getAnswer();
