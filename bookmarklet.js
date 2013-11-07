
var loading_random = false;

function append_random_content() {
  $('#content').append('<div class="more">');
  $('#loading-msg').css('top', $(document).height()).fadeIn();
  $('.more:last').load('./Special:Random #content > *', function() {
    loading_random = false;
    $('#loading-msg').fadeOut();
  }).css('padding-top', '2em');
}

if ($('body.mediawiki').length) {
  if ($('#loading-msg').length === 0) {
    $('body').append('<p id="loading-msg">loading more wikipedia ...</p>');
  }
  $('body').append('<p id="welcome-msg">Infinite Wikipedia enabled</p>');
  if ($('#more-msg').length === 0) {
    $('#content').next().append('<p id="more-msg" style="background: rgba(41, 128, 185, 0.8); text-align:center; color: white; font-size: 2em; margin-left: 5.5em">&darr; <a href="#" style="color:white;" onclick="append_random_content(); return false;" >scroll for more</a> &darr;</p>');
  }
  $('#loading-msg').hide();
  $('#loading-msg').css({
    'position': 'absolute',
    'top': $(document).height(),
    'width': '100%',
    'background': 'rgba(41, 128, 185, 0.8)',
    'color': 'white',
    'text-align': 'center',
    'font-size': '3em',
  });

  $('#welcome-msg').css({
    'position': 'absolute',
    'top': $(window).scrollTop(),
    'width': '100%',
    'background': 'rgba(39, 174, 96, 0.8)',
    'color': 'white',
    'text-align': 'center',
    'font-size': '3em',
  }).delay(600).fadeOut(function() {
    $(this).remove();
  });

  $(window).scroll(function() {
    if(!loading_random && $(window).scrollTop() + $(window).height() == $(document).height()) {
      loading_random = true;
      append_random_content();
    }
  });
} else {
  $('body').append('<p id="welcome-msg">Please <a href="https://en.wikipedia.org/wiki/Special:Random">visit Wikipedia</a>, and try again.</p>');

  $('#welcome-msg').css({
    'position': 'absolute',
    'top': $(window).scrollTop(),
    'width': '100%',
    'background': 'rgba(231, 76, 60, 0.7)',
    'color': 'white',
    'text-align': 'center',
    'font-size': '3em',
  }).delay(1600).fadeOut(function() {
    $(this).remove();
  });
}
