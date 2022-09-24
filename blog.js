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
  
  // blog post pop ups
  const modal = document.querySelector("#modal");
  const openModal = document.querySelector(".open-button");
  const closeModal = document.querySelector(".close-button");
  
  openModal.addEventListener("click", () => {
    modal.showModal();
  });
  
//   closeModal.addEventListener("click", () => {
//     modal.close();
//   });
  
  // Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// smooth scroll into view on load
document.getElementById("navbar").scrollIntoView();
window.SmoothScrollOptions = { behavior: "smooth", animationTime: 1000 };