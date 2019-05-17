
var videoPlayer = videojs( "okurimono_sunday_player",{
  sources: [{
    type: "video/youtube",
    src: "https://www.youtube.com/watch?v=cuFIWdvWqEY"
    }]
});


var vm = new Vue({
    el: '#app',
    data: {
      currentTr: 1,
      pcount: 0,
      tr1count: 0,
      tr2count: 0,
      tr1Disable: true,
      tr2Disable: false,
      randomChecked: false,
      nowPlaying: "SSR ver"
    },
    mounted: function(){
      videojs("okurimono_sunday_player").ready(function(){
        this.on("ended", function(){
          vm.pcount++;
          switch(vm.currentTr) {
            case 1:
              vm.tr1count++;
              break;
            case 2:
              vm.tr2count++;
              break;
          }
          if (vm.pcount != 20){
            if (vm.randomChecked){
              var rand = Math.floor(Math.random()*Math.floor(3))+1;
              switch(rand) {
                case 1:
                  track1Clicked();
                  break;
                case 2:
                  track2Clicked();
                  break;
              }
            } else{
              videoPlayer.play();
            }
          }
        });
      });
    }
});


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

function track1Clicked(){
  vm.tr1Disable=true;
  vm.tr2Disable=false;
  vm.currentTr=1;
  vm.nowPlaying="SSR ver";
  videoPlayer.src({
    type: "video/youtube",
    src: "https://www.youtube.com/watch?v=cuFIWdvWqEY"
  })
  videoPlayer.play();
}

function track2Clicked(){
  vm.tr1Disable=false;
  vm.tr2Disable=true;
  vm.currentTr=2;
  vm.nowPlaying="シンデレラドリーム + YPT ver";
  videoPlayer.src({
    type: "video/youtube",
    src: "https://www.youtube.com/watch?v=yCHwmvDYKe8"
  })
  videoPlayer.play();

}
