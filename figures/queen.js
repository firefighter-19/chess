import { sortMoves } from './sortMoves.js'

class Queen {
	constructor(color) {
		this.color = color;
		let name = 'queen';
		this.name = name;
	}
	getMoves(board, start) {
		const coordinatesPosY = [];
		const coordinatesPosX = [];
		const coordinatesNegY = [];
		const coordinatesNegX = [];
		const coordinatesPosYPosX = [];
		const coordinatesNegYNegX = [];
		const coordinatesPosYNegX = [];
		const coordinatesNegYPosX = [];

		for (let i = 1; i < 8; i++) {
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
		const boardersPosY = sortMoves(board, coordinatesPosY, this.color);
		const boardersNegY = sortMoves(board, coordinatesNegY, this.color);
		const boardersPosX = sortMoves(board, coordinatesPosX, this.color);
		const boardersNegX = sortMoves(board, coordinatesNegX, this.color);
		const boardersPosYPosX = sortMoves(board, coordinatesPosYPosX, this.color);
		const boardersNegYNegX = sortMoves(board, coordinatesNegYNegX, this.color);
		const boardersPosYNegX = sortMoves(board, coordinatesPosYNegX, this.color);
		const boardersNegYPosX = sortMoves(board, coordinatesNegYPosX, this.color);

		let sortedMoves = boardersPosX.concat(boardersPosY, boardersNegY, boardersNegX, boardersPosYPosX, boardersNegYNegX, boardersPosYNegX, boardersNegYPosX);
		return sortedMoves;
	}
}

export { Queen }