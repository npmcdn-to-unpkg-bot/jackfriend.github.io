$('.nav-menu li').hover(function () {
  $(this).prepend('<span class="fa fa-hand-o-right bounce"></span>&nbsp');
}, function () {
  $(this).find('.bounce').remove();
});

$('.article-wrapper').masonry({
  itemSelector: '.article'
});

if (    $(window).width()    <= 600) {
  $('.nav-menu').hide();
  $('.social-media').hide();
  $('.bounce').hide();
}

$('.nav-container').on('click', '.fa-bars',function () {
  $('.nav-container').removeClass('unclicked');
  $('.nav-container').addClass('clicked');
  $('.nav-menu').show();
  $('.social-media').show();
  $('.fa-bars').addClass('fa-times');
  $('.fa-bars').removeClass('fa-bars');
});

$('.nav-container').on('click', '.fa-times',function () {
  $('.nav-menu').fadeOut(3000);
  $('.social-media').fadeOut(3000);
  $('.nav-container').removeClass('clicked');
  $('.nav-container').addClass('unclicked');
  $('.fa-times').addClass('fa-bars');
  $('.fa-times').removeClass('fa-times');
});

$('.article-wrapper').masonry({
  itemSelector: '.article'
});

if (    $(window).width()    <=     320) {
  $('.article-wrapper').masonry('destroy');
}
