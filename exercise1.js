function myFunc(){
    var circle=document.getElementById('circle');

    function change(){
        circle.style.backgroundColor='blue';
    }
    circle.addEventListener('click',change);
}

document.addEventListener('DOMContentLoaded',myFunc);