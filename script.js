/**
 * video control
 */
/**
 * playButton when click play video and botton change to .gif
 */
document.getElementById('playButton').addEventListener('click',function(){
    var video = document.getElementById('myVideo');
    var title = document.getElementById('hungry');

    var gifImage = document.getElementById('gifImage'); //change the button
      title.textContent="Thank you nice person!"
    if (video.paused){
       video.play();    //play the video
       gifImage.src ='images/bn_feedme.gif'; //when star the video, botton animation

    }else{
       video.pause();
       gifImage.src ='images/bn_feedme.png';
    }

   });


/**
 * fullScreenButton
 * different browsers have different command
 */
document.getElementById('fullScreenButton').addEventListener('click',function(){
    var video = document.getElementById('myVideo');
    if (video.requestFullscreen){
        video.requestFullscreen();
    }else if (video.mozRequestFullScreen){video.mozRequestFullScreen();
    }else if (video.webkitRequestFullscreen){video.webkitRequestFullscreen();
    }else if (video.mozRequestFullScreen){video.mozRequestFullScreen();
    }
});
/**
 * photos slides
    to display different pictures when click
 */
   