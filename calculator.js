
let numberOne = "";
let operator = "";
let numberTwo = "";

function calculator(string) {

    for (i = 0; i < string.length; i++) {
 
        let char = string[i];
   
        if(isNaN(char) === true && char != " "){
            operator = `${operator}${char}`;
        } else if(char === " "){
            continue;
        } else if(isNaN(char) === false && operator.length === 0){
            numberOne = `${numberOne}${char}`
        } else if(isNaN(char) === false && operator.length >= 1) 
            numberTwo = `${numberTwo}${char}`

    }
  
     if(operator === '+'){
        return +numberOne + +numberTwo
    }
    else if(operator === '-'){
        return +numberOne - +numberTwo
    }
    else if(operator === '*'){
        return +numberOne * +numberTwo
    }
    else if(operator === '/'){
        return +numberOne / +numberTwo
    }
   
}



console.log(calculator("2 + 5 "));




   