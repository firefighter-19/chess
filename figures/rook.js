import { sortMoves } from './sortMoves.js'

class Rook {
	constructor(color) {
		this.color = color;
		let name = 'rook';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinatesPosY = [];
		const coordinatesPosX = [];
		const coordinatesNegY = [];
		const coordinatesNegX = [];

		for (let i = 1; i <= 8; i++) {
			coordinatesPosY.push(
				{ y: start.y + i, x: start.x }
			);
			coordinatesNegY.push(
				{ y: start.y - i, x: start.x }
			);			
			coordinatesPosX.push(
				{ y: start.y, x: start.x + i }
			);
			coordinatesNegX.push(
				{ y: start.y, x: start.x - i }
			);
		}

		const boardersPosY = sortMoves(board, coordinatesPosY, this.color);
		const boardersNegY = sortMoves(board, coordinatesNegY, this.color);
		const boardersPosX = sortMoves(board, coordinatesPosX, this.color);
		const boardersNegX = sortMoves(board, coordinatesNegX, this.color);

		let sortedMoves = boardersPosX.concat(boardersPosY, boardersNegY, boardersNegX);
		return sortedMoves;
	}
}

export { Rook }