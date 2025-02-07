const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");




function validateNumber(input) {
    if(!isNaN(input) && input !== "" && input > 0) {
        input.toFixed = 
        console.log("Valid number");
    // } else {
    //     console.log("Invalid input. Please enter a valid number");
    //     peopleError.textContent = "Please enter a valid number";
    // }
    }
}


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateNumber(billInput.value); 
})

peopleInput.addEventListener("input", () => {
    console.log(peopleInput.value); 
    validateNumber(peopleInput.value);
})