$(function(){
  
  $('nav a.scrollTo').click(function(){
    var target = $(this).attr('href');
    $('html, body').animate({'scrollTop' : $(target).position().top}, 750);
    return false;
  });
  
});

