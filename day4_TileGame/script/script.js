let container = document.getElementById('container');

let clickedTile = 0;

let array = [];
startInterval = () => {
    goofy = window.setInterval(Color,200);
  }

stopInterval = () => {
 window.clearInterval(goofy);
}

Color = () =>{
    let ran = Math.floor(Math.random() * 16);
    if(array.every(num => num != ran)){
        tile = container.getElementsByTagName('div')[ran].style.backgroundColor='red';
        array.push(ran);
    }
    else{
        Color();
        if(array.length===16){
            stopInterval();
            
            window.location.assign("result.html");
        }
    }
    console.log(array);
}

numberCheck = () => {
    for( let i = 0; i < array.length; i++){ 
    
        if ( array[i] === clickedTile) { 
    
            array.splice(i, 1); 
            container.getElementsByTagName('div')[clickedTile].style.backgroundColor='white';
        }
    
    }
    console.log(array);
    return array;
}

startTimer = () => {
    interval = window.setInterval(Timer,10);
  }

stopTimer = () => {
 window.clearInterval(interval);
}
let seconds = 0;
let hundreds = 0;
let minutes = 0;
Timer = () =>{
    hundreds++;
    if(hundreds > 99){
        hundreds = 0;
        seconds++;
    }

    if(seconds > 59){
        seconds = 0;
        minutes++;
    }
    let time = document.getElementById('time');
    if(seconds<10){
    time.innerHTML=`${minutes}:0${seconds}:${hundreds}`;
    } else{
        
    time.innerHTML=`${minutes}:${seconds}:${hundreds}`;
    }
}

startTimer();

let clicked = document.getElementsByTagName('div');
document.addEventListener('click', console.log(clicked))
 startInterval();


$(".tile").click(function() {
    clickedTile = $(this).index();
    console.log(clickedTile);
    numberCheck();
});