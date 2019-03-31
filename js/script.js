$(document).ready(function(){
      $('.slider').bxSlider();
      adaptiveHeight: false;
      touchEnabled: true;
      pager: false;
      auto: true; pause: 1200;
      
      // mode: 'fade',  // тип перехода между слайдами может быть 'horizontal', 'vertical', 'fade'
      // // captions: true,         // отображение title
      // // easing: 'easeInOutQuad', // анимация слайда
      // // controls: true,         // отображение стрелки - вперед, назад
      // // startSlide: 0,          // Показ начнется с заданного слайда
      // // infiniteLoop: true,     // показывать первый слайд за последним 
      // // pager: true,            // показ номера страницы
      // // auto: true,             // сделать автоматический переход
      // // autoControls: true,     // показывает кнопку плей и стоп
      // // video: true,            // включить видео
      // // pause: 4000,            // время между сменой слайдов в м-сек
      // // speed: 500,             // длительность перехода слайда в м-сек
      // // useCSS: false           // CSS переходы

});
   
var form = document.getElementById('priem');
var formasv = document.getElementById('form');

form.onclick = function() {
     formasv.classList.toggle('open');
};


var menu1 = document.getElementById('menu1');
var menu2 = document.getElementById('menu2');
var menulist = document.getElementById('menulist');
var menu3 = document.getElementById('menu3');
var menu4 = document.getElementById('menu4');

menu1.onclick = function() {
      menu1.classList.toggle('open');
};
menu2.onclick = function() {
      menulist.classList.toggle('open');
};
menu3.onclick = function() {
      menu3.classList.toggle('open');
};
menu4.onclick = function() {
      menu4.classList.toggle('open');
};