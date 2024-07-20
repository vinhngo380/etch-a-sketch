const globalVals = {
	size: 800,
	colors: ["#028090", "#BFDBF7", "#E1E5F2"]
};

function createGrid(gridSize = 4) {
	const mainDiv = document.getElementById("main");
	let numberOfSquares = gridSize;
	let squareSize = globalVals.size / numberOfSquares;
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
			squareDiv.style.opacity = 0;
			squareDiv.addEventListener("mouseover", (event) => {
				squareDiv.style.backgroundColor = "white";
				colorMyPencils(squareDiv);
			});
			rowDiv.appendChild(squareDiv);
		}
	}
}

function colorMyPencils(squareDiv) {
	let currentOpa = parseFloat(squareDiv.style.opacity);
	if (currentOpa < 1) {
		currentOpa += 0.1;
		squareDiv.style.opacity = currentOpa;
		let index = Math.floor(Math.random() * (globalVals.colors.length + 1));
		squareDiv.style.background = globalVals.colors[index];
	}
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
