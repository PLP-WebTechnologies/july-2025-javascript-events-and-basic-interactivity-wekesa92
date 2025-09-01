/********************
 * Part 2A: Light/Dark Mode Toggle
 ********************/
const toggleThemeBtn = document.getElementById("toggle-theme");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode"); // Switch background & text color
});

/********************
 * Part 2B: Counter Game
 ********************/
let counter = 0;
const counterDisplay = document.getElementById("counter");

document.getElementById("increase").addEventListener("click", () => {
  counter++;
  counterDisplay.textContent = counter;
});

document.getElementById("decrease").addEventListener("click", () => {
  counter--;
  counterDisplay.textContent = counter;
});

document.getElementById("reset").addEventListener("click", () => {
  counter = 0;
  counterDisplay.textContent = counter;
});

/********************
 * Part 2C: Collapsible FAQ
 ********************/
const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling;
    answer.style.display =
      answer.style.display === "block" ? "none" : "block"; // Toggle visibility
  });
});

/********************
 * Part 2D: Dropdown Menu
 ********************/
const dropdownBtn = document.querySelector(".dropdown-btn");
const dropdown = document.querySelector(".dropdown");

dropdownBtn.addEventListener("click", () => {
  dropdown.classList.toggle("show"); // Show/Hide dropdown
});

/********************
 * Part 2E: Tabbed Interface
 ********************/
const tabButtons = document.querySelectorAll(".tab-btn");
const tabContents = document.querySelectorAll(".tab-content");

tabButtons.forEach((button) => {
  button.addEventListener("click", () => {
    // Remove active class from all
    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabContents.forEach((content) => content.classList.remove("active"));

    // Add active class to clicked button
    button.classList.add("active");

    // Show related content
    const tabId = button.getAttribute("data-tab");
    document.getElementById(tabId).classList.add("active");
  });
});

/********************
 * Part 3: Form Validation
 ********************/
const form = document.getElementById("signup-form");
const formMessages = document.getElementById("form-messages");

form.addEventListener("submit", (event) => {
  event.preventDefault(); // Stop form from submitting automatically

  // Collect input values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  let errors = [];

  // Name validation
  if (name.length < 2) {
    errors.push("Name must be at least 2 characters.");
  }

  // Email validation using regex
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    errors.push("Enter a valid email address.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Display messages
  if (errors.length > 0) {
    formMessages.textContent = errors.join(" ");
    formMessages.style.color = "red";
  } else {
    formMessages.textContent = "Form submitted successfully! 🎉";
    formMessages.style.color = "green";
    form.reset(); // clear fields after success
  }
});

