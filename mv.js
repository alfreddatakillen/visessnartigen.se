var mvPlayer;

function onMvPlayerReady(event) {}

function onMvPlayerStateChange(event) {
  if (event.data === 0) {
    mvPlayer.seekTo(0);
    mvPlayer.stopVideo();
  }
}
function stopMvVideo() {
  mvPlayer.stopVideo();
}

$(document).ready(function() {
  $("#tidaholm").before('<div id="mv"></div>');
  $("#tidaholm").hide();
  mvPlayer = new YT.Player("mv", {
    width: "100%",
    height: "80%",
    playerVars: { modestbranding: 1, rel: 0 },
    videoId: "xgnKl8w5Qyw",
    events: {
      onReady: onMvPlayerReady,
      onStateChange: onMvPlayerStateChange
    }
  });
});
