const NumberOfBlock = document.getElementById('BlockNo').innerHTML;
const NumberOfPass  = document.getElementById('NoOfPass'); 
function HanoiFunc(NumberOfBlock) {
    if (NumberOfBlock<=1) {
        return 1;
    }
    return (2*(HanoiFunc(NumberOfBlock-1)))+1;
}

const Run = document.getElementById("Run");

Run.addEventListener("click",()=>{
    NumberOfPass.innerHTML=HanoiFunc(NumberOfBlock);
});