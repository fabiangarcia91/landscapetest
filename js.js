// Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}
// End Navigation

//Carousel hero start
//step 1: get DOM
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let carouselDom = document.querySelector('.carousel');
let SliderDom = carouselDom.querySelector('.carousel .list');
let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.carousel .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.carousel .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        carouselDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        carouselDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        carouselDom.classList.remove('next');
        carouselDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
//Carousel hero end 

// Filter cards according to category 
// I have already coded this Js before in old project too 
const filters_cat = document.querySelectorAll(".filter-btn");

let active_cards = document.querySelectorAll(
    ".project-slider .swiper-slide:not(.d-none)"
);

filters_cat.forEach((filter) => {
    filter.addEventListener("click", function () {
        filters_cat.forEach((filter) => {
            filter.classList.remove("btn-active");
        });
        this.classList.add("btn-active");
        const category = this.dataset.cat;
        const cards = document.querySelectorAll(".project-slider .swiper-slide");
        cards.forEach((card, index) => {
            card.classList.add("d-none");
        });
        let selectedcat;
        if (category === "all") {
            selectedcat = document.querySelectorAll(`.project-slider .swiper-slide`);
        } else {
            selectedcat = document.querySelectorAll(`[data-type="${category}"]`);
        }
        let numberItems;

        if (selectedcat.length >= 4) {
            numberItems = 4;
        } else {
            numberItems = selectedcat.length;
        }

        for (let index = 0; index <= numberItems - 1; index++) {
            selectedcat[index].classList.remove("d-none");
        }
        // if number of cards is 0, show no result
        const cards_count = document.querySelectorAll(
            ".project-slider .swiper-slide:not(.d-none)"
        );
        if (cards_count.length === 0) {
            document.querySelector(".no-results").classList.remove("d-none");
        } else {
            document.querySelector(".no-results").classList.add("d-none");
        }
    });
});

// End Filter cards according to category

// Swiper Slider 2
var swiper = new Swiper(".project-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
        el: ".project-slider .swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".project-slider .swiper-button-next",
        prevEl: ".project-slider .swiper-button-prev",
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 2,
            spaceBetween: 50,
        },
    },
});

// End Swiper Slider 2