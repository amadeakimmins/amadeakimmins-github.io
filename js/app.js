


$(document).ready(function() {

  $('#fullpage').fullpage({
    scrollingSpeed: 600
  });
  
  $('.modal').modal();

  // HIDING DIVS DEPENDING ON TIME CHOSEN
  const $30SecsButton = $('.30SecsButton');
  const $5MinsButton = $('.5MinsButton');
  const $page2 = $('.page2');
  const $page4 = $('.page4');

  function smallPortfolio() {

    $page2.addClass('hidden');
    $page4.addClass('hidden');
  }

  function longPortfolio() {
    $page2.removeClass('hidden');
    $page4.removeClass('hidden');
  }

  $30SecsButton.on('click', smallPortfolio);
  $5MinsButton.on('click', longPortfolio);
});
