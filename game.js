import { Board } from './board.js';

class Game extends Board {
	constructor() {
		super();
		this.possibleMoves = [];
	}
	showMoves() {
		this.tbody.addEventListener('click', e => {
			let position = { y: e.target.y, x: e.target.x }
			// console.log(this.field[e.target.y][e.target.x])

			if (e.target.position) {
				const moves = this.field[e.target.y][e.target.x].getMoves(this.field, position);
				for (let i = 0; i < moves.length; i++) {
					let y = moves[i].y;
					let x = moves[i].x;
					let possibleMoves = this.table.rows[y].cells[x];
					possibleMoves.classList.add('active')
					console.log(possibleMoves)
				}
				// console.log(this.field[e.target.y][e.target.x])

			} else {
				alert('the cell is empty')
			}
		})
	}

}

let game = new Game;

game.createBoard()
game.showMoves()