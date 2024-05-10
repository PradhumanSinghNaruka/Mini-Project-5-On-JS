let date1 = document.querySelector("#date");
let btn1 = document.querySelector("#btn");
let result = document.querySelector("#ans");

btn1.addEventListener('click', add);

function add() {
    let age = parseInt(date1.value);
    if (age <= 18) {
        result.textContent = "You are Not Eligible to Vote";
    } else {
        result.textContent = "You are Eligible to Vote";
    }
}

let text = "You Gives Vote Or Not";
let textElement = document.getElementById("text");
let time = 50;
let start = 0;

function type(){
    if(start < text.length){
        textElement.innerHTML += text.charAt(start);
        start++;
        setTimeout(type, time);
    }
}
type();


