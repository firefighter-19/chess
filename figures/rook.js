import { sortMoves } from './sortMoves.js'

class Rook {
	constructor(color) {
		this.color = color;
		let name = 'rook';
		this.name = name;
		this.coordinates = [];
	}
	getMoves(board, start) {
		const coordinates = [];

		for (let i = 1; i < 8; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x },
				{ y: start.y - i, x: start.x },
				{ y: start.y, x: start.x + i },
				{ y: start.y, x: start.x - i }
			)
		}
		return sortMoves(board, coordinates, this.color, start);
	}
}

export { Rook }