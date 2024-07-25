const NumberOfBlock = document.getElementById('BlockNo').innerHTML;
const NumberOfPass  = document.getElementById('NoOfPass'); 
function HanoiFun(NumberOfBlock) {
    if (NumberOfBlock<=1) {
        return 1;
    }
    return (2*(HanoiFun(NumberOfBlock-1)))+1;
}

const Run = document.getElementById("Run");

Run.addEventListener("click",()=>{
    NumberOfPass.innerHTML=HanoiFun(NumberOfBlock);
});