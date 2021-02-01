function randomizer() {
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

function alertAnswer() {
    alert(answer.join(" "));
}

function alertGuesses() {
    alert(guessCounter);
}

function userInput() {
    return prompt("Please inter a guess");
}

function validGuess(guess) {
    if (!answer.includes(guess)) {
        guessCounter--;
        for (let i = 0; i < letters.length; i++) {
            if (guess === letters[i]) {
                answer[i] = guess;
                lettersLeft--;
            }
        }
    }
}

function gameEnd() {
    alert(`Great job, you have ${answer.join(" ")}`);
    alert(`The letters are ${letters}`);
}

let letters = randomizer();

let answer = toUnderscore();

let lettersLeft = letters.length;

let guessCounter = letters.length + 10;

while(lettersLeft > 0) {
    alertAnswer();

    alertGuesses();

    let guess = userInput();

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Please enter in exactly one letter");
    } else {
        validGuess(guess);
    }

    if (guessCounter === 0) {
        break;
    }
}

gameEnd();

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

 returning multiple things with a return keyword
 return {
                  answer,
                  lettersLeft
                }
*/