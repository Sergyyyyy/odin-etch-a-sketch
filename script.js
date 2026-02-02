const container = document.getElementById("main-container")
const erase = document.getElementById("btn-erase-grid")
const etch = document.getElementById("btn-etch-grid")

function createGrid(rows, columns) {
    area = rows * columns

    for (let i = 0; i < area; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("myGrid")
        container.append(newDiv)
    }
}

createGrid(3, 3)


function toggleGrid() {
    const element = document.querySelectorAll(".myGrid")
    for (let i = 0; i < element.length; i++) {
        let currentElement = element[i]
        currentElement.onmouseenter = function () {
            currentElement.style.backgroundColor = 'white'
        }
    }
}

toggleGrid()

erase.onclick = function () {
    const element = document.querySelectorAll(".myGrid")
    for (let i = 0; i < element.length; i++) {
        let currentElement = element[i]
        currentElement.onmouseenter = function () {
            currentElement.style.backgroundColor = 'black'
        }
    }
}

etch.onclick = function () {
    toggleGrid()
}