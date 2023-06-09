document.addEventListener('DOMContentLoaded', function() {
  var audio = document.getElementById('audio');
  var playlist = document.getElementById('playlist');
  var playBtn = document.getElementById('playBtn');
  var pauseBtn = document.getElementById('pauseBtn');

  var currentSong = null;
  const playlist = document.getElementById('playlist');

  playlist.addEventListener('click', (event) => {
  const target = event.target;
  if (target.tagName === 'LI') {
    const audio = document.getElementById('audio');
    const videoUrl = target.getAttribute('data-video');
    if (videoUrl) {
      // Open the YouTube link in a new tab
      window.open(videoUrl, '_blank');
    } 
    else {
      const audioSrc = target.getAttribute('data-src');
      audio.src = audioSrc;
      audio.play();
     }
    }
  });

  playBtn.addEventListener('click', function() {
    if (currentSong && audio.paused) {
      audio.play();
    }
  });

  pauseBtn.addEventListener('click', function() {
    if (currentSong && !audio.paused) {
      audio.pause();
    }
  });
});
