// Fetching all the elements
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");
const success = document.querySelector("#success");
const errorNodes = document.querySelectorAll(".error");

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

// Clear error and success messages
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