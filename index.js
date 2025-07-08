

const input = document.getElementById("display");
const buttons = document.querySelectorAll(".btn, .symbolsBtn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent.trim();
        if(value === "=") {
            try {
                input.value = eval(input.value)
            } catch  {
                input.value = "Error";
            }
        } 
        else if(value === "C") {
            input.value = "";
            }
        else {
            input.value += value;
        }
        
    })

})




