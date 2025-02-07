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
    const tipAmount = (bill * tipCalculated) / people
    console.log(tipAmount)
    tip.innerText = `$${tipAmount.toFixed(2)}`
}

function calculateTotalAmount(bill, tipAmount) {
    const totalBill = bill + tipAmount
    console.log(totalBill); 
    return totalBill
}

calculateBtn.addEventListener("click", () => {
    console.log("Connected")
    calculateTipAmount(billAmount, tipPercentage, numberOfPeople)
    calculateTotalAmount(billAmount, tipAmount)
})


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})

peopleInput.addEventListener("input", () => {
    console.log(peopleInput.value);
    validatePeople(peopleInput.value);
})



