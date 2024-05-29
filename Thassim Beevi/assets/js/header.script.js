// HEADER SCRIPT
const bigDropDownButton = document.querySelectorAll(
  "[data-dropdown = 'big_button']"
);
const bigDropDownContent = document.querySelectorAll(
  "[data-dropdown = 'big_content']"
);
const smallDropDownButton = document.querySelectorAll(
  "[data-dropdown = 'small_button']"
);
const smallDropDownContent = document.querySelectorAll(
  "[data-dropdown = 'small_content']"
);

// DROPDOWN FUCNTION
function dropDown(button, content) {
  for (let i = 0; i < button.length; i++) {
    button[i].addEventListener("click", () => {
      if (content[i].classList.contains("active")) {
        // Close the clicked dropdown
        content[i].classList.remove("active");
        if (window.innerWidth <= 992) {
          button[i].childNodes[3].classList.remove("fa-minus");
          button[i].childNodes[3].classList.add("fa-plus");
        } else {
          button[i].childNodes[3].classList.remove("fa-chevron-up");
          button[i].childNodes[3].classList.add("fa-chevron-down");
        }
      } else {
        // Close all other dropdowns
        for (let j = 0; j < content.length; j++) {
          if (j !== i) {
            content[j].classList.remove("active");
            if (window.innerWidth <= 992) {
              button[j].childNodes[3].classList.remove("fa-minus");
              button[j].childNodes[3].classList.add("fa-plus");
            } else {
              button[j].childNodes[3].classList.remove("fa-chevron-up");
              button[j].childNodes[3].classList.add("fa-chevron-down");
            }
          }
        }
        // Open the clicked dropdown
        content[i].classList.add("active");
        if (window.innerWidth <= 992) {
          button[i].childNodes[3].classList.remove("fa-plus");
          button[i].childNodes[3].classList.add("fa-minus");
        } else {
          button[i].childNodes[3].classList.remove("fa-chevron-down");
          button[i].childNodes[3].classList.add("fa-chevron-up");
        }
      }
    });
  }
}

// HAMBURGER DROPDOWN
const menuOpenButton = document.querySelector(".header_icon__hamburger");
const menuCloseButton = document.querySelector(".header_icon__hamCancel");
const menuContent = document.querySelector(".header_navBar");

function hamburgerDropDown(openButton, closeButton, content) {
  openButton.addEventListener("click", () => {
    content.classList.add("active");
    closeButton.classList.add("active");
  });

  closeButton.addEventListener("click", () => {
    content.classList.remove("active");
    closeButton.classList.remove("active");
  });
}

// FUNCTION CALLS.
hamburgerDropDown(menuOpenButton, menuCloseButton, menuContent);
dropDown(bigDropDownButton, bigDropDownContent);
dropDown(smallDropDownButton, smallDropDownContent);

// MAKE THE HEADER STICKY FUNCTION
window.onscroll = function () {
  headerSticky(".header_bottom");
  headerSticky(".headerD_bottom");
};

function headerSticky(ele) {
  var header = document.querySelector(ele);
  var sticky = header.offsetTop;

  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
