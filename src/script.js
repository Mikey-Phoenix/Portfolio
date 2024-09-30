
/// PRELOADER ///
const loadBalls = document.querySelector(".loadContainer");
setInterval(() => {
    let first = document.querySelector('#first');
    first.style.animationName = "ballFirst";
    setTimeout(() => {
        let second = document.querySelector('#second');
        second.style.animationName = "ballSecond";
        setTimeout(() => {
            let third = document.querySelector('#third');
            third.style.animationName = "ballThird";
            setTimeout(() => {
                let fourth = document.querySelector('#fourth');
                fourth.style.animationName = "ballFourth";
            }, 250);
        }, 250);
    }, 250);
    
}, 1000);
window.addEventListener("load", ()=>{
    setTimeout(() => {
        loadBalls.style.backgroundColor = "rgb(128, 25, 50, 0)";
        setTimeout(() => {
            loadBalls.style.opacity = "0";
            setTimeout(() => {
                loadBalls.style.display = "none";
            }, 500);
        }, 1000);
    }, 4000);
    
});


/// DECLARATIONS ///
const cursorDot = document.querySelector("[data-cursor-dot]");
const cursorOutline = document.querySelector("[data-cursor-outline]");

const nav = document.querySelector("nav");
const navlinks = Array.from(document.querySelectorAll("nav a"));
const mobileNav = document.querySelector(".mobile .active");
const mobileNavCont = document.querySelector(".mobile .mobileHidden");
const mobileNavLinks = Array.from(document.querySelectorAll(".mobile .mobileHidden a"));;

const lists = Array.from(document.querySelectorAll('a'));

const sections = Array.from(document.querySelectorAll(".sect"));

const heading = document.querySelector("section .words");
const hello = document.querySelector("#hello");
const achievements = document.querySelector("main .white div");
const projSect = document.querySelector('#projects');
const projBig = document.querySelector('#projects .bigCont .big');
const projBalls = Array.from(document.querySelectorAll('#projects .ballcheck div'));
const projImg = Array.from(document.querySelectorAll('#projects .bigCont .bigProj .image'));
const projects = Array.from(document.querySelectorAll("main #projects .bigCont .big .card"));

const hiddenElementsEdu = document.querySelectorAll('main div.edu .eduContainer .hidden');
const hiddenElementsProj = document.querySelectorAll('main .big.hidden');
const hiddenElementsBigProj = document.querySelectorAll('main .bigCont .bigProj');
const hiddenElementsAchieve = document.querySelectorAll('main .white .textHidden');
const hiddenElementsHead = document.querySelectorAll('main .white .headHidden');
const hiddenElementsLine = document.querySelectorAll('main h2 span.hidden');

let touchstartx = 0;
let touchendx = 0;


/// PROGRESS BAR ///
function updateProgressBar() {
    const {scrollTop, scrollHeight} = document.documentElement;
    const scrollPercent = `${(scrollTop / (scrollHeight - window.innerHeight)) * 100}%`;
    document.querySelector('#progress').style.setProperty('--progress', scrollPercent)
}

document.addEventListener('scroll', updateProgressBar);


/// LOAD IN ANIMATIONS ///
const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

hiddenElementsEdu.forEach((el) => observer.observe(el));
hiddenElementsProj.forEach((el) => observer.observe(el));
hiddenElementsBigProj.forEach((el) => observer.observe(el));
hiddenElementsAchieve.forEach((el) => observer.observe(el));
hiddenElementsHead.forEach((el) => observer.observe(el));
hiddenElementsLine.forEach((el) => observer.observe(el));


/// CURSER FUNCTION ///
window.addEventListener("mousemove", function (e) {

    const posX = e.clientX;
    const posY = e.clientY;

    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;


    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" })

});
lists.forEach(list => {
    
    list.addEventListener('mouseover', ()=>{
        cursorOutline.animate({
            width: "50px",
            height: "50px"
        }, { duration: 300, fill: "forwards" })
    });
    list.addEventListener('mouseout', ()=>{
        cursorOutline.animate({
            width: "30px",
            height: "30px"
        }, { duration: 300, fill: "forwards" })
    });
});
window.addEventListener("mousedown", ()=>{
    cursorOutline.animate({
        width: "7px",
        height: "7px"
    }, { duration: 100, fill: "forwards" })
});
window.addEventListener("mouseup", ()=>{
    cursorOutline.animate({
        width: "40px",
        height: "40px"
    }, { duration: 100, fill: "forwards" })
    setTimeout(() => {
        cursorOutline.animate({
            width: "30px",
            height: "30px"
        }, { duration: 300, fill: "forwards" })
    }, 100);
});
function isTouch() {
    return /Android|iPhone|iPad/i.test(navigator.userAgent);
    // return navigator.maxTouchPoints > 0;
}
if (isTouch() == true) {
    cursorDot.style.display = 'none';
    cursorOutline.style.display = 'none';
}


