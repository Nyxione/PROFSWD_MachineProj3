var bottom = [0, 0, 0, 0, 0, 0, 0];

function addCircle(num, player) {
	if (bottom[num] < 300) {
		console.log(player);
		var color;
		if (player == 0) 
			color = "red";
		else
			color = "black";
		
		$("#col"+num).prepend(
			function () {
				var divOuter = "<div style = 'bottom:" + 300 + 
			"px; position:absolute;'></div>";
				var divInner = "<div class = 'circle' style = 'background-color:" + color + "'></div>";
				return $(divOuter).append(divInner)
					.animate({bottom : bottom[num]}, "slow")
			}
		);
		bottom[num] += 52;
	}
}

function resetBoard() {
	for (var i = 0; i <= 6; i++) {
		$("#col"+ i + " div").remove();
	}
	
	app = new everything(initTopVal(), createfield(), startingPlayer(), 0, 0); 
	bottom = [0, 0, 0, 0, 0, 0, 0];
}

function resetScore() {
	score = [0, 0];
	$("#p1area input").val(" ");
	$("#p2area input").val(" ");
}