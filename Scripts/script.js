// Projects information
let projects = [
    {
        id: 1,
        title: "BookWorm Web App",
        subtitle: "CRUD web application built using Node.js, Express.js, EJS and mongoDB.",
        imgSrc: "./Assets/Images/BookWorm-Logo.png",
        repoLink: "https://github.com/AryanK1511/Bookworm-Web-App"
    },

    {
        id: 2,
        title: "Sort Visualizer",
        subtitle: "Visualizer which allows user to observe the working of Bubble Sort, Insertion Sort and Selection Sort.",
        imgSrc: "./Assets/Images/Sort-Logo.png",
        repoLink: "https://github.com/AryanK1511/Sort-Visualizer"
    },

    {
        id: 3,
        title: "Portfolio Website",
        subtitle: "My very own portfolio website which contains my personal and contact information.",
        imgSrc: "./Assets/Images/Portfolio-Logo.png",
        repoLink: "https://github.com/AryanK1511/Personal-Portfolio-Website"
    }
]

// Fetching all the elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const errorNodes = document.querySelectorAll(".error");
const projectsDisplay = document.getElementById("projects-display");

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

// ========== Rendering projects dynamically ==========
projectsDisplay.innerHTML = "";
projects.forEach((project) => {
    console.log(project);
    projectsDisplay.innerHTML += `<div class="col-lg-6 col-xl-4 my-4">
        <div class="card h-100 mx-3">
            <img class="card-img-top mx-auto" src="${project.imgSrc}" alt="Project Image">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <h6 class="card-subtitle mb-2">${project.subtitle}</h6>
                <p class="card-text text-muted"><a href="${project.repoLink}" target="_blank"><i class="uil uil-github"></i></a></p>
            </div>
        </div>
    </div>`;
})

// ========== FORM VALIDATION ==========
let error = false;

function validateForm() {
    clearMessages();

    if (nameInput.value.length < 1) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        error = true;
    }

    if (!emailIsValid(email.value)) {
        errorNodes[1].innerText = "Invalid Email";
        emailInput.classList.add("error-border");
        error = true;
    }

    if (messageInput.value.length < 1) {
        errorNodes[2].innerText = "Please enter a message";
        messageInput.classList.add("error-border");
        error = true;
    }
}

// Clear error messages
function clearMessages() {
    error = false;
    for (let i = 0; i < errorNodes.length; i++) {
        errorNodes[i].innerText = "";
    }
    nameInput.classList.remove("error-border");
    emailInput.classList.remove("error-border");
    messageInput.classList.remove("error-border");
}

// Checks whether an entered email is valid
function emailIsValid(email) {
    let pattern = /\S+@\S+\.\S+/;
    return pattern.test(email);
}

document.getElementById("contact-form").onsubmit = function(e) {
    validateForm();
    if (!error) {
        return true;
    } else {
        e.preventDefault();
    }
}

// ========== Configuring typing animation ===========
var typed = new Typed(".auto-type", {
    strings: ['Software Developer.', 'Web Developer.', 'Computer Science Enthusiast.'],
    typeSpeed: 40,
    backSpeed: 50,
    loop: true,
    showCursor: false
});