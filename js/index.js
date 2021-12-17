var mySlide = document.querySelector("#mySlide");
var carousel = new bootstrap.Carousel(mySlide, {
    interval: 3000,
});

window.onscroll = function() {
    if(window.scrollY >= 400) {
        document.querySelector("#up").style.opacity = "1";
    } else {
        document.querySelector("#up").style.opacity = "0";

    }
}

document.querySelector("#up").addEventListener("click", function() {
    window.scrollTo(0,0);
});