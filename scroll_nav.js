window.addEventListener("scroll",function(){
    var navbar = this.document.querySelector("nav");
    navbar.classList.toggle("sticky-nav", window.scrollY > 200);
})