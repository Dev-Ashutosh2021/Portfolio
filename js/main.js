// Header Scroll
let nav=document.querySelector(".navbar");
window.onscroll=function(){
    if(document.documentElement.scrollTop>20)
    {
        nav.classList.add("header-scrolled");
    }
    else{
        nav.classList.remove("header-scrolled") ;
    }   
}

// Nav Hide
let navBar=document.querySelectorAll(".nav-link");
let navCollapse=document.querySelector(".navbar-collapse.collapse");
navBar.forEach(function (a){
    a.addEventListener('click', function (){
        navCollapse.classList.remove("show");
    })
})

//Preloading Animation
var myVar;

function myFunction() {
  myVar = setTimeout(showPage, 2000);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}

//Animation
const observer=new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    if(entry.isIntersecting)
    {
      document.getElementById('about-logo').style.visibility="visible";
      entry.target.classList.add("animate__animated","animate__fadeInLeft","animate__delay-1s");
    }
  });
});

const hiddenElements=document.querySelectorAll('.hidden');
hiddenElements.forEach((el)=> observer.observe(el));



const observe=new IntersectionObserver((enter)=>{
  enter.forEach((entry)=>{
    if(entry.isIntersecting)
    {
      entry.target.classList.add("animate__animated","animate__fadeIn","animate__delay-1s");
    }
  });
});

const hiddenElement=document.querySelectorAll('.hide');
hiddenElement.forEach((el)=> observe.observe(el));