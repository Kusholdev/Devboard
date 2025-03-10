
const dateElement =  document.getElementById("date-fix");

const currentDate = new Date();

const fixing = { weekday: 'short',month: 'short',day: '2-digit',year: 'numeric'};
dateElement.innerText = currentDate.toLocaleDateString('en-US',fixing); 