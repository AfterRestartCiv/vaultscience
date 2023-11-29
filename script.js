$(document).ready(function () {
    var open_btn = $(".menu_btn");
    var close_btn = $(".close_btn");
  
    var panels = $(".panel");
    var links = $(".litem");
    var lines = $(".line");
    var data_content = $(".data__content");
    var data_sub = $(".data__sub");
    var footer = $(".footer");
  
    var tl = new TimelineLite({ paused: true });
  
    tl.to(panels, 0.5, { width: "50%" })
      .to(
        open_btn,
        0.5,
        { opacity: 0, visibility: "hidden", "z-index": 0 },
        "-=0.5"
      )
      .to(data_content, 0.5, { y: 0, opacity: 1 })
      .to(data_sub, 0.5, { y: 0, opacity: 1 }, "-=0.25")
      .staggerTo(links, 0.3, { y: 0 }, 0.05, "-=0.75")
      .to(lines, 0.5, { opacity: 1 })
      .to(footer, 0.5, { opacity: 1 }, "-=0.5");
  
    open_btn.on("click", function (e) {
      e.preventDefault();
      tl.play();
    });
  
    close_btn.on("click", function (e) {
      e.preventDefault();
      tl.reverse();
    });
  });
  
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
} 