var min =60;
var sec =60;
var msec =100;
var interval;

var minHead = document.getElementById("min");
var secHead = document.getElementById("sec");
var msecHead = document.getElementById("msec");
var btn=document.getElementById("btn");
var interval;       

function timer(){
interval=setInterval(startTimer,10);                                   
}
function startTimer(){
    btn.disabled=true;       
    msec--;
    msecHead.innerHTML=msec; 
    if(msec<=1){
        sec--;
        secHead.innerHTML=sec;
        msec=100; 
    }
    else if(sec<=1){
        min--;
        minHead.innerHTML=min;
        sec=60;      
    }
}

function stopTimer(){
    clearInterval(interval);
    btn.disabled=false; 
}

function reset(){
    min=0;
    sec=60;
    msec=0;
    minHead.innerHTML=min;
    secHead.innerHTML=sec;
    msecHead.innerHTML=msec;  
    stopTimer();    
}