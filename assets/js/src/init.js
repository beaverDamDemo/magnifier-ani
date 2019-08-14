(function () {
  'use strict';

  /* *** PRELOADER***/
  var width = 100,
    perfData = window.performance.timing,
    EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
    time = parseInt((EstimatedTime/1000)%60)*100;
  $('.loadbar').animate({
    'width': width+'%'
  }, time)

  setTimeout(()=>{
    $('#preloader').removeClass('active');
  }, time)

  setTimeout(()=>{
    $('#preloader').addClass('display-none');
    play()
  }, time+1200)

  $('#playButton').hide();
  $('.navigation-wrapper').addClass('active');

  $('#playButton').one('click', function(e) {
    $('#playButton').addClass('hidden');
    if(createjs.WebAudioPlugin.isSupported()) {
      createjs.WebAudioPlugin.context.resume();
    }
  });

})();