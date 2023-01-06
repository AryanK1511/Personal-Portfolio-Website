// Fetching all the elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");

// ========== Configuring about page tabs section ==========
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;

  if (id) {

    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });

    e.target.classList.add("active");

    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});

// ========== Configuring typing animation ===========
var typed = new Typed(".auto-type", {
    strings: ['Software Developer.', 'Web Developer.', 'Computer Science Enthusiast.'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    showCursor: false
});