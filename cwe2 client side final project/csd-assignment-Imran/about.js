// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", () => {
    const faqItems = document.querySelectorAll(".faq-item h3");
  
    faqItems.forEach((question) => {
      question.style.cursor = "pointer";
      question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
  
        if (answer.style.display === "block") {
          answer.style.display = "none";
        } else {
          answer.style.display = "block";
        }
      });
  
      // Initially hide all answers
      const answer = question.nextElementSibling;
      answer.style.display = "none";
    });
  });
  