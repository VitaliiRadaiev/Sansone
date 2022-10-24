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