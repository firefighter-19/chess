import { Rook } from './figures/rook.js'
import { Knight } from './figures/knight.js'
import { Bishop } from './figures/bishop.js'
import { King } from './figures/king.js'
import { Queen } from './figures/queen.js'
import { Pawn } from './figures/pawn.js'

class Board {
	constructor() {
		this.table = document.querySelector('.chess__board')
		this.tbody = document.querySelector('tbody');
		this.field = [
			[new Rook('white'), new Knight('white'), new Bishop('white'), new Queen('white'), new King('white'), new Bishop('white'), new Knight('white'), new Rook('white')],
			[new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white'), new Pawn('white')],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[null, null, null, null, null, null, null, null],
			[new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black'), new Pawn('black')],
			[new Rook('black'), new Knight('black'), new Bishop('black'), new Queen('black'), new King('black'), new Bishop('black'), new Knight('black'), new Rook('black')]
		];
		this.cells = [];
	}
	createBoard() {
		for (let y = 0; y < this.field.length; y++) {
			let row = document.createElement('tr');
			row.classList.add('chess__row');
			this.tbody.append(row);

			for (let x = 0; x < this.field[y].length; x++) {
				let cell = document.createElement('td');
				row.append(cell)
				cell.classList.add('chess__cell')
				cell.style.backgroundColor = 'rgb(233, 218, 190)';
				if (y % 2 !== 0) {
					if (x % 2 === 0) {
						cell.style =
							`background-color : rgb(141, 111, 27);
					  width: 60px;
					 height: 60px;`
					}
				} else {
					if (x % 2 !== 0) {
						cell.style =
							`background-color : rgb(141, 111, 27);
					  width: 60px;
					 height: 60px;`
					}
				}
				cell.y = y;
				cell.x = x;
				if (this.field[y][x] !== null) {
					cell.position = this.field[y][x];
				} else {
					cell.position = null;
				}
				this.cells.push(cell)
			}
		}
	}
	// drawFigures() {
	// 	let figure = document.createElement('img');
	// 	figure.setAttribute('src', './source/rook.png')

	// }
}

export { Board }
