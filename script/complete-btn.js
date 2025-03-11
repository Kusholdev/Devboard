
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


   const  textContainer = document.getElementById("text-container");

    const p = document.createElement("p");
    p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
    p.innerText = `
    
    You have completed the task Fix Mobile Button Issue ${time()};
    
    `
    textContainer.appendChild(p);

  const complete= document.getElementById("complete-1") ;
  complete.disabled = true;
  complete.style.opacity = 0.5;
 
})


// 2nd
document.getElementById("complete-2").addEventListener("click",function(){
    alert("Board Update Successfully");
   
    const task = document.getElementById("task-decrement").innerText;
      const convertedTask = parseInt(task);
   
      const nav = document.getElementById("nav-increment").innerText;
      const convertedNav = parseInt(nav);
   
   
      const decrement = convertedTask - 1;
      const increment = convertedNav + 1;
   
   
      document.getElementById("task-decrement").innerText= decrement;
      document.getElementById("nav-increment").innerText = increment;
   
   
      const  textContainer = document.getElementById("text-container");
   
       const p = document.createElement("p");
       p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
       p.innerText = `
       
       You have completed the task Add Dark Mode Issue ${time()};
       
       `
       textContainer.appendChild(p);
       const complete= document.getElementById("complete-2") ;
  complete.disabled = true;
  complete.style.opacity = 0.5;
   
   
   })

//    3rd

document.getElementById("complete-3").addEventListener("click",function(){
    alert("Board Update Successfully");
   
    const task = document.getElementById("task-decrement").innerText;
      const convertedTask = parseInt(task);
   
      const nav = document.getElementById("nav-increment").innerText;
      const convertedNav = parseInt(nav);
   
   
      const decrement = convertedTask - 1;
      const increment = convertedNav + 1;
   
   
      document.getElementById("task-decrement").innerText= decrement;
      document.getElementById("nav-increment").innerText = increment;
   
   
      const  textContainer = document.getElementById("text-container");
   
       const p = document.createElement("p");
       p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
       p.innerText = `
       
       You have completed the task Optimize Home page  Issue ${time()};
       
       `
       textContainer.appendChild(p);
       const complete= document.getElementById("complete-3") ;
       complete.disabled = true;
       complete.style.opacity = 0.5;
   
   })
//    4th

document.getElementById("complete-4").addEventListener("click",function(){
    alert("Board Update Successfully");
   
    const task = document.getElementById("task-decrement").innerText;
      const convertedTask = parseInt(task);
   
      const nav = document.getElementById("nav-increment").innerText;
      const convertedNav = parseInt(nav);
   
   
      const decrement = convertedTask - 1;
      const increment = convertedNav + 1;
   
   
      document.getElementById("task-decrement").innerText= decrement;
      document.getElementById("nav-increment").innerText = increment;
   
   
      const  textContainer = document.getElementById("text-container");
   
       const p = document.createElement("p");
       p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
       p.innerText = `
       
       You have completed the task Add new emoji 🤲  Issue ${time()};
       
       `
       textContainer.appendChild(p);
   
       const complete= document.getElementById("complete-4") ;
       complete.disabled = true;
       complete.style.opacity = 0.5;
   })

//    5th

document.getElementById("complete-5").addEventListener("click",function(){
    alert("Board Update Successfully");
   
    const task = document.getElementById("task-decrement").innerText;
      const convertedTask = parseInt(task);
   
      const nav = document.getElementById("nav-increment").innerText;
      const convertedNav = parseInt(nav);
   
   
      const decrement = convertedTask - 1;
      const increment = convertedNav + 1;
   
   
      document.getElementById("task-decrement").innerText= decrement;
      document.getElementById("nav-increment").innerText = increment;
   
   
      const  textContainer = document.getElementById("text-container");
   
       const p = document.createElement("p");
       p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
       p.innerText = `
       
       You have completed the task Integrate OpenAI API  Issue ${time()};
       
       `
       textContainer.appendChild(p);
   
       const complete= document.getElementById("complete-5") ;
  complete.disabled = true;
  complete.style.opacity = 0.5;

  
   
   })

//    6th

document.getElementById("complete-6").addEventListener("click",function(){
    alert("Board Update Successfully");
    alert("Congrats!!! You have completed all the current task");
   
    const task = document.getElementById("task-decrement").innerText;
      const convertedTask = parseInt(task);
   
      const nav = document.getElementById("nav-increment").innerText;
      const convertedNav = parseInt(nav);
   
   
      const decrement = convertedTask - 1;
      const increment = convertedNav + 1;
   
   
      document.getElementById("task-decrement").innerText= decrement;
      document.getElementById("nav-increment").innerText = increment;
   
   
      const  textContainer = document.getElementById("text-container");
   
       const p = document.createElement("p");
       p.classList.add("bg-[#F4F7FF]","p-x-1","p-y-1","mt-5","rounded-lg")
       p.innerText = `
       
       You have completed the task Improve Job searching  Issue ${time()};
       
       `
       textContainer.appendChild(p);
       const complete= document.getElementById("complete-6") ;
       complete.disabled = true;
       complete.style.opacity = 0.5;
   
   })