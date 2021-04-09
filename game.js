import { Board } from './board.js';

class Game extends Board {
	constructor() {
		super();
		this.possibleMoveCell = [];
		this.choosenElementCell = [];
		this.start;
		this.end;
		this.choosen = false;
	}

	showMoves() {
		this.tbody.addEventListener('click', e => {
			if (this.choosen === false) {
				this.possibleMoveCell = [];

				let position = { y: e.target.y, x: e.target.x };

				if (this.field[e.target.y][e.target.x] !== null) {
					this.start = { y: e.target.y, x: e.target.x };

					this.possibleMoveCell = this.field[e.target.y][e.target.x].getMoves(this.field, position);
					for (let i in this.possibleMoveCell) {
						let y = this.possibleMoveCell[i].y;
						let x = this.possibleMoveCell[i].x;
						this.choosenElementCell.push(this.table.rows[y].cells[x]);
						if (!this.table.rows[y].cells[x].classList.contains('active')) {
							this.table.rows[y].cells[x].classList.add('active');
							this.choosen = true;
						} else {
							this.table.rows[y].cells[x].classList.remove('active');
							this.choosen = false;
						}
					}
				}
				return;
			}
			else {
				this.possibleMoveCell.forEach(el => {
					if (this.table.rows[el.y].cells[el.x].classList.contains('active')) {
						this.move(e.target);
						this.choosenElementCell.forEach(el => el.classList.remove('active'))
					}
					else {
						this.table.rows[el.y].cells[el.x].classList.remove('active')
						this.choosen = false;
					}
				})
			}
		})
	}
	move(e) {
		if (this.choosen === true) {
			this.end = { y: e.y, x: e.x };
			const figuresClasses = ['pawn', 'rook', 'bishop', 'knight', 'queen', 'king', 'white__pawn', 'white__rook', 'white__bishop', 'white__knight', 'white__queen', 'white__king'];
			for (let key of this.possibleMoveCell) {
				if (key.y === e.y && key.x === e.x) {
					this.field[this.end.y][this.end.x] = this.field[this.start.y][this.start.x];
					this.field[this.start.y][this.start.x] = null;
					this.choosen = false;
					for (let i of figuresClasses) {
						if (this.table.rows[this.end.y].cells[this.end.x].classList.contains(i)) {
							this.table.rows[this.end.y].cells[this.end.x].classList.remove(i)
						}
						if (this.table.rows[this.start.y].cells[this.start.x].classList.contains(i)) {
							this.table.rows[this.start.y].cells[this.start.x].classList.remove(i);
							this.table.rows[this.end.y].cells[this.end.x].classList.add(i);
						}
					}
				}
			}
		}
		for (let i of this.choosenElementCell) {
			if (i.classList.contains('active')) {
				i.classList.remove('active');
				this.choosen = false;
			}
		}
	}

	showField() {
		console.log(this.field)
	}
}

let game = new Game;

game.createBoard()
game.showMoves()
game.drawFigures()