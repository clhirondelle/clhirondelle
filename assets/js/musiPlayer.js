    //audio script
    let audio = new Audio("SolderSong.mp3");
    let fullPlay = 30;

    function playMusic() {
         //play audio
         audio.play();
        (function startTimer() {
            var sec = 0;
            timer = setInterval(()=>{
            sec++;
            console.log(sec);
        }, 1000) // each 1 
        })()
      }

      function stopMusic() {
        clearInterval(timer);
        audio.pause();
        console.log("Pause!");
      }

      