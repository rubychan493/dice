// Create images
var dice1 = new Image;
var dice2 = new Image;

function randomdice() {
	
	// The random number
	var v1 = Math.floor(Math.random()*5+1);	
	var v2 = Math.floor(Math.random()*5+1);
	
	// Set default colour to the words
	document.getElementById("win").style.color = "black";
	document.getElementById("lose").style.color = "black";
	document.getElementById("draw").style.color = "black";
	
	// Change the colour according to winning and losing
	if (v1 > v2) {
		document.getElementById("win").style.color = "green";
	} else if (v1 < v2) {
		document.getElementById("lose").style.color = "red";
	} else {
		document.getElementById("draw").style.color = "blue";
	}

	// Images src
	var imgOfDice = [
		"https://upload.wikimedia.org/wikipedia/commons/2/2c/Alea_1.png",
		"https://upload.wikimedia.org/wikipedia/commons/b/b8/Alea_2.png",
		"https://upload.wikimedia.org/wikipedia/commons/2/2f/Alea_3.png",
		"https://upload.wikimedia.org/wikipedia/commons/8/8d/Alea_4.png",
		"https://upload.wikimedia.org/wikipedia/commons/5/55/Alea_5.png",
		"https://upload.wikimedia.org/wikipedia/commons/f/f4/Alea_6.png"
		];
	
	// Display the image
	dice1.src=imgOfDice.slice(v1,v1+1);
	dice2.src=imgOfDice.slice(v2,v2+1);
	document.body.appendChild(dice1);
	document.body.appendChild(dice2);
}