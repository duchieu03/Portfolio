const navMenu= document.getElementById('nav-menu'),
      navToggle= document.getElementById('nav-toggle'),
      navClose=document.getElementById('nav-close');


if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu');
    })
}

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu');
    })
}


// Remove Menu Moblie
const navLink= document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n=>n.addEventListener('click',linkAction));

// ================================ ACCORDION SKILLS ===============================
const skillsContent=document.getElementsByClassName('skills__content'),
        skillsHeader=document.querySelectorAll('.skills__header');
        
function toggleSkills(){
    let itemClass= this.parentNode;
    if(itemClass.className==='skills__content skills__open'){
        itemClass.className='skills__content skills__close';
    }
    else{
        for(i=0 ;i<skillsContent.length;i++){
            skillsContent[i].className='skills__content skills__close';
        }
        if(itemClass.className==='skills__content skills__close'){
            this.parentNode.className='skills__content skills__open'
        }
    }
        
}

skillsHeader.forEach((el)=>{
    el.addEventListener('click',toggleSkills);
})

// ======================= Toggle Qualification ==================
const qualifcationContent = document.querySelectorAll('.qualification__content'),
        qualifcationButton= document.querySelectorAll('.qualification__button');

qualifcationButton.forEach((el)=>{
    el.addEventListener('click',toggleQualification);
})

function toggleQualification(){
    qualifcationContent.forEach((el)=>{
        el.classList.remove('qualification__open');
    })
    
    if(this===document.getElementById('education__button')){
        document.getElementById('education').classList.add('qualification__open')
    } else{
        document.getElementById('work').classList.add('qualification__open')
    }
}

// ======================== SERVICE MODAL ================
const modalViews= document.querySelectorAll('.services__modal'),
    modalBtns=document.querySelectorAll('.services__button'),
    modalCloses= document.querySelectorAll('.services__modal-close');

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn,i)=>{
    modalBtn.addEventListener('click',()=>{
        modal(i);
    })
})

modalCloses.forEach((modalClose,i)=>{
    modalClose.addEventListener('click',()=>{
        modalViews[i].classList.remove('active-modal');
    })
})

// =================== SCROLL========================

const sections= document.querySelectorAll('section[id]');

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight= current.offsetHeight;
        const sectionTop = current.offsetTop ;
        let sectionId= current.getAttribute('id');
        if(scrollY > sectionTop && scrollY <=sectionTop + sectionHeight){
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}   
window.addEventListener('scroll',scrollActive)

//====================== CHANGE BACKGROUND HEADER ==================
function scrollHeader(){
    const nav=document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 200) nav.classList.add('scroll-header');
    else nav.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader);

// ====================== SHOW SCROLL TOP ======================
function scrollTop(){
    const scrollTop = document.getElementById('scrollup');
    if(this.scrollY >= 560) scrollTop.classList.add('show-scroll');
    else scrollTop.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollTop);


// =========================== DARK LIGHT THEME ==================
const themeButton = document.getElementById('themes-button');
const darkTheme = 'dark-theme';
const iconTheme = 'uil-sun';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme');
const selectedIcon = localStorage.getItem('selected-icon');

//We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = ()=> document.body.classList.contains(darkTheme) ? 'dark' : 'light';
const getCurrentIcon = ()=> themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun';


//We validate if the user previously chose a topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-sun' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually with the button
themeButton.addEventListener('click',()=>{
    //add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    // save theme and the current icon
    localStorage.setItem('selected-theme', getCurrentTheme());
    localStorage.setItem('selected-icon', getCurrentIcon())
})