function everything (topval, field, player, i, j) {
	this.topval = topval;
	this.field = field;
	this.player = player;
	this.i = i;
	this.j = j;
}
	
function createfield() {
	var field = new Array(6);
	for (var a = 0; a < 6; a++)
		field[a] = new Array(7);
	return field;
}

function initTopVal ()	{
	var topval = [0, 0, 0, 0, 0, 0, 0];
	return topval;
}

function target(n, m) {
	app.i = app.topval[n];
	app.j = n;
	app.field[app.i][app.j] = m;
	app.topval[n]++;
}

function startingPlayer() {
   	return  Math.floor((Math.random() * 1) + 0);
}
			
function switchPlayer(currPlayer) {
	if (currPlayer == 0)
		app.player = 1;
	else
		app.player = 0;
}
 			
function checkIfWin(player) {
	var countR = 1, countL = 1;
	var countU = 1, countD = 1;
	var countQ1 = 1, countQ2 = 1, countQ3 = 1, countQ4 = 1;

	var x = app.i;
	var y = app.j;
	
	for (var a = 1; a <= 3; a++) {
		
		var jminus = false;
		var jplus = false;
		var iminus = false;
		var iplus = false;

		//check horizontal
		if ((y - a) >= 0) {
			jminus = true;
			if (app.field[x][y-a] == player) {
				countR++;
			}
		}
		
		if ((y + a) <= 6) {
			jplus = true;
			if (app.field[x][y+a] == player) {
				countL++;
			}
		}
		
		//check vertical
		if ((x - a) >= 0) {
			iminus = true;
			if (app.field[x-a][y] == player) {
				countD++;
			}
		}
		
		if ((x + a) <= 5) {
			iplus = true;
			if (app.field[x+a][y] == player) {
				countU++;
			}
		}
		
		//check diagonal
		if ((iplus == true) && (jplus == true)) {
			if (app.field[x+a][y+a] == player) {
				countQ1++;
			}
		}
		
		if ((iplus == true) && (jminus == true)) {
			if (app.field[x+a][y-a] == player) {
				countQ2++;
			}
		}
		
		if ((iminus == true) && (jminus == true)) {
			if (app.field[x-a][y-a] == player) {
				countQ3++;
			}
		}
		
		if ((iminus == true) && (jplus == true)) {
			if (app.field[x-a][y+a] == player) {
				countQ4++;
			}
		}
		
		//check if win
		if (countR >= 4 || countL >= 4 || countU >= 4 || countD >= 4 || 
			countQ1 >= 4 || countQ2 >= 4 || countQ3 >= 4 || countQ4 >= 4) {
			console.log("Player Win");
			setTimeout( function() {
				alert("Player " + (app.player + 1) + " win!");
				score[app.player]++;
				$("#p" + (app.player + 1) + "area input").val(score[app.player]);
				resetBoard();
			}, 550);
		}
	}
} 

var app = new everything(initTopVal(), createfield(), startingPlayer(), 0, 0);  
var score = [0, 0];

