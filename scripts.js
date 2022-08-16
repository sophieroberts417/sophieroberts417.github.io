document.getElementById("body").onscroll = function myFunction() {
    var scrolltotop = document.scrollingElement.scrollTop;
    var target = document.getElementById("top-section");
    var xvalue = "center";
    var factor = 0.5;
    var yvalue = scrolltotop * factor;
    target.style.backgroundPosition = xvalue + " " + yvalue + "px";
  };
  
  // navbar sticky show
  
  document.addEventListener("scroll", function () {
    const navbarSticky = document.getElementById("navbar-sticky");
    if (window.pageYOffset > 610) {
      navbarSticky.classList.add("show");
    }
    if (window.pageYOffset < 610) {
      navbarSticky.classList.remove("show");
    }
  });
  
  // back to top button
  document.addEventListener("scroll", function () {
    const myBtn = document.getElementById("my-btn");
    if (window.pageYOffset > 1300) {
      myBtn.classList.add("show");
    }
    if (window.pageYOffset < 1300) {
      myBtn.classList.remove("show");
    }
  });
  
  // When the user clicks on the button, scroll to the top of the document
  function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }
  