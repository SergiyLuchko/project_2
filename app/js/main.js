$(function(){


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
  
$('.hero__slider-items').slick({
  arrows:false,
  dots:true,
  autoplay:true,
  fade:true
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
