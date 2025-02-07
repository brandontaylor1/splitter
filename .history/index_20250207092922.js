const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");

const tipButtons = document.querySelectorAll('.tip-button')
tipButtons.map((button) => {
    console.log(button);
})



function validateAmount(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        const dollarAmount = parseFloat(input);
        console.log(typeof dollarAmount);



        // const dollarAmount = input.value.toFixed(2)
        console.log("Valid Amount");
    } else {
        console.log("Invalid input. Please enter a valid number");
        peopleError.textContent = "Please enter a valid number";
    }
}


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateAmount(billInput.value); 
})
