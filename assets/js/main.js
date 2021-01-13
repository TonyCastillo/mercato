/* SidebarNAV-Initializattion */

$(document).ready(function(){
  $('.sidenav').sidenav();
});

  
  $('.carousel.carousel-slider').carousel({
    fullWidth: true,
    indicators: true
  })
  $('.dropdown-trigger').dropdown();
  autoplay();
  function autoplay() {
      $('.carousel.carousel-slider').carousel('next');
      setTimeout(autoplay, 4500);
  }

  let btn_close = document.getElementById('close_side');
  btn_close.addEventListener('click', ()=>{
    $('.sidenav').sidenav();
  })






        