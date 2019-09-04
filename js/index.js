// Your code goes here

//Event One & Two: Using the mouseover and mouseleave event
const navLinks = document.querySelectorAll(".nav-link");

//Converting nodelist to array
const _navLinks = Array.from(navLinks);

_navLinks.forEach(navLink => {
  navLink.addEventListener("mouseover", () => {
    navLink.style.color = "pink";
  });

  navLink.addEventListener("mouseleave", () => {
    navLink.style.color = "#212529";
  });

  navLink.addEventListener("click", event => {
    event.preventDefault();
  });
});

//Event Three: Using the click event
const buttons = document.querySelectorAll(".btn");

const _buttons = Array.from(buttons);

_buttons.forEach(button => {
  button.addEventListener("click", () => {
    window.scrollTo({
      top: 100,
      left: 0,
      behavior: "smooth"
    });
  });
});

//Event Four: Using the resize event
const winHeight = window.innerHeight;
const winWidth = window.innerWidth;

const header = document.querySelector("header");

window.addEventListener("resize", () => {
  const winWidth = window.innerWidth;

  if (winWidth <= 500) {
    header.style.backgroundColor = "aqua";
  } else if (winWidth > 500 && winWidth < 801) {
    header.style.backgroundColor = "pink";
  } else {
    header.style.backgroundColor = "white";
  }
});

//Event Five: Using the dblclick event
const adventureButton = document.querySelector(".text-content button");

adventureButton.addEventListener("dblclick", event => {
  alert(`The button clicked says: ${event.target.textContent}`);
});

//Event Six: Using the scroll event
const scrollButton = document.querySelector("#scroll-button");

window.addEventListener("scroll", () => {
  const winScroll = window.scrollY;

  if (winScroll > 300) {
    scrollButton.style.visibility = "visible";
  } else {
    scrollButton.style.visibility = "hidden";
  }

  scrollButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  });
});

//Event Seven & Eight: Using the focus and blur event

_buttons.forEach(button => {
  button.addEventListener("focus", () => {
    button.style.background = "tomato";
  });

  button.addEventListener("blur", () => {
    button.style.background = "";
  });
});

//Event Nine: Using the change event
const input = document.querySelector(".search input");
const search = document.querySelector(".search");
const showButton = document.querySelector("#show");

showButton.addEventListener("click", () => {
  search.style.visibility = "visible";
  showButton.style.visibility = "hidden";
});

const heading = document.querySelector("header h2");

input.addEventListener("change", event => {
  heading.textContent = event.target.value;
});

//Event Ten & Eleven: keydown event & preventDefault
input.addEventListener("keydown", event => {
  // prevent keys 0 to 9
  if (event.key >= 0 && event.key <= 9) {
    event.preventDefault();
  }

  heading.textContent = event.target.value;
});

// Stop propagation

const searchBtn = document.querySelector(".search button");

searchBtn.addEventListener("click", event => {
  event.stopPropagation();
});

search.addEventListener("click", event => {
  console.log("clicked");
});
