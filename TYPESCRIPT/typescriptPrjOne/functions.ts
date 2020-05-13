function add(n1:number,n2:number){
    return n1+n2;
}
function printResult(num:number):void{
    console.log('Result is: '+num);
}

function addAndHandle(n1:number,n2:number,cb:(num:number)=>void){
let result=n1+n2;
cb(result);
//const ress=cb(result);
//console.log('::::'+ress);
}


//let combiner:Function;
let combiner:(a:number,b:number) => number;
combiner=add;
console.log(add(1,2));
addAndHandle(10,20,(result)=>{
console.log('Result:::'+result);
//return result;
});