let list = ["rock","scissors","paper"];

let myButton = document.getElementById("myButton");
let result = document.getElementById("result");
let winner = document.getElementById("winner");


function getRandom(){ // get random value from the array 
    let randomIndex = Math.floor(Math.random()*list.length);
    return list[randomIndex];
}

function whosWinner (user1 ,user2){ // decided whos the winner 
    if(user1 === user2 ){
        return "even";
    }
    else if(user1 === "rock"){
        if(user2 !== "paper"){
            return "computer win";
        }else{
            return "you win";
        }
    }else if(user1 === "paper"){
        if(user2 !== "scissors"){
            return "computer win";
        }else{
            return "you win";
        }
    }else if(user1 === "scissors"){
        if (user2 !== "rock") {
            return "computer win";
        }else{
            return "you win";
        }
    }
}

myButton.addEventListener("click",function(e){ // maken an event for the button 
    let valueOfCpu = getRandom();
    let valueOfUser = getRandom();
    result.textContent = `computer have ${valueOfCpu}\t and you have ${valueOfUser}`;
    // console.log("cpu "+ valueOfCpu  + " user " + valueOfUser)
    winner.textContent = whosWinner(valueOfCpu,valueOfUser);
})