
    function sticky(){
        const sidebar = document.querySelector('.side');
        const y = window.scrollY;
        if (y > 0){
            sidebar.classList.add('sticky');
        }else{
            sidebar.classList.remove('sticky');
        }
    }
    window.addEventListener('scroll', sticky);

    const audio = document.querySelector('.audio-player');
const audiobutton = document.querySelector('.play-button');
const progress = document.querySelector('.progress');
function playPause(){

 
if(audio.paused){
    audio.play();
    audiobutton.innerHTML = "❚❚";
     

  
}else{
    audio.pause();
    audiobutton.innerHTML = "▶";

}
}
const bar = document.querySelector('.bar');
audio.addEventListener('timeupdate', function(){
    var progressPos = audio.currentTime / audio.duration;
    progress.style.width = progressPos * 100 + "%";
    if(audio.ended){
        audiobutton.innerHTML = "▶";
         }
})

bar.addEventListener("click", seek2);
function seek2(e) {
    var percent = e.offsetX / this.offsetWidth;
    audio.currentTime = percent * audio.duration;
    progress.value = percent * 100;
}
 
const video = document.querySelector('.player');
const button = document.querySelector('.video-play');
 const ended = video.ended;
 const orangeBar = document.querySelector('.orange-bar');
const juice = document.querySelector('.orange-juice');
const info = document.querySelector('.video-info');
 
orangeBar.addEventListener("click", seek);
function play(){
   
    if(video.paused){
        video.play();
        button.innerHTML = "❚❚";
        button.classList.add('onhover');
     info.classList.add('onhover');
        updateTime = setInterval(update);

     
    } else{
        video.pause();
        button.innerHTML = "▶";
        button.classList.remove('onhover');
        info.classList.remove('onhover');
        window.clearInterval(updateTime);
       
    }
   
    } 

    function stop(){
        video.load();
        button.innerHTML = "▶";
        button.classList.remove('onhover');
        info.classList.remove('onhover');
        }
    video.addEventListener('timeupdate', function(){
        var juicePos = video.currentTime / video.duration;
        juice.style.width = juicePos * 100 + "%";
       
        if(video.ended){
            button.innerHTML = "▶";
             }
    })
    var duration = document.querySelector('.fullDuration');
    var currentTime = document.querySelector('.currentTime');
    duration.innerHTML = video.duration;
    video.addEventListener("loadedmetadata", function () {

        var minutes = parseInt(video.duration / 60);
        var seconds = parseInt(video.duration % 60);
        duration.innerHTML = minutes + ':' + seconds;
    });
     
    function update(){
        if(!video.ended){
        var playedMinutes = parseInt(video.currentTime/60);
            var playedSeconds = pad(parseInt(video.currentTime % 60));
        currentTime.innerHTML = playedMinutes + ':' + playedSeconds;
        var size = parseInt(video.currentTime*bar/video.duration);
 
       
        }
        else{
        
        currentTime.innerHTML = "0:00";
   
         window.clearInterval(updateTime);
        
        }
        }
        
    function seek(e) {
        var percent = e.offsetX / this.offsetWidth;
        video.currentTime = percent * video.duration;
        orangeBar.value = percent * 100;
    }
    
 
    function pad(d){
        return (d < 10) ? '0' + d.toString() : d.toString();
        }

    
function playAgain(){
    const audio = document.querySelector('.audio-2-player');
    const button = document.querySelector('.audio-2-button');
     
    if(audio.paused){
        audio.play();
        button.innerHTML = "❚❚";
         
    
      
    }else{
        audio.pause();
        button.innerHTML = "▶";
    
    }
    }


    const preList = document.querySelectorAll("pre");
preList.forEach( el => {
  el.classList.add('prettyprint');
});

 