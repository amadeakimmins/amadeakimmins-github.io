


$(document).ready(function() {

  $('#fullpage').fullpage({
    scrollingSpeed: 600
  });

  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
     opacity: 0.3, // Opacity of modal background
     inDuration: 300, // Transition in duration
     outDuration: 200, // Transition out duration
     startingTop: '50%', // Starting top style attribute
     endingTop: '50%', // Ending top style attribute
  });

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
