const buttonElement = document.querySelectorAll("button"); 
const inputField = document.getElementById("result");

for (let i = 0; i < buttonElement.length; i++) {
    
    buttonElement[i].addEventListener("click",() =>{

        const buttonValue = buttonElement[i].textContent;

        if (buttonValue === "C") {
            clearInputField();
        }
        else if (buttonValue === "DEL") {
            deleteLastDigit();
        }
        else if (buttonValue === "=") {
            evalCalculation();
        }
        else{
            displayInField(buttonValue);
        }
    });   
}

function clearInputField(){
    inputField.value = "";
}
function deleteLastDigit(){
    let equation = inputField.value;
    equation = equation.substring(0 , equation.length-1); 
    inputField.value = equation;

}
function evalCalculation(){
    inputField.value = eval(inputField.value);
}
function displayInField(buttonValue){
    inputField.value += buttonValue;

    console.log(inputField.value);
}

