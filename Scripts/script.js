// Projects information
let projects = [
    {
        id: 1,
        title: "BookWorm Web App",
        subtitle: "BookWorm is a CRUD web application that is created with the aim of developing a reading habit in people. This application helps you to search any book that you want and add it to your reading list. Implemented OAuth using local and google auth strategies by incorporating passport.js in the project. Hosted Website using Heroku",
        imgSrc: "./Assets/Images/BookWorm-Logo.png",
        repoLink: "https://github.com/AryanK1511/Bookworm-Web-App",
        techStack: ["EJS", "CSS3", "JavaScript", "Express.js", "Node.js", "MongoDB"]
    },

    {
        id: 2,
        title: "Seneca Library Application",
        subtitle: "When Books and other publications arrive in the Seneca library, they should be tagged and put on shelves, so they are easily retrievable to be lent out to those who need them. I designed an application that receives the publications and stores them into the system with the information needed for their retrieval. Later, each publication can be lent out to members of the library with a due date for return.",
        imgSrc: "./Assets/Images/Library-Logo.jpeg",
        repoLink: "https://github.com/AryanK1511/Seneca-college-OOP244-Workshops-and-Labs/tree/main/Final_Project",
        techStack: ["Object Oriented Programming using C++"]
    },

    {
        id: 3,
        title: "Assembly Line Simulation",
        subtitle: "The assembly line simulation has workstations holding specific stock items. A line manager moves customer orders along the line filling the orders at each station. If a station is out of stock, the order cannot be filled. The simulator displays the completed and incomplete orders at the end.",
        imgSrc: "./Assets/Images/AssemblyLine-Logo.jpeg",
        repoLink: "https://github.com/AryanK1511/Seneca-college-OOP345-Workshops-and-Labs/tree/main/Final_Project",
        techStack: ["Object Oriented Programming using C++"]
    },

    {
        id: 4,
        title: "Online Banking Application Database",
        subtitle: "A project consisting of an Online Banking System Database that uses C++ to create a menu application that allows the user to call several PL/SQL procedures to generate business reports as per their choice.",
        imgSrc: "./Assets/Images/OnlineBanking-Logo.jpeg",
        repoLink: "https://github.com/AryanK1511/DBS311-Final-Project",
        techStack: ["Oracle SQL", "PL / SQL", "C++"]
    },

    {
        id: 5,
        title: "Discord Database Clone",
        subtitle: "In this project, I have designed and created a database for ‘Discord’ in order to learn database design, development and implementation.",
        imgSrc: "./Assets/Images/Database-Logo.jpeg",
        repoLink: "https://github.com/AryanK1511/DBS211-Final-Project",
        techStack: ["Oracle SQL"]
    },

    {
        id: 6,
        title: "Blog Web App",
        subtitle: "In this Application, users have the ability to create and account and publish blogs",
        imgSrc: "./Assets/Images/Blog-Logo.jpeg",
        repoLink: "https://github.com/AryanK1511/WEB322-App",
        techStack: ["CSS, JavaScript, Node.js, Express.js, MongoDB, PostgreSQL, Handlebars.js"]
    },

    {
        id: 7,
        title: "Sort Visualizer",
        subtitle: "Visualizer which allows user to observe the working of Bubble Sort, Insertion Sort and Selection Sort.",
        imgSrc: "./Assets/Images/Sort-Logo.png",
        repoLink: "https://github.com/AryanK1511/Sort-Visualizer",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6)"]
    },

    {
        id: 8,
        title: "Portfolio Website",
        subtitle: "My very own portfolio website which contains my personal and contact information.",
        imgSrc: "./Assets/Images/Portfolio-Logo.png",
        repoLink: "https://github.com/AryanK1511/Personal-Portfolio-Website",
        techStack: ["HTML5", "CSS3", "JavaScript (ES6)"]
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
    projectsDisplay.innerHTML += `<div class="col-lg-6 col-xl-4 my-4">
        <div class="card h-100 mx-3" data-aos="zoom-in" data-aos-offset="200" data-aos-delay="50" data-aos-duration="1000">
            <img class="card-img-top mx-auto" src="${project.imgSrc}" alt="Project Image">
            <div class="card-body">
                <h5 class="card-title">${project.title}</h5>
                <h6 class="card-subtitle mb-2">${project.subtitle}</h6>
                <h6 class="card-subtitle tech-stack mb-2">Tech Stack and Concepts Used: </h6><h6 class="card-subtitle tech-stack-content mb-2">${project.techStack.map(x => `<span>${x}</span>`).join(", ")}</h6>
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