function myFunc(){
    var circle=document.getElementById('circle');
    circle.style.opacity=0.5;

    function change(){
        circle.style.backgroundColor='blue';
        circle.style.opacity=1;
    }
    circle.addEventListener('click',change);
}

document.addEventListener('DOMContentLoaded',myFunc);