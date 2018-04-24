// NOTE: need to revisit and add functionality for turns for both players

var gameState = {
	player_one: "X",
	player_two: "O",
	currentPlayer: "X",
	playerTurns: 2,
	board: [
		"","","","","","","","",""
	]
}
document.getElementById("turns").innerHTML = "turns left " + gameState.playerTurns

	//Using javascript to create the HTML for the page.
	// This allows us to update it easily every time the state changes.

function handleClick(index) {
	var board = gameState.board[index];
	var p1 = gameState.player_one;
	var p2 = gameState.player_two;
	var currentP = gameState.currentPlayer;

	if(board == "") {

		gameState.board[index] = currentP;
		gameState.currentPlayer = currentP == p1 ?p2 : p1;

		let winner = checkForWinner();

		if (winner ) {
			alert(`${winner} is the winner!`);
			gameState.gameWinner = winner;
			gameState.playerTurns -= 1;
			document.getElementById("turns").innerHTML = "turns left " + gameState.playerTurns;
			gameState.board = [
				"","","","","","","","",""
			]

			if (gameState.playerTurns === 0){
				window.location.reload();
			}

		}

		render(gameState);
	}
}

function render(state) {
	var renderedHtml = "<div class='board'>" +
	"<div class='square' onclick='handleClick(0)' >" + state.board[0] + "</div>" +
	"<div class='square' onclick='handleClick(1)' >" + state.board[1] + "</div>" +
	"<div class='square' onclick='handleClick(2)' >" + state.board[2] + "</div>" +
	"<div class='square' onclick='handleClick(3)' >" + state.board[3] + "</div>" +
	"<div class='square' onclick='handleClick(4)' >" + state.board[4] + "</div>" +
	"<div class='square' onclick='handleClick(5)' >" + state.board[5] + "</div>" +
	"<div class='square' onclick='handleClick(6)' >" + state.board[6] + "</div>" +
	"<div class='square' onclick='handleClick(7)' >" + state.board[7] + "</div>" +
	"<div class='square' onclick='handleClick(8)' >" + state.board[8] + "</div>" +
	"</div>"

	document.querySelector(".render-target").innerHTML = renderedHtml
}

function checkForWinner() {
	var winningCombos = [
		[0,1,2],
		[3,4,5],
		[6,7,8],
		[0,3,6],
		[1,4,7],
		[2,5,8],
		[0,4,8],
		[2,4,6]
	]
	var winner = false;

	winningCombos.find(function(combo) {
		if (gameState.board[combo[0]] == gameState.board[combo[1]] && gameState.board[combo[1]] == gameState.board[combo[2]]) {
			winner = gameState.board[combo[0]];
		}
	})
	return winner;
}

render(gameState)
