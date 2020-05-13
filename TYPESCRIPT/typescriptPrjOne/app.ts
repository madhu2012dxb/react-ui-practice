let userInput:unknown;
let userName:string;


userInput=5;
userInput="Str";
//userName=userInput
if(typeof userInput === 'string'){
    userName=userInput;
}

function generateError(messageStr:string,erroCodeNum:number):never{
  //  try{
      throw {message:messageStr,errorCode:erroCodeNum};
 //    }catch(err){
 //        console.log(err);
 //    }
}

generateError("Test",500);
