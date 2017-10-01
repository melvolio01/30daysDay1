console.log("It lives");

// var clicked = document.querySelector(".key");
  

// listening for key-up event
window.addEventListener('keydown', function(e){
  //Sets variable (well, constant) for aufio so that the key can be selected and audio track (if any) can be identified
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
   const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    //Stops function if no audio element
    if(!audio) return;
    //rewinds audio to the start so that it can be played again (so ie you don't have to wait for full track to play)
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
});





// My solution for keyup - not very DRY
window.addEventListener('keyup', function(e){
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  key.classList.remove('playing');
});
