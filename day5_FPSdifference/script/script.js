let pos1x = 0;
let pos2x = 0;
let pos3x = 0;

let block1 = document.getElementById('block1');
let block2 = document.getElementById('block2');
let block3 = document.getElementById('block3');

let container = document.querySelector('.container');
startInterval = () => {
    goofy = window.setInterval(moveFast,10);
  }
  startInterval2 = () => {
    goofy2 = window.setInterval(moveMed,100);
  }
  startInterval3 = () => {
    goofy3 = window.setInterval(moveSlow,250);
  }

stopInterval = () => {
 window.clearInterval(goofy);
}

moveFast = () =>{
    pos1x+= 1;
    block1.style.left = `${pos1x}px`;
    if(pos1x >= container.offsetWidth){
        pos1x=0;
        pos2x=0;
        pos3x=0;
    }
}
moveMed = () =>{
    pos2x+= 10;
    block2.style.left = `${pos2x}px`;
    
}
moveSlow = () =>{
    pos3x+= 25;
    block3.style.left = `${pos3x}px`;
}

console.log(container.offsetWidth);
startInterval();
startInterval2();
startInterval3();