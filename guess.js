let btn = document.getElementById("guessbtn")
let btn2 = document.getElementById("restartbtn")
let message = document.getElementById("result")
let randNum = Math.floor  (Math.random()* 101);
console.log (randNum);
let guessNo = 0;

btn.addEventListener('click', function(){
    let input = document.getElementById("input").value;
    if (input == randNum){
        message.innerHTML = `CORRECT! your result is ${randNum}` 
    } else if ( input < randNum){
        message.innerHTML = `Number is too low! your result is ${randNum}`
    }
    else if ( input > randNum){
        message.innerHTML = `Number is too high! your result is ${randNum}`
    }
})

// btn2.addEventListener("click", function(){
//     input.forEach(input => input.value = '');
// }



// function chooseNum () {
    
    
    
//     let guess = prompt ("please enter a number between 0 and 100");
//     //console.log ("Your guess is: " + guess);

//     if (guess < randNum) {
//         window.alert ("Your guess is too low");
//     } else if (guess > randNum){
//         window.alert ("Your guess is too high");
//     } else if (guess == randNum){
//         window.alert ("You are correct!");
//     } else {
//         window.alert ("Please input a valid number")
//     }
// } 
