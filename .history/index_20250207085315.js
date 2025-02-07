const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");
const 



function validateNumber(input) {
    if(typeof input === "number" && !isNaN(input)) {
        console.log("Valid number");
        return true
    } else {
        console.log("Invalid input. Please enter a valid number");
        return false
    }
}


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
    validateNumber(billInput.value); 
})