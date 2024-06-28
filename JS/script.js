window.addEventListener("scroll", function(){
var header = document.querySelector("header")
var scrollTop = document.documentElement.scrollTop;

if (scrollTop > 100){
    header.classList.add("visible")
}
else{
    header.classList.remove("visible")
}
});