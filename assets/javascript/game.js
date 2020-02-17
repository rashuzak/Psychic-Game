//Sets the variables for the GAME

var alphChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessedLetters =[];


//Resets the variables 

function reset(){
   
    wins = 0;
    losses = 0;
    guessesLeft = 0;
    guessedLetters = [];
    i = 0;
   
}

//Gets the computer selected letter

var computerChoice = getRandomLetter();

function getRandomLetter(){
   
    var random = alphChoices[Math.floor(Math.random() * alphChoices.length)];
    return random
        
}

//Gets the users guess

function checkUserGuess(){
    
   var userPicked = document.getElementById("user-guess").value;
   
  // Checks if users guess is a letter or not  
if (userPicked == parseInt(userPicked, 10)){
       alert("PICK LETTER ONLY!!!");
       reset();
   }
   else {

   //change users guess to lower case
   var guessed = userPicked.toLowerCase();

   guessedLetters.push(guessed);

   //Sends the guessed letter to the array

   document.getElementById("guessedLetters").innerText = guessedLetters.join(",")
   
   }
  
   //Compares the user's guess with the computer's choice

    if (guessed === computerChoice){
    
        wins++;
                alert("You won!");
                document.getElementById("wins").innerText = wins;
             // continuePlaying call the function getRandomLetter
              //getRandomLetter();
    }
    
      else{
        losses++;
        
        document.getElementById("losses").innerText =  losses + "   " + " Try again!";
        
      }

      //Sets the guesses left
       
       guessLeft = guessLeft - 1;

       document.getElementById("guessesLeft").innerText = guessLeft;
       

   }
