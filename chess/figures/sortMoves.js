function sortMoves(board, arr, color) {
	let newSort = arr.filter(el => el.y >= 0 && el.x < 8 && el.y < 8 && el.x >= 0)
		.map(el => board[el.y][el.x] === null || board[el.y][el.x].color !== color ? el : false)


	let sorted = newSort;
	for (let key of newSort) {
		if (key === false) {
			sorted = newSort.slice(0, newSort.indexOf(false));
		}
	}

	let cellSort = sorted.map(el => board[el.y][el.x] === null ? el : false);

	let nullCells = cellSort;
	for (let key of cellSort) {
		if (key === false) {
			nullCells = cellSort.slice(0, cellSort.indexOf(false));
		}
	}
	console.log(nullCells)

	let newSorted = nullCells;

	if (sorted.length !== 0) {
		let figureSort = sorted.filter(el => board[el.y][el.x] !== null && board[el.y][el.x].color !== color)
		// let figureCells = figureSort;
		// console.log(figureSort)
		// for (let key of figureSort) {
		// 	if (key === false) {
		// 		figureCells = figureSort.slice(0, figureSort.indexOf(false));
		// 	}
		// }
		// console.log(figureCells)
	}
	return sorted;
}

export { sortMoves }