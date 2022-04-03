const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");

function PageTransitons() {
  // Button click active class
  sectBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const currBtn = e.target;
      let currentBtn = document.querySelector(".active-btn");
      currentBtn.classList.remove("active-btn");
      currBtn.classList.add("active-btn");
    });
  });
}

allSections.addEventListener("click", (e) => {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    sectBtns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");

    // hide other buttons
    sections.forEach((section) => {
      section.classList.remove("active");
    });

    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

PageTransitons();
