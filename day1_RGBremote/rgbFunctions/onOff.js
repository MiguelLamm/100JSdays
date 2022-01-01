turnOn = () => {
    let red = 255;
    let green = 0;
    let blue = 0; 
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.backgroundColor = `${rgba}`;
    console.log(document.body.style.backgroundColor);
    
    //let timer = setTimeout(turnOff,3000);
};
turnOff = () => {
    let red = 255;
    let green = 0;
    let blue = 0; 
    let op = 0;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.backgroundColor = `${rgba}`;
    console.log(document.body.style.backgroundColor);
};

let btnOn = document.getElementById("on");
btnOn.addEventListener('mousedown', turnOn);
btnOn.addEventListener('mousedown', stopCaramel);
btnOn.addEventListener('mousedown', stopSmooth);
let btnOff = document.getElementById("off");
btnOff.addEventListener('mousedown', turnOff);
btnOff.addEventListener('mousedown', stopCaramel);
btnOff.addEventListener('mousedown', stopSmooth);