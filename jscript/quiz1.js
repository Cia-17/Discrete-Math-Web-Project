// Use direct links to audio files
const correctSound = new Audio("sound/correctSound.mp3");
const wrongSound = new Audio("sound/wrongSound.mp3");

document.querySelectorAll("form").forEach((form) => {
  const feedbackElement = form.querySelector(".feedback");

  form.addEventListener("change", (event) => {
    if (event.target.matches('input[type="radio"]')) {
      const isCorrect = event.target.getAttribute("data-correct") === "true";

      if (isCorrect) {
        correctSound.play(); // Play correct sound
        feedbackElement.textContent = "✅ Awesome! You got that right.";
        feedbackElement.style.color = "green";
      } else {
        wrongSound.play(); // Play wrong sound
        feedbackElement.textContent = "❌ Wrong, try again 😞";
        feedbackElement.style.color = "red";
      }
    }
  });
});
