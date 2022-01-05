let fi = window.localStorage.getItem('score');
let mi = window.localStorage.getItem('minutes');
let se = window.localStorage.getItem('seconds');
let hu = window.localStorage.getItem('hundreds');
document.getElementById('resultscore').innerHTML = `Your score: ${fi} points`;

if(se<10){
    document.getElementById('resulttime').innerHTML = `Your time: 0${mi}:0${se}:${hu}`;
} else{
    document.getElementById('resulttime').innerHTML = `Your time: 0${mi}:${se}:${hu}`;
}