

const input = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.textContent;
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




