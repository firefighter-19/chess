function sortMoves(board, coordinates, color, start) {
	const boarders = coordinates
		.filter(el => el.y >= 0 && el.x < 8 && el.y < 8 && el.x >= 0)
		.sort((a,b) => b.y - a.y)
		.map(el => {
			let figure = board[el.y][el.x];
			if (figure === null || color !== figure.color) {
				return el
			} else {
				return false
			}
		})
	console.log (boarders)
	// const movesObj = boarders.slice(0, boarders.indexOf(false));
	// console.log (movesObj)
	// console.log (sorted)
	// return movesObj;
}

export { sortMoves }