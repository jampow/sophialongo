$(function(){

  //Menu fixo na tela quando rolar
  var nav    = $('nav');
  var navTop = nav.position().top * 1;
  $(window).scroll(function(){
    var view = $('html, body');
    var pageTop = view.position().top * 1;
    if (navTop + pageTop < 0) {
      nav.css({'position': 'fixed', 'top': 0});
    } else {
      nav.css({'position': 'relative'});
    }
  });
  
  //links com a classe scrollTo
  $('nav a.scrollTo').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({'scrollTop' : $(target).position().top}, 750);
    return false;
  });

  $('#filter li').click(function(){
    var value = $(this).attr('data-id');
    $('.portfolio').quicksand( $('.dic li.'+value), {
      adjustHeight: 'dynamic'
    });
  });

});
