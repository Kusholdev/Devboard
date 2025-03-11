
document.getElementById("complete-1").addEventListener("click",function(){
 alert("Board Update Successfully");

 const task = document.getElementById("task-decrement").innerText;
   const convertedTask = parseInt(task);

   const nav = document.getElementById("nav-increment").innerText;
   const convertedNav = parseInt(nav);


   const decrement = convertedTask - 1;
   const increment = convertedNav + 1;


   document.getElementById("task-decrement").innerText= decrement;
   document.getElementById("nav-increment").innerText = increment;

})