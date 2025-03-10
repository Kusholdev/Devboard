
document.getElementById("btn-1").addEventListener("click",function(){
    
   
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
        document.getElementById("body").style.background = randomColor;
})