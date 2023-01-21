// Search 
const search = document.querySelector('.search');
const searchSection = document.querySelector('.search-section');

search.addEventListener('click',function(){
   searchSection.style.display = 'block';
});


// Search Bar 
$(document).ready(function () {
    $(".search").click(function () {
        $(".search-section").toggleClass("open");
    });
});




// New Arrival

// Wish Icons 



const faHearts = document.getElementsByClassName('fa-heart');

for (const faHeart of faHearts) {
    faHeart.addEventListener('click', function () {
        if (faHeart.className == 'far fa-heart') {
            faHeart.classList.remove('far', 'fa-heart');
            faHeart.classList.add('fas', 'fa-heart');
        }
        else {
            faHeart.classList.remove('fas', 'fa-heart');
            faHeart.classList.add('far', 'fa-heart');
        }
    });

}






// Slick Carousel 

// $(".slider").not('.new-arrival').slick();

// New Arrival 
$(function () {
    $('.new-arrival').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

// $('.thumb_images').slick({
//     asNavFor: '.main_images',
//     focusOnSelect: true,
//     vertical: true,
//     arrows:false,
//     infinite: false,
//     responsive: [
//       {
//         breakpoint: 481,
//         settings: {
//           vertical: false,
//           infinite: true,
//           slidesToShow: 3,
//           slidesToScroll: 1

//         }
//       }
//     ]
//   });


// blogs
$(function () {
    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    // dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});




// Testimonial 
$('.testimonialCarousel').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
    // prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
    // nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>',
    speed: 300,
    adaptiveHeight: true,
});






// Clients Section 
$('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 4500,
    autoplayHoverPause: true,
    autoplaySpeed: 4500,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 4
        },
        1200: {
            items: 4
        }

    }
});







// When Scroll 


// Animation For 50%

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);


// Percent 50%

function percent50() {
    var reveals = document.querySelectorAll(".percent50");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("percent50Active");
        } else {
            reveals[i].classList.remove("percent50Active");
        }
    }
}

window.addEventListener("scroll", percent50);




// For Blog Slider 
$(function () {
    $('.blog-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: '<span class="priv-arrow"><i class=" fas fa-angle-left"></i></span>',
        nextArrow: '<span class="next-arrow"><i class=" fas fa-angle-right"></i></span>'
    });
});











// Cart Count

const cartCountButton = document.getElementsByClassName('cartCount');
const cartCounter = document.getElementById('cartCounter');

for (const cartCount of cartCountButton) {
    cartCount.addEventListener('click', function () {
        cartCounter.innerText++;
    })
    // console.log(cartCounter.innerText);
};


//=========    Cart

const cartButton = document.getElementById('cartButton');
cartButton.addEventListener('click', function () {
    window.location.href = 'cart.html';
});





// For Button Animation in Explorer section 
var bttn = document.querySelectorAll('.bttn');
bttn.forEach(bttn => {
    bttn.onmousemove = function (e) {
        var x = e.pageX - bttn.offsetLeft;
        var y = e.pageY - bttn.offsetTop;

        bttn.style.setProperty('--x', x + 'px');
        bttn.style.setProperty('--y', y + 'px');
    }
});






// Scroll To Top 

var scrollToTopBtn = document.getElementById("scrollToTopBtn");
// When the user scrolls down 20px from the top of the document, showing button
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
};




// For Chat box 
$(function () {
    var INDEX = 0;
    $("#chat-submit").click(function (e) {
        e.preventDefault();
        var msg = $("#chat-input").val();
        if (msg.trim() == '') {
            return false;
        }
        generate_message(msg, 'self');
        var buttons = [
            {
                name: 'Existing User',
                value: 'existing'
            },
            {
                name: 'New User',
                value: 'new'
            }
        ];
        setTimeout(function () {
            generate_message(msg, 'user');
        }, 1000)

    })

    function generate_message(msg, type) {
        INDEX++;
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg " + type + "\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src='../img/modals/modal1.jpg'>";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        if (type == 'self') {
            $("#chat-input").val('');
        }
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
    }

    function generate_button_message(msg, buttons) {
        /* Buttons should be object array 
          [
            {
              name: 'Existing User',
              value: 'existing'
            },
            {
              name: 'New User',
              value: 'new'
            }
          ]
        */
        INDEX++;
        var btn_obj = buttons.map(function (button) {
            return "              <li class=\"button\"><a href=\"javascript:;\" class=\"btn btn-primary chat-btn\" chat-value=\"" + button.value + "\">" + button.name + "<\/a><\/li>";
        }).join('');
        var str = "";
        str += "<div id='cm-msg-" + INDEX + "' class=\"chat-msg user\">";
        str += "          <span class=\"msg-avatar\">";
        str += "            <img src=\"https:\/\/image.crisp.im\/avatar\/operator\/196af8cc-f6ad-4ef7-afd1-c45d5231387c\/240\/?1483361727745\">";
        str += "          <\/span>";
        str += "          <div class=\"cm-msg-text\">";
        str += msg;
        str += "          <\/div>";
        str += "          <div class=\"cm-msg-button\">";
        str += "            <ul>";
        str += btn_obj;
        str += "            <\/ul>";
        str += "          <\/div>";
        str += "        <\/div>";
        $(".chat-logs").append(str);
        $("#cm-msg-" + INDEX).hide().fadeIn(300);
        $(".chat-logs").stop().animate({ scrollTop: $(".chat-logs")[0].scrollHeight }, 1000);
        $("#chat-input").attr("disabled", true);
    }

    $(document).delegate(".chat-btn", "click", function () {
        var value = $(this).attr("chat-value");
        var name = $(this).html();
        $("#chat-input").attr("disabled", false);
        generate_message(name, 'self');
    })

    $("#chat-circle").click(function () {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

    $(".chat-box-toggle").click(function () {
        $("#chat-circle").toggle('scale');
        $(".chat-box").toggle('scale');
    })

});







// Isotope Carousel for Most Reviewed


var $grid = $('.mostReviewedProducts').isotope({
    // options
});
// filter items on button click
$('.mostReviewedLinks').on('click', 'li', function () {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
});




// // init Isotope
// var $grid = $('.grid').isotope({
//     itemSelector: '.element-item',
//     layoutMode: 'fitRows'
// });
// // filter functions
// var filterFns = {
//     // show if number is greater than 50
//     numberGreaterThan50: function () {
//         var number = $(this).find('.number').text();
//         return parseInt(number, 10) > 50;
//     },
//     // show if name ends with -ium
//     ium: function () {
//         var name = $(this).find('.name').text();
//         return name.match(/ium$/);
//     }
// };
// // bind filter button click
// $('.filters-button-group').on('click', 'button', function () {
//     var filterValue = $(this).attr('data-filter');
//     // use filterFn if matches value
//     filterValue = filterFns[filterValue] || filterValue;
//     $grid.isotope({ filter: filterValue });
// });
// // change is-checked class on buttons
// $('.button-group').each(function (i, buttonGroup) {
//     var $buttonGroup = $(buttonGroup);
//     $buttonGroup.on('click', 'button', function () {
//         $buttonGroup.find('.is-checked').removeClass('is-checked');
//         $(this).addClass('is-checked');
//     });
// });





