const body = document.querySelector('body');
const darkMode = document.getElementById('darkMode');
const nav = document.querySelector('nav');
const links = document.querySelectorAll('links');
const test816 = document.getElementById('test816');
const ham = document.getElementById('ham');


function dark() {
    console.log("darkmode");
    var circle = document.getElementById('circle');
    darkMode.classList.toggle('darkToggle');
    body.classList.toggle('bodyToggle');
    nav.classList.toggle('navToggle');
    darkMode.classList.toggle('bodyToggle');
}

window.addEventListener('scroll', fixNav);

function fixNav() {
    if(window.scrollY > nav.offsetHeight + 150) {
        nav.classList.add('active');
    } else {
        nav.classList.remove('active');
    }
}

var navShow = () =>{
    var ham1 = document.getElementById('ham1');
    var ham2 = document.getElementById('ham2');
    var ham3 = document.getElementById('ham3');
    console.log("check");
    test816.classList.toggle('linkToggle');
    ham1.classList.toggle('ham-lines1');
    ham2.classList.toggle('ham-lines2');
    ham3.classList.toggle('ham-lines3');
}


