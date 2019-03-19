
var videoPlayer = videojs( "last_kiss_player");

function play()
{
  videoPlayer.play();
}

function pause()
{
  videoPlayer.pause();
}

function mute()
{
  var isVolumeMuted = videoPlayer.muted();
  if (isVolumeMuted==true){
    videoPlayer.muted(false);
  } else if (isVolumeMuted==false) {
    videoPlayer.muted(true);
  }
}

function replay()
{
  videoPlayer.pause();
  videoPlayer.currentTime(0);
  videoPlayer.play();
}

var vm = new Vue({
    el: '#app',
    data: {
        pcount: 0
    },
    mounted: function(){
      videojs("last_kiss_player").ready(function(){
        this.on("ended", function(){
          vm.pcount++;
          videoPlayer.currentTime(0);
          videoPlayer.play();
        });
      });
    }
});
