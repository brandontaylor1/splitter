const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const peopleError = document.querySelector("#people-error");




function validateNumber(input) {
    if(typeof input === "number" && !isNaN(input)) {
        console.log("Valid number");
        return true
    } else {
        console.log("Invalid input. Please enter a valid number");
        peopleError.textContent = "Please enter a valid number"
        return false
    }
}


billInput.addEventListener("input", () => {
    console.log(billInput.value); 

    validateNumber(billInput.value); 
}