$(function(){

  //Tipografia
  Cufon.replace('.cufon');

  //Menu fixo na tela quando rolar
  var nav    = $('nav#menu');
  var navTop = nav.position().top * 1;
  $(window).scroll(function(){
    var view = $('html, body');
    var pageTop = view.position().top * 1;
    if (navTop + pageTop < 0) {
      nav.css({'position': 'fixed', 'top': 0, 'width': '90%'});
    } else {
      nav.css({'position': 'relative', 'width': '100%'});
    }
  });
  
  //links com a classe scrollTo
  $('nav a.scrollTo').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({'scrollTop' : $(target).position().top}, 750);
    return false;
  });

  //link
  $('nav a.toggle').click(function(){
    var target = $(this).attr('href');
    $(target).slideToggle('normal');
    return false
  });

  //QuickSand
  $('#filter li').click(function(){
    var value = $(this).attr('data-id');
    $('.portfolio').quicksand( $('.dic li.'+value), {
      adjustHeight: 'dynamic'
    });
  });

  //jQuery Cycle
  $('#album').cycle({ 
    fx:     'fade', 
    speed:   750, 
    timeout: 0, 
    next:   '#next', 
    prev:   '#prev',
    before: function (curr, next, opts) {
             curStId = $(curr).attr('id').replace('img', 'st');
             nexStId = $(next).attr('id').replace('img', 'st');
             $('#'+curStId).fadeOut(750);
             $('#'+nexStId).fadeIn( 750);
           }
 
  });
  $('#subtitle span:first').show();

});

