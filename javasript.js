var mainnav = $('.main-nav');
var fixed = "nav-fixed";
var header = $('.site-header').outerHeight();

$(window).scroll(function(){
  if($(this).scrollTop() >= header){
    mainnav.addClass(fixed);
  }
  else{
    mainnav.removeClass(fixed);
  }
});

$("#scrollToMain").click(function(e){
  e.preventDefault();
  var target = $(this).attr('href');
  console.log(target);
  $('html,body').animate({
    scrollTop : $(target).offset().top
  },400);
});
