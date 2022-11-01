{
    let propertiesSlider = document.querySelector('[data-slider="properties-slider"]');
    if (propertiesSlider) {
        let sliderData = new Swiper(propertiesSlider, {

            speed: 600,
            loop: true,
            pagination: {
                el: propertiesSlider.querySelector('.swiper-pagination'),
                clickable: true,
                renderBullet: function (index, className) {
                    return '<span class="' + className + '"> ' + (index + 1) + '</span>';
                }
            },
            breakpoints: {
                0: {
                    slidesPerView: 'auto',
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 'auto',
                    spaceBetween: 30,
                }
            },
        });
    }
}

{
    let teamSliders = document.querySelectorAll('[data-slider="team-list-slider"]');
    if(teamSliders.length) {
        teamSliders.forEach(slider => {
            let loop = true;
            let slides = slider.querySelector('.swiper .swiper-wrapper').children;

            if(document.documentElement.clientWidth > 1268) {
                if(slides.length <= 4) {
                    loop = false;
                }
            } else if(document.documentElement.clientWidth > 980) {
                if(slides.length <= 3) {
                    loop = false;
                }
            } else if(document.documentElement.clientWidth > 767) {
                if(slides.length <= 2) {
                    loop = false;
                }
            }


            let sliderData = new Swiper(slider.querySelector('.swiper'), {
                speed: 600,
                loop: loop,
                navigation: {
                    nextEl: slider.querySelector('.team-list__slider-btn.next'),
                    prevEl: slider.querySelector('.team-list__slider-btn.prev'),
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 25,
                        centeredSlides: true,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 25,
                        centeredSlides: false,
                    },
                    981: {
                        slidesPerView: 3,
                        spaceBetween: 25,
                        centeredSlides: false,
                    },
                    1268: {
                        slidesPerView: 4,
                        spaceBetween: 25,
                        centeredSlides: false,
                    },
                },
            });
        })
    }
}

{
    let carousels = document.querySelectorAll('[data-slider="carousel"]');
    if(carousels.length) {
        carousels.forEach(carousel => {
            let sliderData = new Swiper(carousel.querySelector('.swiper'), {
                speed: 600,
                loop: true,
                pagination: {
                    el: carousel.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                navigation: {
                    nextEl: carousel.querySelector('.carousel__slider-btn.next'),
                    prevEl: carousel.querySelector('.carousel__slider-btn.prev'),
                },
                breakpoints: {
                    0: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30,
                    },
                    980: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    }
                },
            });
        })
    }
}