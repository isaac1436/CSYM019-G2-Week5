function myFunc(){
    var circle=document.getElementById('circle');
    document.addEventListener('keydown',myKeyDown)

    function myKeyDown(){
        var positionLeft=circle.offsetLeft;
        circle.style.left=positionLeft-10+'px';
    }
    
   
}

document.addEventListener('DOMContentLoaded',myFunc);