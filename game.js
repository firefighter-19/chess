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

				console.log (e.target.y)

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
			}
			else {
				for (let i = 0; i < this.possibleMoveCell.length; i++) {
					if (e.target.y !== this.possibleMoveCell[i].y && e.target.x !== this.possibleMoveCell[i].x) {
						for (let i of this.choosenElementCell) {
							i.classList.remove('active')
						}
						this.choosen = false;
					}
					else {
						let elementTarget = this.field[e.target.y][e.target.x];
						let startElement = this.field[this.start.y][this.start.x];
						if (elementTarget !== startElement && e.target.y === this.possibleMoveCell[i].y && e.target.x === this.possibleMoveCell[i].x) {
							this.move(e.target)
						}
					}
				}
			}
		})
	}
	move(e) {
		if (this.choosen === true) {
			this.end = { y: e.y, x: e.x };

			const figuresClasses = ['pawn', 'rook', 'bishop', 'knight', 'queen', 'king'];
			for (let key of figuresClasses) {
				if (this.table.rows[this.end.y].cells[this.end.x].classList.contains(key)) {
					this.table.rows[this.end.y].cells[this.end.x].classList.remove(key)
				}
				if (this.field[this.start.y][this.start.x].name === key) {
					this.table.rows[this.start.y].cells[this.start.x].classList.remove(key);
					this.table.rows[this.end.y].cells[this.end.x].classList.add(key);
				}
			}
			this.field[this.end.y][this.end.x] = this.field[this.start.y][this.start.x];
			this.field[this.start.y][this.start.x] = null;
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
