function myFunc(){
    var button=document.getElementById("submit");
    var myInput=document.getElementById("myInput");
    var myDiv=document.getElementById("myDiv");

    function clicked(){
        alert("you typed in\""+myInput.value+"\"");
    }

    function typed(){
        myDiv.innerText=myInput.value;
    }

    button.addEventListener('click',clicked);
    myInput.addEventListener('keyup',typed);
}

document.addEventListener('DOMContentLoaded',myFunc);