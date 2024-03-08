function myFunc(){
    var circle=document.getElementById('circle');
    
    document.addEventListener('keydown',myKeyDown)

    function myKeyDown(event){
        console.log(event.keyCode);
        if(event.keyCode==37){
            var positionLeft=circle.offsetLeft;
            circle.style.left=positionLeft-10+'px';
        }
    }
    
   
}

document.addEventListener('DOMContentLoaded',myFunc);