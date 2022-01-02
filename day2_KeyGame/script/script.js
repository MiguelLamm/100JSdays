let direction = 1;
let count = 0;
let score = 0;
let arrow = document.getElementById('arrow');
let txt = document.getElementById('score');
let key = 0;
// > 39 ^ 38 < 37 v 40
window.onload = () => {
    let ran = Math.floor(Math.random() * 4);
    switch (ran) {
        case 0:
            arrow.style.transform = `rotate(0deg)`;
            direction = 0;
            break;
        case 1:
            arrow.style.transform = `rotate(90deg)`;
            direction = 1;
            break;
        case 2:
            arrow.style.transform = `rotate(180deg)`;
            direction = 2;
            break;
        case 3:
            arrow.style.transform = `rotate(270deg)`;
            direction = 3;
            break;
    }
}

document.onkeydown = (e) => {
    key = e.keyCode;
    check();
    if (key === 37 || key === 38 || key === 39 || key === 40) {
        //console.log(`key pressed: ${e.keyCode}`);
        let ran = Math.floor(Math.random() * 4);
        //console.log(ran);
        switch (ran) {
            case 0:
                arrow.style.transform = `rotate(0deg)`;
                direction = ran;
                count++
                break;
            case 1:
                arrow.style.transform = `rotate(90deg)`;
                direction = ran;
                count++
                break;
            case 2:
                arrow.style.transform = `rotate(180deg)`;
                direction = ran;
                count++
                break;
            case 3:
                arrow.style.transform = `rotate(270deg)`;
                direction = ran;
                count++
                break;
        }
        if(count===1){
            startTimer();
        }
        bop();
        changeBG();
        console.log(count);

        if (count === 30) {
            stopTimer();
            localStorage.setItem('minutes', minutes);
            localStorage.setItem('seconds', seconds);
            localStorage.setItem('hundreds', hundreds);
            localStorage.setItem('score', score);
            window.location.assign("result.html");
        }
    }
};

changeBG = () => {
    let redRan = Math.floor(Math.random() * 255);
    let greRan = Math.floor(Math.random() * 255);
    let bluRan = Math.floor(Math.random() * 255);
    //let opRan = Math.random()*1;
    let red = redRan;
    let green = greRan;
    let blue = bluRan;
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.background = `${rgba}`;
    //console.log(document.body.style.backgroundColor);
}

check = () => {
    if (key === 37 || key === 38 || key === 39 || key === 40) {
        if (direction === 0 && key === 39) {
            score += 10;
            txt.innerHTML = `Your score: ${score}`;
        } else if (direction === 1 && key === 40) {
            score += 10;
            txt.innerHTML = `Your score: ${score}`;
        } else if (direction === 2 && key === 37) {
            score += 10;
            txt.innerHTML = `Your score: ${score}`;
        } else if (direction === 3 && key === 38) {
            score += 10;
            txt.innerHTML = `Your score: ${score}`;
        } else {
            score -= 15;
            txt.innerHTML = `Your score: ${score}`;
        }
    }
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

bop = () => {
    let timer = setInterval(frame, 5);
    let length = 550;

    function frame() {
        if (length === 500) {
            clearInterval(timer);
        } else {
            length--;
            arrow.style.width = length + 'px';
            arrow.style.height = length + 'px';
        }
    }
}



