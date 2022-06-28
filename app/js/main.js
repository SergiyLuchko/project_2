$(function(){

$('.details-tabs__btn').on('click', function(e){
e.preventDefault();
$('.details-tabs__btn').removeClass('details-tabs__btn--active');
$(this).addClass('details-tabs__btn--active');
$('.details-tabs__content-item').removeClass('details-tabs__content-item--active');
$($(this).attr('href')).addClass('details-tabs__content-item--active')
});



$('.details__number').styler();
  $('.shop-category__label').on('click', function(){
      $('.products__panel').toggleClass('products__panel--list')
     });


  $(".shop-price__input").ionRangeSlider({
    type: "double",
    prefix:"$",
       
  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth:"15px",
    readOnly: true,
    normalFill: "#dbdbdb",
    ratedFill:'#ffcc00',
    spacing: "10px"
  });
  
$('.related-slider__inner').slick({
  arrows:true,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode:true,
  prevArrow:'<button type="button" class="slick-prev">    <img src="images/icons/prev.svg" alt=""></button>',
  nextArrow:'<button type="button" class="slick-next">    <img src="images/icons/next.svg" alt=""></button>'
});

$('.hero__slider-items').slick({
  arrows:false,
  dots:true,
  autoplay:true,
  fade:true
});
$('.details-slider__thumbs').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.details-slider__big',
  dots: true,
 
  focusOnSelect: true,
  draggable: false,
  vertical: true
});
$('.details-slider__big').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  draggable: false,
  
  asNavFor: '.details-slider__thumbs'
});

$(".accordion__btn").on("click", function(e) {

  e.preventDefault();
  var $this = $(this);

  if (!$this.hasClass("accordion-active")) {
    $(".accordion__content").slideUp(400);
    $(".accordion__btn").removeClass("accordion-active");
  
  }
  $this.toggleClass("accordion-active");
  $this.next().slideToggle();

});

var mixer = mixitup('.tabs');
var mixer = mixitup('.design__tabs');

});
$(function(){
  require('fslightbox');
  });
