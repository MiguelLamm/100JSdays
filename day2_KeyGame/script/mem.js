let fi = window.localStorage.getItem('score');
let mi = window.localStorage.getItem('minutes');
let se = window.localStorage.getItem('seconds');
let hu = window.localStorage.getItem('hundreds');
document.getElementById('resultscore').innerHTML = `Your score: ${fi} points`;
if (fi <= 0) {
    document.getElementById('msg').innerHTML = 'Did you do it on purpose or do you just fail at everything?'
} else if (fi > 200) {
    document.getElementById('msg').innerHTML = 'AMAZING PERFORMANCE!'
} else if (0 <= fi <= 200) {
    document.getElementById('msg').innerHTML = 'Doing good, keep going!'
}
if(se<10){
    document.getElementById('resulttime').innerHTML = `Your time: 0${mi}:0${se}:${hu}`;
} else{
    document.getElementById('resulttime').innerHTML = `Your time: 0${mi}:${se}:${hu}`;
}