/// NAVBAR FUNCTIONS ///
window.onscroll = ()=>{

    mobileNav.children[0].style.color = 'white';
    if (window.scrollY > (window.innerHeight/2) ) {
        nav.style.left = "0%";
    } else {
        nav.style.left = "-100%";
    }

        var height = document.body.scrollHeight;

    if (navlinks[4].id == "contpx") {
        navlinks[4].addEventListener('click', ()=>{
            window.scroll(0, height)
        })
    }

    sections.forEach(sec =>{     
           
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let id = sec.getAttribute('id');
        
        if (window.scrollY >= (height - window.innerHeight)) {
            navlinks.forEach(link => {
                link.classList.remove('active');
                link.children[0].style.color = 'rgb(177, 46, 79)';
                link.children[1].style.color = 'white';
            });
            navlinks[5].classList.add('active');
            navlinks[5].children[0].style.color = 'white';
            navlinks[5].children[1].style.color = 'rgb(177, 46, 79)';
        } else if (top >= offset) {
            
            navlinks.forEach(hype =>{
                hype.classList.remove('active');
                navlinks.forEach(link =>{
                    let http = link.getAttribute('href');
                    if (http == `#${id}`) {
                        mobileNavLinks.forEach(li =>{
                            li.classList.remove('active')
                            if (li.getAttribute('href') == http) {
                                mobileNav.innerHTML = li.innerHTML;
                                mobileNav.children[0].style.color = "white";
                                mobileNav.style.backgroundColor = "rgb(177, 46, 79)";
                                li.classList.add('active');
                            } else {
                                li.children[0].style.color = 'rgb(177, 46, 79)';
                                li.children[1].style.color = 'rgb(177, 46, 79)';
                            }
                        })
                        link.classList.add('active');
                        link.children[0].style.color = 'white';
                        link.children[1].style.color = 'rgb(177, 46, 79)';
                    } else {
                        link.children[0].style.color = 'rgb(177, 46, 79)';
                        link.children[1].style.color = 'white';
                    }                  
                });
            });

            
        };
    });
    
};
navlinks.forEach(link => {
    link.addEventListener('mouseover', ()=>{
        switch (link.id) {
            case "profpx":
                if (link.className == "active") {
                    link.style.width = "120px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "120px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;
            case "edupx":
                if (link.className == "active") {
                    link.style.width = "150px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "150px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;
            case "techpx":
                if (link.className == "active") {
                    link.style.width = "170px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "170px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;
            case "achievepx":
                if (link.className == "active") {
                    link.style.width = "190px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "190px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;
            case "projpx":
                if (link.className == "active") {
                    link.style.width = "130px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "130px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;
            case "contpx":
                if (link.className == "active") {
                    link.style.width = "130px";
                    link.children[0].style.color = "white";
                    link.children[1].style.color = "white";
                } else {
                    link.style.width = "130px";
                    link.children[0].style.color = "rgb(177, 46, 79)";
                    link.children[1].style.color = "rgb(177, 46, 79)";
                }
                break;                
                default:
                    break;
                }
                
            });
    link.addEventListener('mouseout', ()=>{
        if (link.className == "active") {
            link.style.width = "50px";
            link.children[1].style.color = "rgb(177, 46, 79)";
            link.children[0].style.color = "white";
        } else {
            link.style.width = "50px";
            link.children[0].style.color = "rgb(177, 46, 79)";
            link.children[1].style.color = "white";
        }
    });
});
let toggle = 0;
mobileNav.addEventListener("click", ()=>{
    if (toggle == 0) {        
        mobileNavCont.style.cssText = "top: 0%";
        mobileNavLinks.forEach(link =>{
           
            switch (link.id) {
                case "profmob":
                        link.style.width = "120px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                case "edumob":
                        link.style.width = "150px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                case "techmob":
                        link.style.width = "170px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                case "achievemob":
                        link.style.width = "190px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                case "projmob":
                        link.style.width = "130px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                case "contmob":
                        link.style.width = "130px";
                        link.children[0].style.color = "rgb(177, 46, 79)";
                        link.children[1].style.color = "rgb(177, 46, 79)";
                    break;
                    default:
                        break;
                    }
                    
                     
        })
        toggle++;
    } else {
        mobileNavCont.style.cssText = "top: 100%";
        mobileNavLinks.forEach(link =>{
            if (link.className == "active") {
                link.style.width = "50px";
                link.children[0].style.color = "white";
            } else {
                link.style.width = "50px";
                link.children[1].style.color = "white";
            }
        });
        toggle--;
    }
});


/// PROJECT FUNCTIONS ///
function isMobile() {
    return /Android|iPhone/i.test(navigator.userAgent);
    // return navigator.maxTouchPoints > 0;
}
function changeDirection() {
    if (touchendx < touchstartx) {
        projects[0].style.cssText = "transform: translateX(-90%) scale(0.8);";
        projects[1].style.cssText = "transform: translateX(-90%) scale(0.8);";
        projBalls[0].className = '';
        projBalls[1].className = 'active';
        
    } if (touchendx > touchstartx) {
        projects[0].style.cssText = "transform: translateX(0%) scale(0.8);";
        projects[1].style.cssText = "transform: translateX(0%) scale(0.8);";
        projBalls[1].className = '';
        projBalls[0].className = 'active';
    }
}
projBig.addEventListener('touchstart', (e)=>{
    touchstartx = e.changedTouches[0].screenX;
});
projBig.addEventListener('touchend', (e)=>{
    touchendx = e.changedTouches[0].screenX;
    changeDirection();
});
projSect.addEventListener('touchstart', (e)=>{
    touchstartx = e.changedTouches[0].screenX;
});
projSect.addEventListener('touchend', (e)=>{
    touchendx = e.changedTouches[0].screenX;
    changeDirection();
});
projects.forEach(project => {
    project.addEventListener('mouseover', ()=>{
        cursorOutline.animate({
            width: "50px",
            height: "50px"
        }, { duration: 300, fill: "forwards" })
    });
    project.addEventListener('mouseout', ()=>{
        cursorOutline.animate({
            width: "30px",
            height: "30px"
        }, { duration: 300, fill: "forwards" })
    });
    if (isMobile() == true) {
        projects.forEach(proj =>{
            proj.className = "card";
            proj.addEventListener('click', (e)=>{
                e.target.offsetParent.children[1].children[1].click();
            })
        })
    }
});
function change(id) {
    
    if (isMobile() == false) {
        projImg.forEach(img =>{
            img.classList.remove('active');
            if (img.getAttribute('id') == `${id}`) {
                img.classList.add('active');
                if (id == 'alberto') {
                    img.parentNode.children[1].classList.remove('active');
                    img.parentNode.children[3].classList.add('active');
                    document.querySelector('#firstcard').classList.add('middle')
                    document.querySelector('#secondcard').classList.remove('middle')
                } else {
                    img.parentNode.children[3].classList.remove('active');
                    img.parentNode.children[1].classList.add('active');
                    document.querySelector('#secondcard').classList.add('middle')
                    document.querySelector('#firstcard').classList.remove('middle')
                }
            }
        })
    }
}
const photo = [ './src/thrift.png', './src/thrift-two.png', './src/thrift-three.png', './src/thrift-four.png'];
let temp = 0;
const timeinterval_a = setInterval(() => {
    
    projImg[0].style.transition = 'all ease .3s'; 
    projImg[0].style.background = ` url(${photo[temp]})`;
    projImg[0].style.backgroundPosition= 'center';
    projImg[0].style.backgroundRepeat= 'no-repeat';
    projImg[0].style.backgroundSize = 'contain';
    if (temp == (photo.length)) {
        projImg[0].style.background = "url('./src/thrift-five.png')";
        projImg[0].style.backgroundPosition= 'center';
        projImg[0].style.backgroundRepeat= 'no-repeat';
        projImg[0].style.backgroundSize = 'contain';
        temp = 0;
    } else {
        temp++;
    }
}, 10000);
timeinterval_a;
let forNow = 0;
const images = [ './src/alberto.png', './src/alberto-two.png', './src/alberto-three.png', './src/alberto-four.png', './src/alberto-five.png'];
const timeinterval_b = setInterval(() => {
    projImg[1].style.transition = 'all ease .3s'; 
    projImg[1].style.background = ` url(${images[forNow]})`;
    projImg[1].style.backgroundPosition= 'center';
    projImg[1].style.backgroundRepeat= 'no-repeat';
    projImg[1].style.backgroundSize = 'contain';
    if (temp == (images.length)) {
        projImg[1].style.background = "url('./src/alberto-six.png')";
        projImg[1].style.backgroundPosition= 'center';
        projImg[1].style.backgroundRepeat= 'no-repeat';
        projImg[1].style.backgroundSize = 'contain';
        forNow = 0;
    } else {
        forNow++;
    }
}, 10000);
timeinterval_b;
