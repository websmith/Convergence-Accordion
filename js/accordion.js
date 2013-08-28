/* 
* Convergence Accordion Widget v1.0
* Copyright 2013 Nate Cornelius - http://natecornelius.com | http://holeintheroof.com
*/
$(document).ready(function() {  
  $('.accordion-widget').each(function(){
    var $title = $(this).find('.accordion-title .article-title a');
    var $content = $(this).find('.accordion-body');
    var $link = $title.attr('href');
    $title.attr('href','#'+$link);
    
    $title.click(function(e){
      e.preventDefault();
      $content.not(':animated').slideToggle();
      $('html,body').stop().animate({scrollTop: $content.siblings('.accordion-title').offset().top}, 400, function() { 
        location.hash = $link.replace('#',''); 
      });
    });
  });
});