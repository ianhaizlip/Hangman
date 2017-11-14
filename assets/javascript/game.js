// set up array of letters
var names = ["gandalf","aragorn","frodo","legolas","bilbo","gollum","saruman",
			 "gimli","boromir","samwise","peregrin","meriadoc"];

var images = ["gandalf.jpg","aragorn.jpg","frodo.jpg","legolas.jpg","bilbo.jpg",
			  "gollum.jpg","saruman.jpg","gimli.jpg","boromir.jpg","samwise.jpg",
			  "peregrin.jpg","meriadoc.jpg"];

//set up wines, loses, guess variables
var win = 0;

var lose = 0;

var guessLeft;

var guessSoFar = new Array();

window.onclick = function(event) {
	
	var computerGuess;
	var index;
	var hint;
	var nameLength;
	var nameEmpty;
	var winArray;
	
	var setup = function() {
		computerGuess = names[Math.floor(Math.random() * names.length)];

		console.log(computerGuess);

		index = names.indexOf(computerGuess);

		console.log(index);

		hint = document.getElementById("pic");

		hint.innerHTML = '<img class="image" src="./assets/images/'+images[index]+'">'

		nameLength = computerGuess.length;

		nameEmpty = new Array(nameLength);

		nameEmpty.fill("_");

		console.log(nameEmpty);

		guessLeft = computerGuess.length * 2;

		winArray = computerGuess.split("");

		console.log(winArray);

	};

	setup();



	//set up game
	document.onkeyup = function(event) 
	{

		var uGuess = event.key;
		var userGuess = uGuess.toLowerCase();

		console.log(userGuess);

		


		if ((userGuess === "a") || (userGuess === "b") || (userGuess === "c") || 
			(userGuess === "d") || (userGuess === "e") || (userGuess === "f") || 
			(userGuess === "g") || (userGuess === "h") || (userGuess === "i") || 
			(userGuess === "j") || (userGuess === "k") || (userGuess === "l") || 
			(userGuess === "m") || (userGuess === "n") || (userGuess === "o") || 
			(userGuess === "p") || (userGuess === "q") || (userGuess === "r") || 
			(userGuess === "s") || (userGuess === "t") || (userGuess === "u") || 
			(userGuess === "v") || (userGuess === "w") || (userGuess === "x") || 
			(userGuess === "y") || (userGuess === "z")) 
		{
//game logic
			if (computerGuess.includes(userGuess)) 
			{
				var n = computerGuess.indexOf(userGuess);
				var k = computerGuess.lastIndexOf(userGuess);
				nameEmpty[n] = userGuess; 
				nameEmpty[k] = userGuess;
			}
			else 
			{
				guessLeft --;
				guessSoFar.push(userGuess);
			}
			console.log(nameEmpty);
			console.log(winArray);

			if (guessLeft === 0)
			{
				lose ++;
				guessLeft = computerGuess.length * 2;
				guessSoFar= new Array();
				setup();
			}
			if (nameEmpty.toString() == winArray.toString())
			{
				win ++;
				guessLeft = computerGuess.length * 2;
				guessSoFar= new Array();
				setup ();
			}
			
			

//print results
		var result =
			"<p>" + nameEmpty + "</p>" + 
			"<br/>" +
			"<p>Wins: " + win + "</p>"+
			"<p>Loses: " + lose + "</p>"+
			"<p>Guesses Left: " + guessLeft + "</p>"+
			"<p>Guesses So Far: " + guessSoFar + "</p>";

		document.querySelector("#game").innerHTML = result;
		}

		console.log(win);
		console.log(lose);
		console.log(guessLeft);
		console.log(guessSoFar);

	};
};
