import React from "react";



function TableTimer(duration, display) {
    var timer = duration, minutes, seconds;
    setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        }
    }, 1000);


 function TimerFace() {
    var fiveMinutes = 60,
        display = document.getElementById('#time');
    TableTimer(fiveMinutes, display);
   
 }
    return(
        
        <body>
            <div id="time">
            <button type="button" onClick={TimerFace}>Guests Started Eating</button>
            </div>
        </body>
    
    )
        
};
export default TableTimer;