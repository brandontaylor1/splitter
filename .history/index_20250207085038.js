const billInput = document.querySelector("#bill-input");
const peopleInput = document.querySelector("#number-of-people-input");



function validateNumber(input) {
    if(typeof input === "number" && !isNaN(input)) {
}


billInput.addEventListener("input", () => {
    console.log(billInput.value); 
})