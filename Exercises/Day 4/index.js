
document.addEventListener("DOMContentLoaded", () => {
    const answerBtn = document.getElementById("answerBtn");
    const questionInput = document.getElementById("questionInput");
    const answerText = document.getElementById("answerText");

    answerBtn.addEventListener("click", () => {
        const question = questionInput.value;
        if (question.trim() === "") {
            answerText.textContent = "Please enter a question.";
            return;
        }

        getAnswer(question)
            .then((answer) => {
                answerText.textContent = answer;
            })
            .catch((error) => {
                console.error(error);
                answerText.textContent = "An error occurred while fetching the answer.";
            });
    });
});

function getAnswer(question) {
    const url = `https://www.eightballapi.com/api/biased?question=${encodeURIComponent(question)}`;
    return fetch(url, {mode: 'cors',
  credentials: 'include'})
        .then((response) => response.json())
        .then((data) => 
        document.getElementById("reading").innerHTML += "reading = " + data.reading + "<br/>");
}