
$(document).ready(function(){
      $('.slider').bxSlider();
      adaptiveHeight: false;
      touchEnabled: true;
      pager: false;
      responsive: false;
    });

// var menuElem = document.getElementById('menu');

// menuElem.onclick = function() {
//       menuElem.classList.toggle('open');
// };

var form = document.getElementById('priem');

form.onclick = function() {
      form.classList.toggle('open');
};