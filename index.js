/*var audio = document.createElement('audio');
audio.setAttribute('src','soung.mp3');
audio.loop=true;
audio.play();*/

  //car=document.getElementById("cr");
//var car=document.querySelector('.car');
//var anidur = parseFloat(window.getComputedStyle(document.getElementById("cr")).getPropertyValue('animation-duration'));
/*document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38)
    {
    setInterval(()=>{
        anidur = parseFloat(window.getComputedStyle(document.getElementById("cr")).getPropertyValue('animation-duration'));
        if(anidur>0.1)
        {
            newdur =anidur-0.1;
        }
      
        document.getElementById("cr").style.animationDuration = newdur + 's';
        console.log(anidur,newdur)
    },500);

}
}*/
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38)
    {
setTimeout(()=>{
    anidur = parseFloat(window.getComputedStyle(document.getElementById("cr")).getPropertyValue('animation-duration'));
    if(anidur>0.1)
    {
        newdur =anidur-0.01;
    }
    document.getElementById("cr").style.animationDuration = newdur + 's';
    console.log(anidur,newdur)
},500);  
    }
    if (e.keyCode == 39)
    {
setTimeout(()=>{
    anidur = parseFloat(window.getComputedStyle(document.getElementById("cr1")).getPropertyValue('animation-duration'));
    if(anidur>0.1)
    {
        newdur =anidur-0.01;
    }
    document.getElementById("cr1").style.animationDuration = newdur + 's';
    console.log(anidur,newdur)
},500);  
    }
}  
