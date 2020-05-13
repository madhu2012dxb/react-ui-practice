//! at the element end indicates element will not null to say typescript

const button=document.querySelector("button");
const input1=document.getElementById("num1") as HTMLInputElement;
const input2=document.getElementById("num2") as HTMLInputElement;
//KIND OF TYPE CASTING HTMLELEMENT TO HTMLIPUTELEMENT

function add(num1:number,num2:number):number{
        return num1+num2;
}

button.addEventListener("click",()=>{
    console.log("adding numbers,"+input1.value+","+input2.value+":"+add(+input1.value,+input2.value));
})
