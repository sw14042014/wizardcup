

(() =>{
 
  const openNavMenu = document.querySelector(".open-nav-menu"),
  closeNavMenu = document.querySelector(".close-nav-menu"),
  navMenu = document.querySelector(".nav-menu"),
  menuOverlay = document.querySelector(".menu-overlay"),
  mediaSize = 991;

  openNavMenu.addEventListener("click", toggleNav);
  closeNavMenu.addEventListener("click", toggleNav);
  // close the navMenu by clicking outside
  menuOverlay.addEventListener("click", toggleNav);

  function toggleNav() {
  	navMenu.classList.toggle("open");
  	menuOverlay.classList.toggle("active");
  	document.body.classList.toggle("hidden-scrolling");
  }

  navMenu.addEventListener("click", (event) =>{
      if(event.target.hasAttribute("data-toggle") && 
      	window.innerWidth <= mediaSize){
      	// prevent default anchor click behavior
      	event.preventDefault();
      	const menuItemHasChildren = event.target.parentElement;
        // if menuItemHasChildren is already expanded, collapse it
        if(menuItemHasChildren.classList.contains("active")){
        	collapseSubMenu();
        }
        else{
          // collapse existing expanded menuItemHasChildren
          if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
          }
          // expand new menuItemHasChildren
          menuItemHasChildren.classList.add("active");
          const subMenu = menuItemHasChildren.querySelector(".sub-menu");
          subMenu.style.maxHeight = subMenu.scrollHeight + "px";
        }
      }
  });
  function collapseSubMenu(){
  	navMenu.querySelector(".menu-item-has-children.active .sub-menu")
  	.removeAttribute("style");
  	navMenu.querySelector(".menu-item-has-children.active")
  	.classList.remove("active");
  }
  function resizeFix(){
  	 // if navMenu is open ,close it
  	 if(navMenu.classList.contains("open")){
  	 	toggleNav();
  	 }
  	 // if menuItemHasChildren is expanded , collapse it
  	 if(navMenu.querySelector(".menu-item-has-children.active")){
        	collapseSubMenu();
     }
  }

  window.addEventListener("resize", function(){
     if(this.innerWidth > mediaSize){
     	resizeFix();
     }
  });

})();

(function() {
  for (var a = document.querySelectorAll(".youtube"), b = 0; b < a.length; b++) {
    var e = "https://img.youtube.com/vi/" + a[b].dataset.embed + "/maxresdefault.jpg", d = new Image;
    d.src = e;
    d.addEventListener("load", function() {
      a[b].appendChild(d);
    }(b));
    a[b].addEventListener("click", function() {
      var c = document.createElement("iframe");
      c.setAttribute("frameborder", "0");
      c.setAttribute("allowfullscreen", "");
      c.setAttribute("src", "https://www.youtube.com/embed/" + this.dataset.embed + "?rel=0&showinfo=0&autoplay=1");
      this.innerHTML = "";
      this.appendChild(c);
    });
  }
})();

$(window).scroll(function () {
    if ($(document).scrollTop() > 50) {
     $(".header").addClass("header2");
     console.log("OK");
    } else {
     $(".header").removeClass("header2");
    }
   });
   
$('.msg').replaceWith("<p><b>OPEN REGISTRATION!</b> THE DAY WE WERE ALL WAITING FOR ARRIVAL, GO TO OUR DISCORD SERVER AND REGISTER.</p>");

var cerraranuncio = anuncio => {
  document.getElementById(anuncio).style.display = "none";
}