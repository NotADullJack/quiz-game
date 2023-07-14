//countdown timer that starts at 30 seconds 
var timeLeft = 30;
    var elem = document.getElementById('clock');
    
    var timerId = setInterval(countdown, 1000);
    
    function countdown() {
      if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
      } else {
        elem.innerHTML = timeLeft + ' seconds remaining';
        timeLeft--;
      }
    }
    

    //subtracts time from timer when an incorrect button is clicked
  document.getElementById('wrapper').addEventListener("click",function() { 
    timeLeft -= 5
})

//counter that adds one point to total score when the correct answer is checked off
document.getElementById('correctAnswer').addEventListener("click", function() {

})










    
    


    



