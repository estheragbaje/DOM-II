// Your code goes here
const navLinks = document.querySelectorAll(".nav-link");
const navigation = document.querySelector(".nav");

const _navLinks = Array.from(navLinks);

_navLinks.forEach(navLink => {
  navLink.addEventListener("mouseover", () => {
    navLink.style.color = "#17A2B8";
  });

  navLink.addEventListener("mouseleave", () => {
    navLink.style.color = "#212529";
  });
});

// navigation.addEventListener("click", () => {
//   navigation.style.color = "red";
// });

// //Styling for the image
// const headerImage = document.querySelector(".img-content img");
// headerImage.addEventListener("mouseOverListener" () => {
//     ImageHoverTooltips.displayTooltip(this);
// })

// headerImage.addEventListener("mouseOverListener" () => {
//     ImageHoverTooltips.hideTooltip(this);
// })