var navMain = document.querySelector('.main-nav');
var map = document.querySelector('.contacts__map');
var navToggle = document.querySelector('.main-nav__button');
var slider = document.querySelector('.slider');
var sliderButtonAfter = document.querySelector('.slider__button--after');
var sliderButtonBefore = document.querySelector('.slider__button--before');

navMain.classList.remove('main-nav--nojs');
navMain.classList.remove('main-nav--opened');
navMain.classList.add('main-nav--closed');

map.classList.remove('contacts__map--nojs');


navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

let map_google;

function initMap() {
  map_google = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.938719, lng: 30.323046 },
    zoom: 14
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    map_google = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.938719, lng: 30.323046 },
      zoom: 15
    });}

  if (window.matchMedia("(min-width: 1440px)").matches) {
    map_google = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.938889, lng: 30.318529 },
      zoom: 16
    });}

  var icon = {
    url: "../img/map-pin.png", // url
    scaledSize: new google.maps.Size(60, 53), // scaled size
  };

  if (window.matchMedia("(min-width: 768px)").matches) {
    var icon = {
      url: "../img/map-pin.png", // url
      scaledSize: new google.maps.Size(120, 106), // scaled size
    }
  }

  var marker = new google.maps.Marker({
    position: { lat: 59.938719, lng: 30.323046 },
    map: map_google,
    icon: icon
  });
}
