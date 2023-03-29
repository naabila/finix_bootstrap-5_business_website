
jQuery(document).ready(function () {
    //wow js
    new WOW().init();
	//hamburger
    $('.hamburger').click(()=>
    $('.hamburger').toggleClass('is-active') )

    
});
//sticky nav
window.addEventListener('scroll',function(){
    var header=this.document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY >200);
})




