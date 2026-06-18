// ================= CONTACT FORM =================

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});


// ================= NAVBAR ACTIVE =================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop;

    if(pageYOffset >= sectionTop - 200){

      current = section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href").includes(current)){

      link.classList.add("active");

    }

  });

});