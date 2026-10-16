document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.getElementById("nav-menu");

  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => {
      const isVisible = window.getComputedStyle(navMenu).display === "block";
      navMenu.style.display = isVisible ? "none" : "block";
    });
  }

  // Αυτόματη επιλογή πακέτου στη φόρμα
  const planButtons = document.querySelectorAll(".choose-plan-btn");
  const packageSelect = document.getElementById("selected-package");
  const contactSection = document.getElementById("contact");

  planButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const chosenPlan = e.target.getAttribute("data-plan");
      if (packageSelect && chosenPlan) {
        packageSelect.value = chosenPlan;
      }
      contactSection.scrollIntoView({ behavior: "smooth" });
    });
  });

  // Διαχείριση υποβολής φόρμας
  const orderForm = document.getElementById("order-form");
  if (orderForm) {
    orderForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const company = document.getElementById("company-name").value;
      const pack = packageSelect.value;

      alert(
        `Ευχαριστούμε! Το αίτημα για την επιχείρηση "${company}" με το πακέτο "${pack}" καταχωρήθηκε επιτυχώς.`,
      );
      orderForm.reset();
    });
  }
});
