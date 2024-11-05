
var typed = new Typed('#element', {
    strings: ['<i>Your vision, our passion. Partnering for design excellence.</i>'],
    typeSpeed: 50,
    loop: true
});


// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// CONTACT BTN
const btnContact = document.querySelector("#page-btn2 .btn-modal");
        //console.log(btnModal);
        btnContact.addEventListener("click", openModal);

        //declaramos funcion open modal
        function openModal() {
            const modalWindow = document.querySelector("#modalWindow");
            modalWindow.classList.add("show-modal");

        }

        const btn_closeModal = document.querySelector("#modalWindow .close");
        btn_closeModal.addEventListener("click", closeModal);

        function closeModal() {
            const modalWindow = document.querySelector("#modalWindow");
            modalWindow.classList.remove("show-modal");
        }

    // El objeto window hace referenci a toda la ventana de la web
        window.addEventListener("click", function(event){
            console.log("u clicked");
            const modalWindow = document.querySelector("#modalWindow");
            const condition = event.target === modalWindow;

            if (condition) {
                closeModal()
            }

        });

// LOCOMOTIVE SCROLL
const body = document.body;
const backToTop = document.querySelector(".back-to-top");
const opacityClass = "opacity-0";
const visibilityClass = "invisible";

const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true }
});

const arrayOfColors = [
  "#0a9396",
  "#005f73",
  "#ae2012",
  "#3d405b",
  "#003049",
  "#bc6c25",
  "#ff006e",
  "#ef476f",
  "#1982c4",
  "#ee964b",
  "#0ead69",
  "#390099",
  "#f6aa1c",
  "#54101d",
  "#2b2c28",
  "#85c7f2",
  "#e15a97",
  "#2b70e3",
  "#b36a5e"
];

function getRandomColor() {
  const arrayLength = arrayOfColors.length;
  const randomValue = Math.random() * arrayLength;
  const roundedNumber = Math.floor(randomValue);
  const color = arrayOfColors[roundedNumber];
  return color;
}

scroll.on("call", (value, way, obj) => {
  if (value === "randomizeTextColor") {
    if (way === "enter") {
      obj.el.style.color = getRandomColor();
    }
  } else if (value === "toggleBackToTop") {
    if (way === "enter") {
      backToTop.classList.add(opacityClass, visibilityClass);
    } else {
      backToTop.classList.remove(opacityClass, visibilityClass);
    }
  }
});

scroll.on("scroll", (instance) => {
  const visibleSubSectionHeading = document.querySelector(
    ".sub-section h2.is-inview"
  );

  if (visibleSubSectionHeading) {
    const parentSection = visibleSubSectionHeading.parentElement.parentElement;
    body.style.backgroundColor = parentSection.dataset.bgColor;
  } else {
    body.style.backgroundColor = "";
  }
});

  