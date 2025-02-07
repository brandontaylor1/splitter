const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");
const tip = document.querySelector("#tip-amount");
const total = document.querySelector("#total-amount");

const tipButtons = document.querySelectorAll('.tip-button')

const calculateBtn = document.querySelector("#calculate-button");

let billAmount
let tipPercentage
let numberOfPeople
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
        peopleError.textContent = "Please enter a valid number";
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
    const calculatedTip = (bill * tipCalculated) / people
    console.log(calculatedTip)
    tipAmount = calculatedTip
    tip.innerText = `$${tipAmount.toFixed(2)}`
}

function calculateTotalAmount(bill, tipAmount, people) {
    const totalBill = (bill + tipAmount) / people
    console.log(totalBill); 
    billAmount = totalBill
    total.innerText = `$${totalBill.toFixed(2)}`
}

calculateBtn.addEventListener("click", () => {
    console.log("Connected")
    calculateTipAmount(billAmount, tipPercentage, numberOfPeople)
    calculateTotalAmount(billAmount, tipAmount, numberOfPeople)
    calculateBtn.innerText = "RESET"

    // Reset the values
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
})


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})

peopleInput.addEventListener("input", () => {
    console.log(peopleInput.value);
    validatePeople(peopleInput.value);
})



