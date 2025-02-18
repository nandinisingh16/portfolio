const words = ['Web Developer', 'Software Developer', 'Web Designer', 'Artist', 'Cybersecurity'];
let wordIndex = 0;
let charIndex = 0;
const typingText = document.querySelector('.typing-text span');

function type() {
  if (charIndex < words[wordIndex].length) {
    typingText.textContent += words[wordIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typingText.textContent = words[wordIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 500);
  }
}

document.addEventListener('DOMContentLoaded', type);

// Smooth scrolling for navigation links
document.querySelectorAll('.footer-nav a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault(); // Prevent the default anchor click behavior

    // Get the target section's ID from the href attribute
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Scroll to the target section smoothly
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start'      // Align to the top of the section
      });
    }
  });
});
const menuIcon = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

// Toggle navbar visibility on menu icon click
menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('active');
});


document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".form form");
  
  form.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent default form submission

      const name = document.querySelector("input[type='text']").value.trim();
      const email = document.querySelector("input[type='email']").value.trim();
      const message = document.querySelector("textarea").value.trim();

      if (name === "" || email === "" || message === "") {
          alert("Please fill in all fields before submitting.");
          return;
      }

      if (!validateEmail(email)) {
          alert("Please enter a valid email address.");
          return;
      }

      // Simulating a successful submission
      alert("Thank you, " + name + "! Your message has been sent successfully.");
      form.reset(); // Clear the form
  });

  // Email validation function
  function validateEmail(email) {
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return regex.test(email);
  }
});

