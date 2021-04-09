import { sortMoves } from './sortMoves.js'

class Bishop {
	constructor(color) {
		this.color = color;
		let name = 'bishop';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinatesPosYPosX = [];
		const coordinatesNegYNegX = [];
		const coordinatesPosYNegX = [];
		const coordinatesNegYPosX = [];

		for (let i = 1; i < 8; i++) {
			coordinatesPosYPosX.push(
				{ y: start.y + i, x: start.x + i }
			);
			coordinatesNegYNegX.push(
				{ y: start.y - i, x: start.x - i }
			);
			coordinatesPosYNegX.push(
				{ y: start.y + i, x: start.x - i }
			)
			coordinatesNegYPosX.push(
				{ y: start.y - i, x: start.x + i }
			)
		}
		const boardersPosY = sortMoves(board, coordinatesPosYPosX, this.color);
		const boardersNegY = sortMoves(board, coordinatesNegYNegX, this.color);
		const boardersPosX = sortMoves(board, coordinatesPosYNegX, this.color);
		const boardersNegX = sortMoves(board, coordinatesNegYPosX, this.color);

		let sortedMoves = boardersPosX.concat(boardersPosY, boardersNegY, boardersNegX);
		return sortedMoves;
	}
}

export { Bishop }