function sortMoves(board, arr, color) {
	let newSort = arr.filter(el => el.y >= 0 && el.x < 8 && el.y < 8 && el.x >= 0)
		.map(el => {
			if (board[el.y][el.x] === null || board[el.y][el.x].color !== color) {
				return el
			} else {
				return false
			}
		});

	let sorted = newSort;
	for (let key of newSort) {
		if (key === false) {
			sorted = newSort.slice(0, newSort.indexOf(false));
		}
	}
	// ПОДУМОТЬ ТУТ
	// 	let xSorted = sorted.filter(el => {
	// 		let figure = board[el.y][el.x];
	// 		if (figure !== null) {
	// 			return el
	// 		}
	// 	})
	// 	console.log(xSorted)
	return sorted;
}

export { sortMoves }