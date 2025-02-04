const scrollTopButton = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

scrollTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Smooth scroll to anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

/* Quiz */
function checkQuiz() {
  const quizForm = document.getElementById("quiz-form");
  const result = document.getElementById("quiz-result");

  if (!result) {
    alert("Result container is missing in the HTML!");
    return;
  }

  // Collect answers safely
  const answers = ["q1", "q2", "q3", "q4", "q5"].map((q) => {
    const answer = quizForm[q]?.value;
    return answer || "unanswered";
  });

  // Check answers
  const correctAnswers = {
    q1: "correct",
    q2: "correct",
    q3: "correct",
    q4: "correct",
    q5: "correct",
  };

  let score = 0;
  answers.forEach((answer, index) => {
    if (answer === correctAnswers[`q${index + 1}`]) {
      score++;
    }
  });

  // Feedback based on score
  let feedback;

  if (score === 5) {
    feedback = "Excellent! You're an English pro.";
  } else if (score >= 3) {
    feedback = "Good job! Keep practicing to perfect your skills.";
  } else {
    feedback = "Don't worry! Practice makes perfect.";
  }

  // Display result
  result.textContent = `Your score is ${score}/5. ${feedback}`;

  // Clear the quiz after showing the result
  setTimeout(() => {
    quizForm.reset();
    result.textContent = "";
  }, 5000);
}

const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");
const menuIcons = document.querySelector(".menuIcons");

menuIcon.addEventListener("click", () => {
  nav.classList.add("nav-open");
  menuIcons.classList.add("nav-open");
});

closeIcon.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  menuIcons.classList.remove("nav-open");
});
