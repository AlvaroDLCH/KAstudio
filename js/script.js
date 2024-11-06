
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

document.addEventListener("click", topFunction);

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

// Custom cursor

var cursor = document.querySelector('.cursor');
var cursorinner = document.querySelector('.cursor2');
var a = document.querySelectorAll('a');

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
});

document.addEventListener('mousemove', function(e){
  var x = e.clientX;
  var y = e.clientY;
  cursorinner.style.left = x + 'px';
  cursorinner.style.top = y + 'px';
});

document.addEventListener('mousedown', function(){
  cursor.classList.add('click');
  cursorinner.classList.add('cursorinnerhover')
});

document.addEventListener('mouseup', function(){
  cursor.classList.remove('click')
  cursorinner.classList.remove('cursorinnerhover')
});

a.forEach(item => {
  item.addEventListener('mouseover', () => {
    cursor.classList.add('hover');
  });
  item.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
  });
})