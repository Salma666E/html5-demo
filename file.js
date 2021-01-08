var icon =document.getElementById("icon");
var spn =document.getElementById("spn");
icon.addEventListener("click",function(){
    document.getElementById("icon").style.display="none"; 
    document.getElementById("spn").style.display="none"; 
    document.getElementById("float").style.width = '200px';

});
document.getElementById("im").addEventListener("click",function(){  
    document.getElementById("float").style.width = '500px';
    setTimeout(function(){
        document.getElementById("icon").style.display="inline"; 
        document.getElementById("spn").style.display="inline";
    },800);
});