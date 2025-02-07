const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");

const tipButtons = document.querySelectorAll('.tip-button')

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

        return button.value
    })
})

function validateAmount(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const dollarAmount = parseFloat(input);
        billAmount = dollarAmount;
        console.log("Valid Amount");
    } else {
        console.log("Invalid input. Please enter a valid number");
        peopleError.textContent = "Please enter a valid number";
    }
}

function validatePeople(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const people = parseFloat(input);
        numberOfPeople = people;
        console.log("Valid Amount");
    } else {
        console.log("Invalid input. Please enter a valid number");
        peopleError.textContent = "Please enter a valid number";
    }
}

function calculateTipAmount(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage
    console.log(tipAmount)
    return tipAmount
}

function calculateTotalAmount(billAmount, tipAmount) {
    const totalBill = billAmount + tipAmount
    console.log(totalBill); 
    return totalBill
}

console.log(calculateTipAmount(billAmount, tipPercentage))
console.log(calculateTotalAmount(billAmount, tipAmount))



billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})

