const scrollTopButton = document.getElementById("scroll-top");
const menuIcon = document.getElementById("menu-icon");
const closeIcon = document.getElementById("close-icon");
const nav = document.querySelector("nav");
const menuIcons = document.querySelector(".menuIcons");

// Scroll event to show/hide scroll-top button
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    scrollTopButton.style.display = "block";
  } else {
    scrollTopButton.style.display = "none";
  }
});

// Function to handle screen resize
function handleResize() {
  if (window.innerWidth > 768) {
    menuIcon.style.display = "none"; // Hide menu-icon on larger screens
    closeIcon.style.display = "none"; // Ensure close-icon is also hidden
    nav.classList.remove("nav-open"); // Ensure nav is visible normally
    menuIcons.classList.remove("nav-open"); // Reset mobile menu styles
  } else {
    // Only show menu-icon if nav is closed (prevents unwanted reappearance)
    if (!nav.classList.contains("nav-open")) {
      menuIcon.style.display = "block";
    }
  }
}

// Listen for window resize
window.addEventListener("resize", handleResize);

// Run it once on page load
handleResize();
// Menu icon click event (opens nav)
menuIcon.addEventListener("click", () => {
  nav.classList.add("nav-open");
  menuIcons.classList.add("nav-open");

  // Toggle icons correctly
  menuIcon.style.display = "none";
  closeIcon.style.display = "block";
});

// Close icon click event (closes nav)
closeIcon.addEventListener("click", () => {
  nav.classList.remove("nav-open");
  menuIcons.classList.remove("nav-open");

  // Toggle icons correctly
  menuIcon.style.display = "block";
  closeIcon.style.display = "none";
});

// Scroll to top button click event
scrollTopButton.addEventListener("click", () => {
  if (window.innerWidth <= 768) {
    nav.classList.remove("nav-open"); // Close nav
    menuIcons.classList.remove("nav-open"); // Hide menu container

    // Reset icons properly
    menuIcon.style.display = "block";
    closeIcon.style.display = "none";
  }

  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});


// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // Close nav only on small screens
    if (window.innerWidth <= 768) {
      nav.classList.remove("nav-open");
      menuIcons.classList.remove("nav-open");

      // Reset icons properly
      menuIcon.style.display = "block";
      closeIcon.style.display = "none";
    }
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
