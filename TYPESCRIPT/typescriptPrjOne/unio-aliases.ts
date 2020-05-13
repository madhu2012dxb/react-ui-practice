//union type test

//function combine(input1: string| number,input2:string|number,resConversion: 'as-number'|'as-text'){
type Combinable=string|number;
type ConversionDescriptor='as-number'|'as-text';
function combine(input1: Combinable,input2:Combinable,resConversion: ConversionDescriptor){
   
let result;
    if(typeof input2 === 'number' && typeof input1 === 'number'){
        result=input1+input2;
    }else{
        result=input1.toString() + input2.toString(); 
    }
    return result;
}
const combinedAges=combine(10,20,'as-number');
console.log("Result ages:"+combinedAges);
const combinedString=combine('M1','M2','as-text');
console.log("Result strings:"+combinedString);

