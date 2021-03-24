import { sortMoves } from './sortMoves.js'

class Queen {
	constructor(color) {
		this.color = color;
		let name = 'Queen';
		this.name = name;
	}
	getMoves(board, start) {

		const coordinates = [];

		for (let i = 1; i < 8; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x + i },
				{ y: start.y - i, x: start.x - i },
				{ y: start.y + i, x: start.x - i },
				{ y: start.y - i, x: start.x + i },
				{ y: start.y + i, x: start.x },
				{ y: start.y, x: start.x + i },
				{ y: start.y - i, x: start.x },
				{ y: start.y, x: start.x - i }
			)
		}
		return sortMoves(board, coordinates);
	}
}

export { Queen }