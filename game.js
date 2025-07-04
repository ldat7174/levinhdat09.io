new swiper ('swiper-container', {
    el: '.swiper-container',
    direction: 'horitonzal',
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEL: '.swiper-button-next',
        prevEL: '.swiper-button-prev',
    }
})