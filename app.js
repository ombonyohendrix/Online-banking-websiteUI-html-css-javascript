const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click',()=>{
        nav.classList.toggle('nav-active');
         //Animate links
 navLinks.forEach((link, index) => {
 if(link.sytle.animation){
     link.sytle.animation = '';
 }
 else{
     link.style.animation = 'navLinkFade 0.5s ease forwards $(index/7 + 0.3s)s';
     
 }
   
});
//burger animation
    burger.classList.toggle('toggle');
    });
    }
navSlide();