const calculatorDisplay = document.querySelector(".calculatorDisplay");
const calculatorButtons = document.querySelectorAll(".calculatorButtons");
calculatorDisplay.textContent = 0;
let placeHolder = "";
let operand = "";

calculatorButtons.forEach(element =>{
    element.addEventListener("click", e => {
    if(calculatorDisplay.textContent == 0){calculatorDisplay.textContent="";}
       let buttonID = e.target.id;
        switch (buttonID){
                case "zero":
                    calculatorDisplay.textContent += 0;
                break;
                case "one":
                    calculatorDisplay.textContent += 1;
                break;
                case "two":
                    calculatorDisplay.textContent += 2;
                break;
                case "three":
                    calculatorDisplay.textContent += 3;
                break;
                case "four":
                    calculatorDisplay.textContent += 4;
                break;
                case "five":
                    calculatorDisplay.textContent += 5;
                break;
                case "six":
                    calculatorDisplay.textContent += 6;
                break;
                case "seven":
                    calculatorDisplay.textContent += 7;
                break;
                case "eight":
                    calculatorDisplay.textContent += 8;
                break;
                case "nine":
                    calculatorDisplay.textContent += 9;
                break;
                case "clear":
                    calculatorDisplay.textContent = "0";
                    operand = "";
                    firstSet = "";
                    secondSet = "";
                break;
                case "del":
                    placeHolder = calculatorDisplay.textContent.split("");  
                    let i = placeHolder.length - 1;
                    if(placeHolder[i] == "x" || placeHolder[i] == "/" || placeHolder[i] == "-" || placeHolder[i] == "+"){
                    operand = "" }
                    placeHolder.splice(-1,1);
                    let newDisplay = placeHolder.join("");
                    console.log(newDisplay)
                    calculatorDisplay.textContent = newDisplay;
                break;
                case "multiply":
                    if(!calculatorDisplay.textContent=="0" && operand == ""){
                        operand = "x";
                        calculatorDisplay.textContent += operand;
                    }
                    if(!calculatorDisplay.textContent=="0" && operand !== "x"){
                        placeHolder = calculatorDisplay.textContent;
                        let changeOperand = placeHolder.replace(/[/+-]/g, "x");
                        calculatorDisplay.textContent = changeOperand;
                        operand = "x";
                        placeHolder="";}
                break;
                case "divide":
                    if(!calculatorDisplay.textContent=="0" && operand == ""){
                        operand = "/";
                        calculatorDisplay.textContent += operand;
                    }
                    if(!calculatorDisplay.textContent=="0" && operand !== "/"){
                        placeHolder = calculatorDisplay.textContent;
                        let changeOperand = placeHolder.replace(/[x+-]/g, "/");
                        calculatorDisplay.textContent = changeOperand;
                        operand = "/";
                        placeHolder="";}
                   
                break;
                case "sum":
                    if(!calculatorDisplay.textContent=="0" && operand == ""){
                        operand = "+";
                        calculatorDisplay.textContent += operand;
                    }
                    if(!calculatorDisplay.textContent=="0" && operand !== "+"){
                        placeHolder = calculatorDisplay.textContent;
                        let changeOperand = placeHolder.replace(/[/x-]/g, "+");
                        calculatorDisplay.textContent = changeOperand;
                        operand = "+";
                        placeHolder="";}
                   
                break;
                case "subtract":
                    if(!calculatorDisplay.textContent=="0" && operand == ""){
                        operand = "-";
                        calculatorDisplay.textContent += operand;
                    }
                    if(!calculatorDisplay.textContent=="0" && operand !== "-"){
                        placeHolder = calculatorDisplay.textContent;
                        let changeOperand = placeHolder.replace(/[/+x]/g, "-");
                        calculatorDisplay.textContent = changeOperand;
                        operand = "-";
                        placeHolder="";}
                break;
                case "equal":
                    placeHolder = calculatorDisplay.textContent;
                    let equalArray = placeHolder.split(operand);
                    let doMath;
                        if(equalArray[1] == ""){
                        } else {
                            if(operand == "x"){
                                doMath = equalArray.reduce((firstNum, secondNum)=>{
                                    return firstNum * secondNum;
                                })
                            }
                            if(operand == "/"){
                                doMath = equalArray.reduce((firstNum, secondNum) =>{
                                    let decimalFix = (firstNum / secondNum).toFixed(2);
                                    return decimalFix;
                                })
                            }
                            if(operand == "+"){
                                doMath = equalArray.reduce((firstNum, secondNum) =>{
                                    return parseInt(firstNum) + parseInt(secondNum);
                                })
                            }
                            if(operand == "-"){
                                doMath = equalArray.reduce((firstNum, secondNum) =>{
                                    return firstNum - secondNum;
                                })
                            }
                            calculatorDisplay.textContent = doMath;
                            operand = "";
                        }
                    



                break;
       }
    });
})

