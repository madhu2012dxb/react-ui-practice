//! at the element end indicates element will not null to say typescript
var button = document.querySelector("button");
var input1 = document.getElementById("num1");
var input2 = document.getElementById("num2");
//KIND OF TYPE CASTING HTMLELEMENT TO HTMLIPUTELEMENT
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log("adding numbers," + input1.value + "," + input2.value + ":" + add(+input1.value, +input2.value));
});
