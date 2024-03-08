function myFunc(){
    var circle=document.getElementById('circle');
    
    document.addEventListener('keydown',myKeyDown)

    function myKeyDown(event){
        if(event.keyCode==37){
            var positionLeft=circle.offsetLeft;
            circle.style.left=positionLeft-10+'px';
        }
        if(event.keyCode==38){
            var positionUp=circle.offsetTop;
            circle.style.top=positionUp-10+'px';
        }
        if(event.keyCode==39){
            var positionLeft=circle.offsetLeft;
            circle.style.left=positionLeft+10+'px';
        }
        if(event.keyCode==40){
            var positionUp=circle.offsetTop;
            circle.style.top=positionUp+10+'px';
        }
    }
    
   
}

document.addEventListener('DOMContentLoaded',myFunc);