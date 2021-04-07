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
	}
	createBoard() {
		for (let y = 0; y < this.field.length; y++) {
			let row = document.createElement('tr');
			row.classList.add('chess__row');
			this.tbody.append(row);

			for (let x = 0; x < this.field[y].length; x++) {
				let cell = document.createElement('td');
				row.append(cell)
				cell.classList.add('chess__cell__white')
				if (y % 2 !== 0) {
					if (x % 2 === 0) {
						cell.classList.add('chess__cell__black');
					}
				} else {
					if (x % 2 !== 0) {
						cell.classList.add('chess__cell__black');
					}
				}
				cell.y = y;
				cell.x = x;
				if (this.field[y][x] !== null) {
					cell.position = this.field[y][x];
				} else {
					cell.position = null;
				}
			}
		}
	}
	drawFigures() {
		for (let i = 0; i < this.table.rows.length; i++) {
			let rows = Array.from(this.table.rows[i].cells)
			if (i === 6) {
				for (let key of rows) {
					key.classList.add('pawn')
				}
			}
			if (i === 7) {
				for (let key in rows) {
					// console.log(rows[key])
					// console.log(key)
					// Оставить так или переписать под switch
					if (key === '0') {
						rows[key].classList.add('rook');

					}
					if (key === '7') {
						rows[key].classList.add('rook');

					}
					if (key === '1') {
						rows[key].classList.add('knight');
					}
					if (key === '6') {
						rows[key].classList.add('knight');
					}
					if (key === '2') {
						rows[key].classList.add('bishop');

					}
					if (key === '5') {
						rows[key].classList.add('bishop');
					}
					if (key === '3') {
						rows[key].classList.add('king');
					}
					if (key === '4') {
						rows[key].classList.add('queen');
					}
				}
			}
		}
	}
}

export { Board }
