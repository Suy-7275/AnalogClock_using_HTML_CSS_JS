let hr=document.getElementById("hour");
let min=document.getElementById("min");
let sec=document.getElementById("sec");

function displayTime(){

    let date= new Date();
     let h=date.getHours();
     let m=date.getMinutes();
     let s=date.getSeconds();

     let hourRotation = 30*h +m/2;
     let mintueRotation = 6*m;
     let secondRotation = 6*s;

     hr.style.transform=`rotate(${hourRotation}deg)`;
     min.style.transform=`rotate(${mintueRotation}deg)`;
     sec.style.transform=`rotate(${secondRotation}deg)`;

}
setInterval(displayTime, 1000);