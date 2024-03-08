function myFunc(){
    var circle=document.getElementById('circle');
    circle.style.opacity=0.5;

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
        circle.style.opacity=opacity-0.1;

        if(opacity==0){
            circle.removeEventListener('click',loseTransparency);
            circle.addEventListener('click',gainTransparency);
        }
    }
    circle.addEventListener('click',loseTransparency);
}

document.addEventListener('DOMContentLoaded',myFunc);