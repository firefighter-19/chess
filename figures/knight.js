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

class Knight {
	constructor(color) {
		this.color = color;
		let name = 'knight';
		this.name = name;
	}
	getMoves(board, start) {

		let coordinates = [
			{
				y: start.y + 2,
				x: start.x + 1
			},
			{
				y: start.y + 2,
				x: start.x - 1
			},
			{
				y: start.y + 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x + 2
			},
			{
				y: start.y - 1,
				x: start.x - 2
			},
			{
				y: start.y + 1,
				x: start.x - 2
			},
			{
				y: start.y - 2,
				x: start.x - 1
			},
			{
				y: start.y - 2,
				x: start.x + 1
			},
		];

		return sortMoves(board, coordinates, this.color);
	}
}
export { Knight }