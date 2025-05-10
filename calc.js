const add = function (a,b) {
    return a+b;
}

const subtract = function (a,b) {
    return a-b;
}

const multiply = function (a,b) {
    return a*b;
}
const divide = function (a,b) {
    return a/b;
}

let num1;
let num2;
let operator;
let snum=0;
let mainVar=0;

function operate(num1,num2,operator)
{
  switch(operator)
  {
    case "+" :
        add(num1,num2);
        break;
    case "-" :
        subtract(num1,num2);
        break;
    case "*" :
        multiply(num1,num2);
        break;        
    case "/" :
        divide(num1,num2);
        break;
  }
}
for (let i = 0; i <= 9; i++) {
    let button = document.createElement('button');
    button.textContent = i;
    document.querySelector('.digitButtons').appendChild(button);}

let button = document.createElement('button');
button.textContent ="=";
document.querySelector('.opButtons').appendChild(button);

let menu = document.querySelector(".digitButtons");
menu.addEventListener('click',(event)=>
{
    let x = event.target.textContent
    addScreen(x);
})

let screenB = document.querySelector(".screen");

function addScreen(num){
    snum = (snum * 10) + Number(num);
    screenB.innerHTML=""
    screenB.textContent=snum
    mainVar=snum
}
