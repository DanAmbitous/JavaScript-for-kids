function randomLetter() {
    let alphabet = "abcdefghijklmnopqrstuvwxyz";
    let letters = "";
    
    while (letters.length < 6) {
        letters += alphabet[Math.floor(Math.random() * alphabet.length)];
    }

    return letters;
}

function toUnderscore() {
    let answer = [];

    for (let i = 0; i < letters.length; i++) {
        answer[i] = "_";
    }

    return answer;
}

function alertPlayer() {
    alert(answer.join(" "));
}

function getInput() {
    return prompt("Please enter a letter here");
}



function gameStatus(guess) {
   // let counter = 0;
    if (!answer.includes(guess)) {
        guessCounter--; //undefined
        for (let i = 0; i < letters.length; i++) {
            if (guess === letters[i]) {
                answer[i] = guess;
                lettersLeft--; 
               // counter++; 
            }
        }
    }
   // return counter;
} 

/*
 for (let i = 0;)
*/

function showOutcome() {
    alert(`Nice job, you have ${answer.join(" ")}`);
    alert(`The letters are ${letters}`);
}

let letters = randomLetter();

let answer = toUnderscore(letters);

let lettersLeft = letters.length;

let guessCounter = letters.length + 10;

while (lettersLeft > 0) {
    alertPlayer(answer);

    alert(guessCounter);

    let guess = getInput();

     if (guess === null) {
        break;
     } else if (guess.length !== 1) {
        alert("Please input exactly one letter");
     } else {
       gameStatus(guess);
       // lettersLeft -= correctGuess;
     }

     if (guessCounter === 0) {
        break;
     }
}

showOutcome(answer, letters);


/*function helloName(n) {
  return n = "hello " + n
}

var name = "name1"
console.log(name, "==> name1")

helloName(name)
console.log(name, "==> name1")

name = helloName(name);
console.log(name, "==> hello name1")

// When variables go inside a function they don't change, unless you return it and save it back to the variable 


function updateName() {
  myVar = "update  " + myVar;
  myLet = "update  " + myLet;
}



var myVar = "myVar"
let myLet = "myLet"

if() {

}

console.log(myVar, " ===> myvar")
console.log(myLet, " ===> mylet")
updateName();
console.log(myVar, " ===> update myvar")
console.log(myLet, " ===> update udef")



*/











/*
 returning multiple things with a return keyword
 return {
                  answer,
                  lettersLeft
                }
*/