import { sortMoves } from './sortMoves.js'

class King {
	constructor(color) {
		this.color = color;
		let name = 'king';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinates = [];

		for (let i = 1; i <= 1; i++) {
			coordinates.push(
				{ y: start.y + i, x: start.x },
				{ y: start.y - i, x: start.x },
				{ y: start.y + i, x: start.x + i },
				{ y: start.y - i, x: start.x + i },
				{ y: start.y, x: start.x + i },
				{ y: start.y, x: start.x - i }
			)
		}
		return sortMoves(board, coordinates, this.color);
	}
}

export { King }