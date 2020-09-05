sliderButtonAfter.addEventListener('click', function (e){
  e.preventDefault();
  if (slider.classList.contains('slider--before')) {
    slider.classList.remove('slider--before');
    slider.classList.add('slider--after');

  }
});

sliderButtonBefore.addEventListener('click', function (e){
  e.preventDefault();
  if(slider.classList.contains('slider--after')) {
    slider.classList.remove('slider--after');
    slider.classList.add('slider--before');
  }
});
