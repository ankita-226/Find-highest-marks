const result = document.getElementById("result");
const form = document.getElementById("form");

const button = document.getElementById("button");
button.addEventListener("click",  function(event) {
    event.preventDefault();
    // const marks = [
    // parseInt(document.querySelector(`#Number1`).value),
    // parseInt(document.querySelector(`#Number2`).value),
    // parseInt(document.querySelector(`#Number3`).value),
    // parseInt(document.querySelector(`#Number4`).value),
    // parseInt(document.querySelector(`#Number5`).value)
    // ]
    const marks =[]
    for(let i=1;i<=5;i++){
        const mark = parseInt(document.querySelector(`#Number${i}`).value)
        marks.push(mark)
    }
    
    
    const highestMarks = Math.max(...marks)
    const studentIndex = marks.findIndex(mark=>mark===highestMarks)+1;
    const studentName =`student ${studentIndex}`
    const res = isNaN(highestMarks)?"Please enter valid marks":`${studentName} scored the highest marks:${highestMarks}`
    result.innerText = res;
})
