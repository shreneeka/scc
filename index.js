$(document).ready(function() {

    // SCROLLING STIKY MENUBAR and TOP BUTTON------------------------------------------------
    $(window).scroll(function() {
        var sticky = $('.menu'),
            scroll = $(window).scrollTop();

        if (scroll >= 40) {
            sticky.addClass('sticy');
            $(".top").css({ "opacity": "1" });
        } else {
            sticky.removeClass('sticy');
            $(".top").css({ "opacity": "0" });
        }
    });
    
    //BOTTOM TO TOP-----------------------------------------
    const top = document.getElementById("top");
    const onScroll = () => {
        const topscroll = document.documentElement.scrollTop
        if (topscroll >= 30) {
            top.style.opacity = "1";
        } else {
            top.style.opacity = "0";
        }
    }
    window.addEventListener('scroll', onScroll);

    //ACTIVE CLASS ON CLICK-----------------------------------------
    $('ul li a').click(function() {
        $('li a').removeClass("active");
        $(this).addClass("active");
    });

    //VERTICAL SLIDE-----------------------------------------
    $('.slick', '.vertical-slider').slick({
        vertical: true,
        verticalSwiping: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        infinite: true,
    });

    // SLIDE-----------------------------------------
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });

    // SLIDE-----------------------------------------
    $('.multiple-items').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 10000,
        dots: false,
        speed: 2200,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [{
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        }, ]
    });

    //BRAND & CLIANT AUTOPLAY-----------------------------------------
    $('.autoplay').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        speed: 3000,
        arrows: false,
        infinite: true,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 540,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // BAR--------------------------------------------------
    $("#mobile-bar").click(function() {
        $("#mobile-menu").slideToggle("slow");
        $("#mobile-bar1").toggleClass("close");
        $("close").toggleClass("close");
        $("body").toggleClass("bc");
    });

});


// MOVE-IMAGE--------------------------------------------------
const bg = document.querySelector('.move-image');
const windowWidth = window.innerWidth / 5;
const windowHeight = window.innerHeight / 5;

bg.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / windowWidth;
    const mouseY = e.clientY / windowHeight;

    bg.style.transform = `translate3d(-${mouseX}%, -${mouseY}%, 0)`;
});


// SCROLL PAGE-----------------------------------------------

// const blocks = document.querySelectorAll(".section"),
//     block = document.querySelector("section"),
//     sectionHeight = parseInt(window.getComputedStyle(block).height);

// let inScroll = false,
//     durationOneScroll = 200,
//     arrSections = [],
//     step = 0;

// for (let i = 0; i < blocks.length; i++) {
//     arrSections.push(sectionHeight * i);
// };
// console.log(sectionHeight);

// document.addEventListener("wheel", function(event) {
//     if (inScroll === false) {
//         inScroll = true;
//         if (event.deltaY > 0) {
//             step >= arrSections.length - 1 ? step = arrSections.length - 1 : step = step + 1;
//             window.scrollTo({
//                 top: arrSections[step],
//                 behavior: "smooth"
//             });
//             setTimeout(() => { inScroll = false }, durationOneScroll);
//         } else {
//             step === 0 ? step = 0 : step = step - 1;
//             window.scrollTo({
//                 top: arrSections[step],
//                 behavior: "smooth"
//             });
//             setTimeout(() => { inScroll = false }, durationOneScroll);
//         };
//     };
// });


// ONLOAD--------------------------------------------
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active1");
        } else {
            reveals[i].classList.remove("active1");
        }
    }
}
window.addEventListener("scroll", reveal);


// PAGELOAD---------------------------------
var pageLoad;

function pageLoadFunction() {
    pageLoad = setTimeout(showPage, 2000);
}

function showPage() {
    document.getElementById("preloader-background").style.display = "none";
    document.getElementById("pagecontent").style.display = "block";
}
