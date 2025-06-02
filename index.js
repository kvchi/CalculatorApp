// counter program

// const decreaseBtn = document.getElementById("decreaseBtn");
// const resetBtn = document.getElementById("resetBtn");
// const increaseBtn = document.getElementById("increaseBtn");
// const countLabel = document.getElementById("countLabel");
// let count = 0;

// increaseBtn.onclick = function() {
//     count++;
//     countLabel.textContent = count;
// }

// decreaseBtn.addEventListener("click", () => {
//     count--;
//     countLabel.textContent = count;
// })
// resetBtn.addEventListener("click", () => {
//     count=0;
//     countLabel.textContent = count;
// })

// RANDOM NUMBER GENERATOR
// const myBtn = document.getElementById("myBtn");
// const label1 = document.getElementById("label1");
// const label2 = document.getElementById("label2");
// const label3 = document.getElementById("label3");
// const min = 1;
// const max = 6;

// let randomNum1;
// let randomNum2;
// let randomNum3;

// myBtn.onclick = () => {
//     randomNum1 = Math.floor(Math.random() * max) + min;
//     randomNum2 = Math.floor(Math.random() * max) + min;
//     randomNum3 = Math.floor(Math.random() * max) + min;
//     label1.textContent = randomNum1
//     label2.textContent = randomNum2
//     label3.textContent = randomNum3
// }

// document.getElementById("myform").onsubmit = (event) => {
//     const name = document.getElementById("text").value;
//     const email = document.getElementById("email").value;

//     event.preventDefault()
//     let newMessages = document.createElement("p")
//     newMessages.textContent = `Thank you, ${name}! We'll contact you at ${email}.`

//     document.getElementById("text").value = "";
//     document.getElementById("email").value = "";
//     document.getElementById("messages").appendChild(newMessages);
// }

// WEEK TWO VARIABLE TASK

// let favoriteMovie = "The Gorge";
// let releaseYear = 2025;
// let mainActor = "Miles Teller";
// alert (`My favorite movie is ${favoriteMovie} (${releaseYear}), Starring ${mainActor}`);
// let para = document.createElement("p");

// para.textContent = `My favorite movie is ${favoriteMovie} (${releaseYear}), Starring ${mainActor}`;
// document.body.append(para);

// function greet(name) {
//     return (`Hello ${name}! Welcome`);
// }

// alert(greet("Alice"))

// const min = 1;
// const max = 50;
// let randomNum = [];

// for (let i = 0; i < 7; i++) {
//     let num = Math.floor(Math.random() * max) + min;
// randomNum.push(num)
// }
// alert(randomNum)

// const myCheckBox = document.getElementById ("myCheckBox");
// const visaBtn = document.getElementById("visaBtn");const masterCardBtn = document.getElementById("masterCardBtn");
// const payPalBtn = document.getElementById("payPalBtn");
// const mySubmit = document.getElementById("mySubmit");
// const subResult = document.getElementById("subResult");
// const paymentResult = document.getElementById("paymentResult");

// mySubmit.onclick = () => {

//     if (myCheckBox.checked) {
//         subResult.textContent = `You are subscribed!`;
//     }
//     else {
//         subResult.textContent = `You are NOT subscribed!`;
//     }

//     if(visaBtn.checked) {
//         paymentResult.textContent = `You are paying with visa`;
//     }
//     else if (masterCardBtn.checked) {
//         paymentResult.textContent = `You are paying with MasterCard.`;
//     }
//     else if (payPalBtn.checked) {
//         paymentResult.textContent = `You are paying with Paypal.`;
//     }
//     else{
//         paymentResult.textContent = `You must select a payment type.`;
//     }

// }

// let age = 21;
// let message = age >= 18 ? "You're an adult" : "You're a minor";

// alert(message)

// let isStudent = true;
// let message = isStudent ? "you are a student" : " you are NOT a student";
// alert(message)

// let purchaseAmount = 125;
// let discount = purchaseAmount >= 100 ? 10: 0;
// alert(`your total is $${purchaseAmount - purchaseAmount * (discount/100)}`)

// const email = "Bro1@gmail.com";

// let username = email.slice(0, email.indexOf("@"))
// let extension = email.slice(email.indexOf("@") + 1);
// console.log(username)

// document.getElementById("click").onclick = () => {
//     const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16)
//     document.getElementById("container").style.backgroundColor = randomColor
// }

// document.getElementById("myForm").onsubmit = (event) => {
//   event.preventDefault();
//   let username = document.getElementById("user").value;
//   let password = document.getElementById("password").value;
//   let messageDiv = document.getElementById("message");
//   messageDiv.innerHTML = ""

//   let newPara = document.createElement("p")

//   if (password.length < 6) {
//     newPara.textContent = "Password must be at least 6 characters";
   
//   } else {
//     newPara.textContent = `Welcome ${username}`;
//   }

//   messageDiv.appendChild(newPara);

//   document.getElementById("user").value = "";
//   document.getElementById("password").value = "";
// };

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




