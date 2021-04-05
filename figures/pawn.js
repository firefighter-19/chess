class Pawn {
	constructor(color) {
		this.notMoved = true;
		this.color = color;
		let name = 'pawn';
		this.name = name;
	}
	getMoves(board, start) {

		const coordinates = [
			{
				y: start.y + 1,
				x: start.x
			},
			{
				y: start.y + 2,
				x: start.x
			},
			{
				y: start.y + 1,
				x: start.x + 1
			},
			{
				y: start.y + 1,
				x: start.x - 1
			},
			{
				y: start.y - 1,
				x: start.x
			},
			{
				y: start.y - 2,
				x: start.x
			},
			{
				y: start.y - 1,
				x: start.x + 1
			},
			{
				y: start.y - 1,
				x: start.x - 1
			},
		];

		const boarders = coordinates.filter(el => el.y >= 0 && el.x <= 7 && el.y <= 7 && el.x >= 0)
			.map(el => {
				let figure = board[el.y][el.x];
				if (figure !== null && figure.color !== this.color || figure === null && el.x === start.x) {
					return el
				} else {
					return false
				}
			})
			.map(el => {
				if (this.color === 'white' && el.y > start.y) {
					return el
				}
				if (this.color === 'black' && el.y < start.y) {
					return el
				}
			})
			.sort()

		const movesObj = boarders.slice(0, boarders.indexOf(undefined))
			.filter(el => {
				if (this.notMoved === false && this.color === 'white') {
					return el.y === start.y + 1
				} else if (this.notMoved === false && this.color === 'black') {
					return el.y === start.y - 1
				} else {
					return el
				}
			})
		return movesObj
	}
}

export { Pawn }