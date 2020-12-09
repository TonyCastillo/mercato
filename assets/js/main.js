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




        