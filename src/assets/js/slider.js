const swiperGallery = new Swiper('.swiperGallery', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1.5,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 1.5,
        spaceBetween: 30,
      },
      900: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 2.5,
        spaceBetween: 20,
      },
      // when window width is >= 640px
      1280: {
        slidesPerView: 5.5,
        spaceBetween: 20,
      }
    }
  });

  const swiperBlog = new Swiper('.swiperBlog', {
    // Optional parameters
    autoplay: {
      delay: 5000,
    },
    loop: true,

    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      // when window width is >= 480px
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    }
  });

  const swiperHero = new Swiper('.swiperHero', {
    // Optional parameters
    autoplay: {
      delay: 3000,
    },
    simulateTouch:false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
  });

  const swiperAdminBlog = new Swiper('.swiperAdminBlog', {
    // Optional parameters
    slidesPerView: 3,
    loop: true,

  });