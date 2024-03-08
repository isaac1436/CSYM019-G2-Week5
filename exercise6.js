function myFunc(){
    var circle=document.getElementById('circle');
    circle.style.opacity=1;

    function gainTransparency(){
        circle.style.backgroundColor='blue';
        var opacity=parseFloat(circle.style.opacity);
        circle.style.opacity=opacity+0.1;
        if(opacity==1){
            circle.removeEventListener('click',gainTransparency);
            circle.addEventListener('click',loseTransparency);
        }
    }

    function loseTransparency(){
        circle.style.backgroundColor='blue';  
        var opacity=parseFloat(circle.style.opacity);
        circle.style.opacity=opacity-0.01;

        if(opacity==0){
            circle.removeEventListener('click',loseTransparency);
            circle.addEventListener('click',gainTransparency);
        }
    } 
    function intervalSet(){
        //setInterval(loseTransparency,1000);
        setInterval(loseTransparency,10);
    }
    circle.addEventListener('click',intervalSet);
   
}

document.addEventListener('DOMContentLoaded',myFunc);