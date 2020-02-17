var alphChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
        
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessedLetters =[];
var i = 0;
var K = 0;




function reset(){
    //reset function
    wins = 0;
    losses = 0;
    guessesLeft = 0;
    guessedLetters = [];
    i = 0;
   
}



var computerChoice = getRandomLetter();
console.log("computerlt " + computerChoice);


// computer selects a letter
function getRandomLetter(){
   
    var random = alphChoices[Math.floor(Math.random() * alphChoices.length)];
    return random
    
    
}



function checkUserGuess(){
    //get the users guess
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


   //To show the letters used
       for (var j = i; j < alphChoices.length; j++) {

        document.getElementById("guessedLetters").innerText = guessedLetters[j];

        break;  
           }    
    
        i = ++j;
   
   
   }
  
    //compare it with the computer's choice
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
       // guessedLetters.push(guessed);
        
        
      }
       //To show the letters used
       //for (var j = i; j < alphChoices.length; j++) {

       // document.getElementById("guessedLetters").innerText = guessedLetters[j];

       // break;  
        //   }    
    
        //i = ++j;
        
       //  set guesses left 
       guessLeft = guessLeft - 1;

        document.getElementById("guessesLeft").innerText = guessLeft;
       

    }
