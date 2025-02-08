const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const tipAmountElement = document.getElementById("tip-amount");
const totalAmountElement = document.getElementById("total-amount");
const tipButtons = document.querySelectorAll('.tip-button')
const tip = 

const calculateBtn = document.querySelector("#calculate-button");
const resetBtn = document.querySelector("#reset-button");
const formError = document.querySelector('#form-error')
const peopleError = document.querySelector("#people-error");
const billError = document.querySelector('#bill-error')
const tipError = document.querySelector('#tip-error')

let billAmount = 0
let tipPercentage = 0
let numberOfPeople = 0

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('active')) {
            button.classList.remove('active')
        } else {
            button.classList.add('active')
        }
        tipPercentage = button.value
        console.log(tipPercentage)
    })
})

function validateAmount(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const dollarAmount = parseFloat(input);
        billAmount = dollarAmount;
    } else {
        console.log("Invalid input. Please enter a valid number");
        billError.textContent = "Please enter a valid number";
    }
}

function validatePeople(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const people = parseFloat(input);
        numberOfPeople = people;
        console.log(numberOfPeople)
    } else {
        console.log("Invalid input. Please enter a valid number");
        peopleError.textContent = "Please enter a valid number";
    }
}

function calculateTipAmount(bill, tipCalculated, people) {
    return (bill * tipCalculated) / people
}

function calculateTotalAmount(bill, tipAmount, people) {
    return (bill + tipAmount) / people
    
}

calculateBtn.addEventListener("click", () => {    
    let hasError = false;

    // if(billAmount === undefined || tipPercentage === undefined || numberOfPeople === undefined) {
    //     formError.innerText = "Please fill out all fields";
    //     hasError = true;
    // }
    
    if (billAmount === undefined || billAmount === "" || billAmount === 0) {
        billError.innerText = "Please enter a bill amount";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        billError.innerText = "";
    }
    
    if (tipPercentage === undefined || tipPercentage === "" || tipPercentage === 0) {
        tipError.innerText = "Please select a tip percentage";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        tipError.innerText = "";
    }
    
    if (numberOfPeople === undefined || numberOfPeople === "" || numberOfPeople === 0) {
        peopleError.innerText = "Please enter a valid number";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        peopleError.innerText = "";
    }
    
    
    const tipAmount = calculateTipAmount(billAmount, tipPercentage, numberOfPeople)
    const totalAmount = calculateTotalAmount(billAmount, tipAmount, numberOfPeople)

    tipAmountElement.innerText = `$${tipAmount.toFixed(2)}`;
    totalAmountElement.innerText = `$${totalAmount.toFixed(2)}`;

    calculateBtn.disabled = true;

})

resetBtn.addEventListener("click", () => {
    billInput.value = ""
    peopleInput.value = ""
    tipAmount = 0
    totalBill = 0
    tipAmountElement.innerText = "$0.00"
    totalAmountElement.innerText = "$0.00"
    tipButtons.forEach(button => {
        button.classList.remove('active')
    })
    tipPercentage = 0
    billAmount = 0
    numberOfPeople = 0
    formError.innerText = ""
    billError.innerText = ""
    tipError.innerText = ""
    peopleError.innerText = ""

    calculateBtn.disabled = false

})

billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})

peopleInput.addEventListener("input", () => {
    console.log(peopleInput.value);
    validatePeople(peopleInput.value);
})



