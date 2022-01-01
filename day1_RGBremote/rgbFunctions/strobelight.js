caramelDansen = () => {
    let redRan = Math.floor(Math.random()*255);
    let greRan = Math.floor(Math.random()*255);
    let bluRan = Math.floor(Math.random()*255);
    //let opRan = Math.random()*1;
    let red = redRan;
    let green = greRan;
    let blue = bluRan; 
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.background = `${rgba}`;
    console.log(document.body.style.backgroundColor);
};
startCaramel = () => {
    interval = window.setInterval(caramelDansen, 250);
  }

stopCaramel = () => {
let stop = window.clearInterval(interval);
}

let smlred = 0;
smoothLight = () =>{
    let green = 0;
    let blue = 0; 
    let op = 1;
    let rgba = `rgba(${smlred},${green},${blue},${op})`;
    document.body.style.background = `${rgba}`;
    console.log(document.body.style.backgroundColor);
    smlred++;
}

startSmooth = () => {
    interval = window.setInterval(smoothLight, 50);
}

stopSmooth = () => {
    let stop = window.clearInterval(interval);
}






let caramel = document.getElementById("carameldansen");
caramel.addEventListener('mousedown', stopSmooth);
caramel.addEventListener('mousedown', startCaramel);
let smooth = document.getElementById("smooth");
smooth.addEventListener('mousedown', stopCaramel);
smooth.addEventListener('mousedown', startSmooth);