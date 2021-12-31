turnRed = () => {
    let red = 255;
    let green = 0;
    let blue = 0; 
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.backgroundColor = `${rgba}`;
    console.log(document.body.style.backgroundColor);
};

turnGreen = () => {
    let red = 0;
    let green = 255;
    let blue = 0; 
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.backgroundColor = `${rgba}`;
    console.log(document.body.style.backgroundColor);
};

turnBlue = () => {
    let red = 0;
    let green = 0;
    let blue = 255; 
    let op = 1;
    let rgba = `rgba(${red},${green},${blue},${op})`;
    document.body.style.backgroundColor = `${rgba}`;
    console.log(document.body.style.backgroundColor);
};

let red = document.getElementById("red");
red.addEventListener('mousedown', turnRed);
red.addEventListener('mousedown', stopCaramel);
red.addEventListener('mousedown', stopSmooth);
let green = document.getElementById("green");
green.addEventListener('mousedown', turnGreen);
green.addEventListener('mousedown', stopCaramel);
green.addEventListener('mousedown', stopSmooth);
let blue = document.getElementById("blue");
blue.addEventListener('mousedown', turnBlue);
blue.addEventListener('mousedown', stopCaramel);
blue.addEventListener('mousedown', stopSmooth);