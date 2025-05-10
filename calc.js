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