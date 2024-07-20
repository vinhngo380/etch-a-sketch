let globalVals = {
	size: 800 
};

function createGrid(gridSize = 4) {
	const mainDiv = document.getElementById("main");
	let numberOfSquares = gridSize;
	let squareSize = globalVals.size / numberOfSquares;
	console.log(`number of squares: ${numberOfSquares}`);
	for (let i = 0; i < gridSize; i++) {
		let rowDiv = document.createElement("div");
		rowDiv.id = "row" + i;
		rowDiv.classList.add("row-container");
		mainDiv.appendChild(rowDiv)
		for (let j = 0; j < gridSize; j++) {
			let squareDiv = document.createElement("div");
			let squareIDNumber = (i + 1) * (j + 1);
			squareDiv.id = "square" + squareIDNumber;
			squareDiv.classList.add("square");
			squareDiv.setAttribute("style", `height:${squareSize}px; width:${squareSize}px;`);
			squareDiv.addEventListener("mouseover", (event) => {
				squareDiv.style.backgroundColor = "white";
			});
			rowDiv.appendChild(squareDiv);
		}
	}
	const testingSquare = document.getElementById("square1");
	console.log(`height: ${testingSquare.style.height}`);
	console.log(`width: ${testingSquare.style.width}`);
	console.log(`global size: ${globalVals.size}`);
}

function clearMainDiv() {
	const mainDiv = document.getElementById("main");
	while (mainDiv.firstChild) {
		mainDiv.removeChild(mainDiv.lastChild);
	}
}

function main() {
	const newGridButton = document.getElementById("new-grid-button");
	newGridButton.addEventListener("click", (event) => {
		let gridSize = prompt("Enter a new grid size (less than 100)");
		while (gridSize >= 100) {
			gridSize = prompt("Enter a new grid size (less than 100)");
		}
		clearMainDiv();
		createGrid(parseInt(gridSize));
	})
	createGrid()
}

main()
