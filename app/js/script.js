const hamburgerMenu = document.querySelector("#hamburgerMenu");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");

hamburgerMenu.addEventListener("click", function(){
    console.log("open hamburger menu");

    if(header.classList.contains("open")){
        header.classList.remove("open");
        overlay.classList.add("fade-out");
        overlay.classList.remove("fade-in");

    }
    else{
        header.classList.add("open");
        overlay.classList.add("fade-in");
        overlay.classList.remove("fade-out");

    }

});