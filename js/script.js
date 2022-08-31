const mainDisplayText = document.querySelector("#numbersSumDisplay");
const operationDisplayText = document.querySelector("#operationDisplay");
const calcNumber = document.querySelectorAll("#numBtn");
const operator =  document.querySelectorAll("#operatorBtn");
const equalTo = document.getElementById("equalBtn");
const clearLast = document.getElementById("clearBtn");
const reset = document.getElementById("resetBtn");



class MainCalculator {
    constructor(operationDisplayText, mainDisplayText){
        this.operationDisplayText = operationDisplayText;
        this.mainDisplayText = mainDisplayText;
        this.resetAll();
    }

    clearPrevious(){
        this.mainDisplay = this.mainDisplay.toString().slice(0,-1)
    }

    resetAll(){
        this.mainDisplay = "";
        this.operationDisplay = "";
        this.operator = undefined
    }

    attachNumber(number){
        if (number === "." && this.mainDisplay.includes(".")) return;
        this.mainDisplay = this.mainDisplay.toString() + number.toString();
    }

    selectOperator(operation){
        if(this.mainDisplay === " ") return;
        if (this.operationDisplay !== ""){
            this.calculate();
        }
        this.operation = operation;
        this.operationDisplay = this.mainDisplay;
        this.mainDisplay = "";
    }

    calculate(){
        let calculation;
        const oldNumber = parseFloat(this.operationDisplay);
        const newNumber = parseFloat(this.mainDisplay);
        if (isNaN(oldNumber) || isNaN(newNumber)) return;
        switch(this.operation){
            case "+":
                calculation = oldNumber + newNumber
                break; 
                case "-":
                calculation = oldNumber - newNumber
                break; 
                case "x":
                calculation = oldNumber * newNumber
                break; 
                case "/":
                calculation = oldNumber / newNumber
                break; 
                case "%":
                calculation = oldNumber % newNumber
                break; 
            default: return;
        }
        this.mainDisplay = calculation;
        this.operation = undefined;
        this.operationDisplay = " ";
    }

    helpUpdateScreen(number){
        const stringedNum = number.toString();
        const integerNum = parseFloat(stringedNum.split(".")[0]);
        const decimalNum = stringedNum.split(".")[1];
        let integerText;
        if (isNaN(integerNum)) {
            integerText = " ";
        } else {
            integerText = integerNum.toLocaleString( "en", {
                maximumFractionDigits: 0
            })
        }   
        if (decimalNum != null){
            return `${integerText}.${decimalNum}`
        } else {
            return integerText;
        }   
    }

    updateScreen(){
        this.mainDisplayText.innerText = this.helpUpdateScreen(this.mainDisplay);
        if(this.operation != null){
            this.operationDisplayText.innerText = 
            `${this.helpUpdateScreen(this.mainDisplay)} ${this.operation}`
        } else{
            this.operationDisplayText.innerText = " ";
        }
    }

    
}

 

const calculator = new MainCalculator(operationDisplayText, mainDisplayText);

calcNumber.forEach( button => {
    button.addEventListener( "click", () => {        
        calculator.attachNumber(button.innerText);
        calculator.updateScreen();
    })
});

operator.forEach( button => {
    button.addEventListener( "click", () => {        
        calculator.selectOperator(button.innerText);
        calculator.updateScreen();
    })
});

equalTo.addEventListener( "click", button => {
    calculator.calculate();
    calculator.updateScreen();
})

reset.addEventListener( "click", button => {
    calculator.resetAll();
    calculator.updateScreen();
})

clearLast.addEventListener( "click", button => {
    calculator.clearPrevious();
    calculator.updateScreen();
})


// Toggle Switch codes
let toggleSwitch = document.getElementsByClassName('redButton')[0];
 const bodyElement = document.body;
 const firstTheme = localStorage.getItem("firstTheme");
 const secondTheme = localStorage.getItem("secondTheme");
 const thirdTheme = localStorage.getItem("thirdTheme");


 if(firstTheme){
  bodyElement.classList.add("theme1")
} 

if(secondTheme){
  bodyElement.classList.add("theme2")
} 

if(thirdTheme){
  bodyElement.classList.add("theme3")
}



        function theme1() {
            toggleSwitch.classList.add('horizTranslate1');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            bodyElement.classList.toggle("theme1" );
            if(bodyElement.classList.contains("theme1")){
               localStorage.setItem("firstTheme", "themeActive");
            } else{
               localStorage.removeItem("firstTheme");
            }
                      
           
        }

        function theme2() {
            toggleSwitch.classList.add('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate1');
            bodyElement.classList.toggle("theme2");        
            if(bodyElement.classList.contains("theme2")){
               localStorage.setItem("secondTheme", "themeActive");
            } else{
               localStorage.removeItem("secondTheme");
            }
            
        }

        function theme3() {
            toggleSwitch.classList.add('horizTranslate3');
            toggleSwitch.classList.remove('horizTranslate2');
            toggleSwitch.classList.remove('horizTranslate1');
            bodyElement.classList.toggle("theme3");         
            if(bodyElement.classList.contains("theme3")){
               localStorage.setItem("thirdTheme", "themeActive");
            } else{
               localStorage.removeItem("thirdTheme");
            }            
        }


       


