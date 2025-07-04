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
    scrollbar: {
        el: '.container-scrollbar',
        draggable: true,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 30,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
    },
})
