document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.slider');
    var instances = M.Slider.init(elems, indicators=false);
  });

  // Or with jQuery

  $(document).ready(function(){
    $('.slider').slider();
  });