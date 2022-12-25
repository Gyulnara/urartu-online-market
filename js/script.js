$('.add').click(function () {
  if ($(this).prev().val()) {
    $(this).prev().val(+$(this).prev().val() + 1);
  }
});
$('.sub').click(function () {
  if ($(this).next().val() > 1) {
    if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
  }
});


$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 3
});

$('.slider-adv').slick({
  slidesToShow: 2,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  centerMode: true,
})


$('.customer-logos').slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: false,
  pauseOnHover: false,
  centerMode: true,
  responsive: [{
    breakpoint: 768,
    settings: {
      slidesToShow: 4
    }
  }, {
    breakpoint: 520,
    settings: {
      slidesToShow: 3
    }
  }]
});

// $('.slider').slick();

$('.general-slider .slider').slick({
  prevArrow: "<button type='button' class='slick-prev pull-left'><</button>",
  nextArrow: "<button type='button' class='slick-next pull-right'>></button>"
});

$('.slider-nav').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  autoplay: true,
  autoplaySpeed: 2000,
  focusOnSelect: true,
  infinite: true,
  autoplay: true,
  autoplaySpeed: 2000
});


$('.responsive').slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});


if ($('.product__slider-main').length) {
  var $slider = $('.product__slider-main')
    .on('init', function (slick) {
      $('.product__slider-main').fadeIn(1000);
    })
    .slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      autoplay: false,
      lazyLoad: 'ondemand',
      autoplaySpeed: 3000,
      asNavFor: '.product__slider-thmb'
    });

  var $slider2 = $('.product__slider-thmb')
    .on('init', function (slick) {
      $('.product__slider-thmb').fadeIn(1000);
    })
    .slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      asNavFor: '.product__slider-main',
      dots: false,
      centerMode: false,
      focusOnSelect: true
    });

  //remove active class from all thumbnail slides
  $('.product__slider-thmb .slick-slide').removeClass('slick-active');

  //set active class to first thumbnail slides
  $('.product__slider-thmb .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('.product__slider-main').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('.product__slider-thmb .slick-slide').removeClass('slick-active');
    $('.product__slider-thmb .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });


  // init slider
  //require der tox mna

  (['js-sliderWithProgressbar'], function (slider) {

    $('.product__slider-main').each(function () {

      me.slider = new slider($(this), options, sliderOptions, previewSliderOptions);

      // stop slider
      //me.slider.stop();

      // start slider
      //me.slider.start(index);

      // get reference to slick slider
      //me.slider.getSlick();

    });
  });
  var options = {
    progressbarSelector: '.bJS_progressbar'
    , slideSelector: '.bJS_slider'
    , previewSlideSelector: '.bJS_previewSlider'
    , progressInterval: ''
    // add your own progressbar animation function to sync it i.e. with a video
    // function will be called if the current preview slider item (".b_previewItem") has the data-customprogressbar="true" property set
    , onCustomProgressbar: function ($slide, $progressbar) { }
  }

  // slick slider options
  // see: https://kenwheeler.github.io/slick/
  var sliderOptions = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    autoplay: true
  }

  // slick slider options
  // see: https://kenwheeler.github.io/slick/
  var previewSliderOptions = {
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    focusOnSelect: true,
    centerMode: true
  }
}


function openAccountDetail(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// const boxes = document.querySelectorAll('.address-detail');

// for (const box of boxes) {
//   box.addEventListener('click', function handleClick() {
//     box.classList.toggle('is-active');
//   });
// }

var modalBackdrop = document.querySelector(".modal-backdrop")

var editAddress = document.querySelectorAll('.edit-address');
var changeAddress = document.querySelector('.change-address');
for (var add of editAddress) {
  add.addEventListener('click', function () {
    changeAddress.classList.add("is-open");
    modalBackdrop.style.display = "block"
  });
}

var addressForm = document.querySelector('.address-form');
addressForm.addEventListener('click', function (e) {
  e.preventDefault()
});

var cancelAction = document.querySelector('.cancel-action');
cancelAction.addEventListener('click', function (e) {
  changeAddress.classList.remove("is-open")
  modalBackdrop.style.display = "none"
});



var addNewAddress = document.querySelector('.add-new-address');
var addAddress = document.querySelector('.add-address');
addNewAddress.addEventListener('click', function () {
  addAddress.classList.add("is-open")
  modalBackdrop.style.display = "block"
});

var addAddressForm = document.querySelector('.add-address-form');
addAddressForm.addEventListener('click', function (e) {
  e.preventDefault()
});

var cancelActionAddress = document.querySelector('.cancal-adding-address');
cancelActionAddress.addEventListener('click', function (e) {
  addAddress.classList.remove("is-open")
  modalBackdrop.style.display = "none"

});


var changeDataIcon = document.querySelector('.change-data-icon');
var changeData = document.querySelector('.change-data');
changeDataIcon.addEventListener('click', function () {
  changeData.classList.add("is-open")
  modalBackdrop.style.display = "block"
});

var changeDataForm = document.querySelector('.change-data-form');
changeDataForm.addEventListener('click', function (e) {
  e.preventDefault()
});

var cancelChangeData = document.querySelector('.cancal-change-data');
cancelChangeData.addEventListener('click', function (e) {
  changeData.classList.remove("is-open")
  modalBackdrop.style.display = "none"
});


var seeOrder = document.querySelectorAll('.see-order');
var orderData = document.querySelector('.order-data');
for (var order of seeOrder) {
  order.addEventListener('click', function () {
    orderData.classList.add("is-open")
    modalBackdrop.style.display = "block"
  });
}

var cancelChangeData = document.querySelector('.close-order-popup');
cancelChangeData.addEventListener('click', function (e) {
  orderData.classList.remove("is-open")
  modalBackdrop.style.display = "none"
});