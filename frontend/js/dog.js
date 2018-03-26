var annoyingDog = $('.annoying-dog');
var annoyingDogAudio = $('body').find('audio')[0];

annoyingDog.hover(function(){
  annoyingDogAudio.play();
  $('.pet-me').hide();
}, function(){
  annoyingDogAudio.pause();
  $('.pet-me').show();
});
