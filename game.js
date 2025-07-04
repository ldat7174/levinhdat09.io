new container ('container', {
    el: '.container',
    direction: 'horitonzal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.container-pagination',
        clickable: true,
    },
    navigation: {
        nextEL: '.container-button-next',
        prevEL: '.container-button-prev',
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
    }
})
