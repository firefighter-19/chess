function sortMoves(board, coordinates, color) {
	const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
		.map(el => {
			let figure = board[el.y][el.x];
			if (figure === null || color !== figure.color) {
				return el
			}
			return false
		})
		.sort()

	const movesObj = boarders.slice(0, boarders.indexOf(false));
	return movesObj;
}

export { sortMoves }