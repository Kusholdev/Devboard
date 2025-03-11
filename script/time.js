
function time(){
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2,'0');
    const seconds= now.getSeconds().toString().padStart(2,'0');
    const period = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;
     
    return `${hours}:${minutes}:${seconds} ${period}`;
}