const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    // paginationのボタンを押しても反応するようにする
    clickable: true
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

new WOW().init();

// ------------- ドロアーの実装 -------------//

jQuery('.drawer-icon').on('click', function(e) {
  e.preventDefault();

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-background').toggleClass('is-active');
  return false;
});

// ------------- スムーススクロールの実装 ------------//

jQuery('a[href^="#"]').on('click', function() {
  var header = jQuery('.header').innerHeight();
  var id = jQuery(this).attr('href');
  var position = 0;
  if (id != '#') {
    position = jQuery(id).offset().top - header;
  }
  jQuery('html,body').animate({
    scrollTop: position
  },
  300);
});

// window//

// スクロールを検知するイベントを作成する
// console.log(jQuery(this).scrollTop());でスクロールした位置を調べることができる
jQuery(window).on('scroll', function(){
  if (100 < jQuery(this).scrollTop()) {
    jQuery('.to-top').addClass('is-show');
  } else {
    jQuery('.to-top').removeClass('is-show');
  }
});

jQuery('.header__nav li a').on('click', function(){
  jQuery('.header__nav li a').removeClass('is-active');
  jQuery(this).addClass('is-active');
});

// Q and A section//
jQuery('.qa-box__q').on('click', function() {
  jQuery(this).next().slideToggle();
});