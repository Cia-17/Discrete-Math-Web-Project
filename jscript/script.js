function checkAnswer(quizName, correctAnswer) {
  const radios = document.getElementsByName(quizName);
  let selectedAnswer;

  for (const radio of radios) {
    if (radio.checked) {
      selectedAnswer = parseInt(radio.value);
      break;
    }
  }

  const resultElement = document.getElementById(quizName + "-result");

  if (selectedAnswer === undefined) {
    resultElement.textContent = "Please select an answer.";
    resultElement.style.color = "red";
  } else if (selectedAnswer === correctAnswer) {
    resultElement.textContent = "Correct!";
    resultElement.style.color = "green";
  } else {
    resultElement.textContent = "Wrong answer, try again!";
    resultElement.style.color = "red";
  }
}
