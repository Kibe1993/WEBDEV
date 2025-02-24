document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const menuLinks = document.querySelector(".menu-links");

  burger.addEventListener("click", () => {
    menuLinks.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    if (!menuLinks.contains(event.target) && !burger.contains(event.target)) {
      menuLinks.classList.remove("active");
    }
  });
});

const links = document.querySelectorAll('.tab-link');

function activeLink(event){
for (let link of links){
  link.classList.remove('active-link')
  event.currentTarget,classList.add('active-link')
}
}




document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".card-1 h3");

  headings[0].classList.add("active");

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {

      headings.forEach((h) => h.classList.remove("active"));
      this.classList.add("active");
    });
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const headings = document.querySelectorAll(".card-1 h3");

  headings.forEach((heading) => {
    heading.addEventListener("click", function () {
      document.querySelectorAll(".card-content").forEach((content) => {
        content.classList.remove("active-card");
      });
      const content = this.nextElementSibling;
      if (content && content.classList.contains("card-content")) {
        content.classList.add("active-card");
      }
    });
  });
});





