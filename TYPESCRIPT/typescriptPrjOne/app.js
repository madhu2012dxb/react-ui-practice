var userInput;
var userName;
userInput = 5;
userInput = "Str";
//userName=userInput
if (typeof userInput === 'string') {
    userName = userInput;
}
function generateError(messageStr, erroCodeNum) {
    //  try{
    throw { message: messageStr, errorCode: erroCodeNum };
    //    }catch(err){
    //        console.log(err);
    //    }
}
generateError("Test", 500);
