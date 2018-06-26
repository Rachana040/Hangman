var words= ['pink','blue','green','red','black','cyan','gray','yellow','purple'];
var word;
var lives = 5;
var letters_array; //actual word
var guess_array; //user guesses
function generate() {
	 word = words[Math.floor(Math.random()*words.length)];
	 letters_array= word.split("");
	 guess_array = word.split("");
	 for(var i = 0;i < word.length;i++) {
		guess_array[i] = " _ ";
	 }
}

function newGame() {
	
	generate();
	var output = "WORD: ";
	lives = 5;
	for(var i = 0;i < word.length;i++) {
		output += " _ ";
	}
	document.getElementById("word").innerHTML = output;
	document.getElementById("lives").innerHTML = "you have "+lives+" lives left";
}

//letter entered if letter! null and incorrect reduce lives
function check() {
	letter_selected = document.getElementById("letter").value;
	document.getElementById("letter").value="";
	if(letters_array.indexOf(letter_selected) != -1) {
		for(var i = 0;i < letters_array.length;i++) {
			if(letters_array[i] == letter_selected) {
				guess_array[i] = letter_selected;
			}
		}
	
	var print = "";
	for(var i = 0;i < guess_array.length;i++) {
		print += guess_array[i];
	}
	if(print === word)
	{
			document.getElementById("word").innerHTML = "WORD: "+print;
			alert("congratulations");
			newGame();
	}
	else{
	document.getElementById("word").innerHTML = "WORD: "+print;
	}
 }
 else {
		lives--;
		if(lives == 0) {
			alert("Game Over!\nCorrect Answer is "+word);
			newGame();
		}
 }
 document.getElementById("lives").innerHTML = "you have "+lives+" lives left";
}
