(function () {
  'use strict';
  setTimeout(()=>{
    play()
  }, 1500)

  $('main').addClass('active');

  $('#playButton').hide();
  $('body').removeClass('loading')
  $('main').addClass('active');
  $('.navigation-wrapper').addClass('active');

  $('#playButton').one('click', function(e) {
    $('#playButton').addClass('hidden');
    if(createjs.WebAudioPlugin.isSupported()) {
      createjs.WebAudioPlugin.context.resume();
    }
  });

})();