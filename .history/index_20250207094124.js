const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");

const tipButtons = document.querySelectorAll('.tip-button')

let billAmount
let tipPercentage
let numberOfPeople

tipButtons.forEach(button => {
    button.addEventListener('click', () => {
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

function calculateTipAmount(billAmount, tipPercentage) {
    const tipAmount = billAmount * tipPercentage
    return tipAmount
}

function calculateTotalAmount(billAmount, tipAmount) {
    const totalBill = billAmount + tipAmount
    return totalBill
}

calculateTipAmount(billAmount, tipPercentage)
calculateTotalAmount(billAmount, tipAmount)



billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})

