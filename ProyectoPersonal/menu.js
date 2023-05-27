document.addEventListener("DOMContentLoaded", function() {
    var currentUrl = window.location.href;
    var navbarLinks = document.querySelectorAll("#navbar-reciclado .nav-link");
    console.log("Hola");
    for (var i = 0; i < navbarLinks.length; i++) {
      var link = navbarLinks[i];
      var linkUrl = link.href;
  
      if (currentUrl === linkUrl) {
        link.classList.add("active");
        break;
      }
    }
  });
  
  
  