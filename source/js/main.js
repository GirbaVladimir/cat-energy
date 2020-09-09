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

var map_google;

function initMap() {
  map_google = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 59.938719, lng: 30.323046 },
    zoom: 14
  });

  if (window.matchMedia("(min-width: 768px)").matches) {
    map_google = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.939169, lng: 30.323336 },
      zoom: 15
    });}

  if (window.matchMedia("(min-width: 1440px)").matches) {
    map_google = new google.maps.Map(document.getElementById("map"), {
      center: { lat: 59.939076, lng: 30.317815 },
      zoom: 16
    });}

  var icon = {
    url: "img/map-pin.png", // url
    scaledSize: new google.maps.Size(60, 53), // scaled size
  };

  if (window.matchMedia("(min-width: 768px)").matches) {
    var icon = {
      url: "img/map-pin.png", // url
      scaledSize: new google.maps.Size(120, 106), // scaled size
    }
  }
  if (window.matchMedia("(min-width: 1440px)").matches) {
    var marker = new google.maps.Marker({
      position: {lat: 59.938660, lng: 30.322899},
      map: map_google,
      icon: icon
    });
  }

  else if (window.matchMedia("(min-width: 768px)").matches) {
    var marker = new google.maps.Marker({
      position: { lat: 59.938063, lng: 30.323210 },
      map: map_google,
      icon: icon
    });
  }

  else if (window.matchMedia("(max-width: 767px)").matches) {
    var marker = new google.maps.Marker({
      position: {lat:  59.938429, lng: 30.322958},
      map: map_google,
      icon: icon
    });
  }

}
