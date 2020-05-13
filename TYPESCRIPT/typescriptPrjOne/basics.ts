const add=(number1:number,number2:number,printResult:boolean,phrase:string)=>{
    //if(typeof number1!=="number" || typeof number2!=="number" ){
     //   throw new Error("Invalid Input Type");
    //}

    //return number1+number2;
    const result=number1+number2;
    if(phrase && printResult){
        console.log(phrase+result);
    }else{
        return result;
    }
}
let num1:number;
num1=5;
//const num1=7;
const num2=16;
const printResult=true;
const phrase="Result is:"

add(num1,num2,printResult,phrase);


