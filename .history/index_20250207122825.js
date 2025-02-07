const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");
const tipButtons = document.querySelectorAll('.tip-button')

const calculateBtn = document.querySelector("#calculate-button");
const resetBtn = document.querySelector("#reset-button");
const formError = document.querySelector('#form-error')
const peopleError = document.querySelector("#people-error");
const billError = document.querySelector('#bill-error')
const tipError = document.querySelector('#tip-error')

// let billAmount
// let tipPercentage
// let numberOfPeople
let tipAmount
let totalBill

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
        if(button.classList.contains('active')) {
            button.classList.remove('active')
        } else {
            button.classList.add('active')
        }
        tipPercentage = button.value
        console.log(tipPercentage)
        return tipPercentage
    })
})

function validateAmount(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const dollarAmount = parseFloat(input);
        billAmount = dollarAmount;
        console.log(billAmount);
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
    if(!bill || !tipCalculated || !people) {
        return
    }
    const calculatedTip = (bill * tipCalculated) / people
    console.log(calculatedTip)
    tipAmount = calculatedTip
    tip.innerText = `$${tipAmount.toFixed(2)}`
}

function calculateTotalAmount(bill, tipAmount, people) {
    if(!bill || !tipAmount || !people) {
        return
    }
    const totalBill = (bill + tipAmount) / people
    console.log(totalBill); 
    billAmount = totalBill
    total.innerText = `$${totalBill.toFixed(2)}`
}

calculateBtn.addEventListener("click", () => {    
    let hasError = false;
    
    if(hasError) {
        formError.innerText = "Please fill out all fields"
    } else {
        formError.innerText = ""
    }

    if (billAmount === undefined || billAmount === "") {
        billError.innerText = "Please enter a bill amount";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        billError.innerText = "";
    }

    if (tipPercentage === undefined || tipPercentage === "") {
        tipError.innerText = "Please select a tip percentage";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        tipError.innerText = "";
    }

    if (numberOfPeople === undefined || numberOfPeople === "") {
        peopleError.innerText = "Please enter a valid number";
        hasError = true;
        tip.innerText = "$0.00";
        total.innerText = "$0.00";
    } else {
        peopleError.innerText = "";
    }

    calculateTipAmount(billAmount, tipPercentage, numberOfPeople)
    calculateTotalAmount(billAmount, tipAmount, numberOfPeople)

    calculateBtn.disabled = true;

})

resetBtn.addEventListener("click", () => {
    billInput.value = ""
    peopleInput.value = ""
    tipAmount = 0
    totalBill = 0
    tip.innerText = "$0.00"
    total.innerText = "$0.00"
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



