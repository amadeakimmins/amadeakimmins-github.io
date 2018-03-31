const $isAnimatedSecond = $('.page2 .is-animated');
const $isAnimatedThird = $('.page3 .is-animated');
const $isAnimatedFourth = $('.page4 .is-animated');
const $isAnimatedFifth = $('.page5 .is-animated');

const $30SecsButton = $('.30SecsButton');
const $5MinsButton = $('.5MinsButton');
const $page2 = $('.page2');
const $page4 = $('.page4');

$(document).ready(function() {

  $('#fullpage').fullpage({
    anchors:['page1', 'page2', 'page3', 'page4', 'page5']
  });

  // function animateTitle() {
  //   if( index == 1 && nextIndex == 2 ) {
  //       $isAnimatedSecond.animateCss('fadeInLeft');
  //   }
  // }

  // onLeave: function(index, nextIndex, direction){
	// 	var $isAnimatedSecond = $('.page2 .is-animated');
  //
	// 	//after leaving section 2
	// 	if(index == 1 && nextIndex == 2){
  //
	// 	}
  //
	// 	else if(index == 2 && direction == 'down'){
	// 		alert("Going to section 1!");
	// 	}
	// }


  // HIDING PAGES DEPENDING ON BUTTON CHOSEN
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
