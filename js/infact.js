
var videoPlayer = videojs( "in_fact_player",{
  sources: [{
    type: "video/mp4",
    src: "in_fact_3rd_s.mp4"
    }]
});

//videoPlayer.poster('poster.jpg');

var vm = new Vue({
    el: '#app',
    data: {
      currentTr: 1,
      tr1count: 0,
      pcount: 0,
      tr1count: 0,
      tr2count: 0,
      tr3count: 0,
      tr1Disable: true,
      tr2Disable: false,
      tr3Disable: false,
      randomChecked: false,
      nowPlaying: "3rd LIVE"
    },
    mounted: function(){
      videojs("in_fact_player").ready(function(){
        this.on("ended", function(){
          vm.pcount++;
          switch(vm.currentTr) {
            case 1:
              vm.tr1count++;
              break;
            case 2:
              vm.tr2count++;
              break;
            case 3:
              vm.tr3count++;
              break;
          }
          if (vm.randomChecked){
            var rand = Math.floor(Math.random()*Math.floor(3))+1;
            switch(rand) {
              case 1:
                track1Clicked();
                break;
              case 2:
                track2Clicked();
                break;
              case 3:
                track3Clicked();
                break;
            }
          } else{
            videoPlayer.play();
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
  vm.tr3Disable=false;
  vm.currentTr=1;
  vm.nowPlaying="3rd LIVE";
  videoPlayer.src({
    type: "video/mp4",
    src: "in_fact_3rd_s.mp4"
  })
  //videoPlayer.poster('poster.jpg');
  videoPlayer.play();
}

function track2Clicked(){
  vm.tr1Disable=false;
  vm.tr2Disable=true;
  vm.tr3Disable=false;
  vm.currentTr=2;
  vm.nowPlaying="4th LIVE";
  videoPlayer.src({
    type: "video/mp4",
    src: "in_fact_4th_s.mp4"
  })
  //videoPlayer.poster('poster.jpg');
  videoPlayer.play();

}

function track3Clicked(){
  vm.tr1Disable=false;
  vm.tr2Disable=false;
  vm.tr3Disable=true;
  vm.currentTr=3;
  vm.nowPlaying="6th LIVE";
  videoPlayer.src({
    type: "video/mp4",
    src: "in_fact_6th_s.mp4"
  })
  //videoPlayer.poster('poster.jpg');
  videoPlayer.play();
}
