function createGrid() {
	const mainDiv = document.getElementById("main");
	for (let i = 0; i < 4; i++) {
		let rowDiv = document.createElement("div");
		rowDiv.id = "row" + i;
		rowDiv.classList.add("row-container");
		mainDiv.appendChild(rowDiv)
		for (let j = 0; j < 4; j++) {
			let squareDiv = document.createElement("div");
			let squareIDNumber = (i + 1) * (j + 1);
			squareDiv.id = "square" + squareIDNumber;
			squareDiv.classList.add("row-container");
			rowDiv.appendChild(squareDiv);
		}
	}
}

function main() {
	createGrid()
}

main()
