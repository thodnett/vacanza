jQuery(document).ready(function() {
  
  var btn = $('#button');
  
  $(window).scroll(function() {
    if ($(window).scrollTop() > 20) {
      btn.addClass('show');
      
    } else {
      btn.removeClass('show');
    }
    
  });
  
  btn.on('click', function (e) { 
    e.preventDefault();
    $('html', 'body').animate({scrollTop:0}, '20');
    
  });
  
})