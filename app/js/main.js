$(function () {
  $(".burger").on("click", function () {
    $(this).toggleClass("burger--active");
    $(".nav__list").toggleClass("nav__list--active");
  });
  $(".shop-content__filter-btn").on("click", function () {
    $(".shop-filter").toggleClass("shop-filter--active");
  });

  // *********
  $(".details-tabs__btn").on("click", function (e) {
    e.preventDefault();
    $(".details-tabs__btn").removeClass("details-tabs__btn--active");
    $(this).addClass("details-tabs__btn--active");
    $(".details-tabs__content-item").removeClass(
      "details-tabs__content-item--active"
    );
    $($(this).attr("href")).addClass("details-tabs__content-item--active");
  });

  $(".details__number").styler();
  $(".shop-category__label").on("click", function () {
    $(".products__panel").toggleClass("products__panel--list");
    $(".shop-content__inner").toggleClass("shop-content__nogrid");
  });

  $(".shop-price__input").ionRangeSlider({
    type: "double",
    prefix: "$",
  });

  $(".star").rateYo({
    rating: 3.6,
    starWidth: "15px",
    readOnly: true,
    normalFill: "#dbdbdb",
    ratedFill: "#ffcc00",
    spacing: "10px",
  });

  $(".related-slider__inner").slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    prevArrow:
      '<button type="button" class="slick-prev">    <img src="images/icons/prev.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-next">    <img src="images/icons/next.svg" alt=""></button>',
      responsive: [
        {
          breakpoint: 1171,
          settings: {
            slidesToShow: 3,
     
          }
        },
        {
          breakpoint: 861,
          settings: {
            slidesToShow: 2,
        
          }
        },
        {
          breakpoint: 621,
          settings: {
            slidesToShow: 1,
          
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

  $(".hero__slider-items").slick({
    arrows: false,
    dots: true,
    autoplay: true,
    fade: true,
  });
  $(".details-slider__thumbs").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: ".details-slider__big",
    dots: true,

    focusOnSelect: true,
    draggable: false,
    vertical: true,
  });
  $(".details-slider__big").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: ".details-slider__thumbs",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          draggable: true,
          fade: false,
        },
      },
    ],
  });

  $(".accordion__btn").on("click", function (e) {
    e.preventDefault();
    var $this = $(this);

    if (!$this.hasClass("accordion-active")) {
      $(".accordion__content").slideUp(400);
      $(".accordion__btn").removeClass("accordion-active");
    }
    $this.toggleClass("accordion-active");
    $this.next().slideToggle();
  });

  var mixer = mixitup(".tabs");
  var mixer = mixitup(".design__tabs");
});
$(function () {
  require("fslightbox");
});
$(function () {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(29.775616079214718, -95.371582960008),
    zoom: 9,

    styles: [
      {
        featureType: "all",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "administrative",
        elementType: "labels",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#a31645",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "all",
        stylers: [
          {
            weight: "3.79",
          },
          {
            visibility: "on",
          },
          {
            color: "#ffecf0",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "landscape",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#a31645",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry",
        stylers: [
          {
            saturation: "0",
          },
          {
            lightness: "0",
          },
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi",
        elementType: "geometry.stroke",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            color: "#d89ca8",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "geometry",
        stylers: [
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on",
          },
          {
            saturation: "0",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "labels",
        stylers: [
          {
            color: "#a31645",
          },
        ],
      },
      {
        featureType: "poi.business",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "simplified",
          },
          {
            lightness: "84",
          },
        ],
      },
      {
        featureType: "road",
        elementType: "all",
        stylers: [
          {
            saturation: -100,
          },
          {
            lightness: 45,
          },
        ],
      },
      {
        featureType: "road.highway",
        elementType: "all",
        stylers: [
          {
            visibility: "simplified",
          },
        ],
      },
      {
        featureType: "road.arterial",
        elementType: "labels.icon",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "transit",
        elementType: "all",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "all",
        stylers: [
          {
            color: "#d89ca8",
          },
          {
            visibility: "on",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "geometry.fill",
        stylers: [
          {
            visibility: "on",
          },
          {
            color: "#fedce3",
          },
        ],
      },
      {
        featureType: "water",
        elementType: "labels",
        stylers: [
          {
            visibility: "off",
          },
        ],
      },
    ],
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
});
