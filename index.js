

localdate = () => {
    let cc = new Date();
    let clock = cc.toLocaleTimeString();
    document.getElementById('time').innerHTML = clock;
}
var l = setInterval (  localdate , 1000);



keydown = (e) => {
    e.preventDefault();
  console.log(e.key);
}
 keyUp = (e) => {
    e.preventDefault();
//    console.log(e.key);
}

document.addEventListener('keydown' , keydown);
document.addEventListener('keyup' , keyUp);



function deleteBOX (){
   var x = document.querySelector( '.hide' );
   x.style.display = 'none';
   document.querySelector('.analogWatch').style.display = 'block';
  
}
deleteAnalog = () => {
  var x = document.querySelector( '.analogWatch' );
   x.style.display = 'none';
   document.querySelector('.hide').style.display = 'block';
}


analogClock = () => {
  var d = new Date();
  var second= d.getSeconds();
  var hour = d.getHours();
  var minute = d.getMinutes();
  
  rsecond = 6*second;
  rhour = 30*hour + minute/2 ;
  rminute = 6*minute;
  htime.style.transform = `rotate(${rhour}deg)`;
  mtime.style.transform = `rotate(${rminute}deg)`;
  stime.style.transform = `rotate(${rsecond}deg)`;


}



let time = setInterval (analogClock , 1000);











