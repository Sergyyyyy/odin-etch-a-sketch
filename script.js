const container = document.getElementById("main-container")
const erase = document.getElementById("btn-erase-grid")
const etch = document.getElementById("btn-etch-grid")
const clear = document.getElementById("btn-clear-grid")
const size = document.getElementById("btn-choose-size")

function createGrid(rows, columns) {
    let area = rows * columns
    let allotedSize = 300 / rows
    container.style.gridTemplateColumns = `repeat(${columns}, ${allotedSize}px)`
    container.style.gridTemplateRows = `repeat(${rows}, ${allotedSize}px)`

    for (let i = 0; i <= area; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("myGrid")
        container.append(newDiv)
    }
}

createGrid(100, 100)

const element = document.querySelectorAll(".myGrid")

function toggleGrid() {
    for (let i = 0; i < element.length; i++) {
        let currentElement = element[i]
        currentElement.onmouseenter = function () {
            currentElement.style.backgroundColor = 'white'
        }
    }
}

toggleGrid()

erase.onclick = function () {
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

clear.onclick = function () {
    for (let i = 0; i < element.length; i++) {
        let currentElement = element[i]
        currentElement.style.backgroundColor = 'black'
    }
}

size.onclick = function () {
    Swal.fire({
        title: 'Enter the size of the grid (1-100):',
        input: 'number',
        inputAttributes: {
            min: '1',
            max: '100',
        },
        inputPlaceholder: 'Enter your size here...',
        showCancelButton: true,
        inputValidator: (value) => {
            if (!value) {
                return 'You need to write something!'
            }
            else if (value > 100){
                return 'The maximum size is 100...'
            }
            else if (value < 1) {
                return 'The minimum size is 1...'
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const size = Number(result.value)
            createGrid(size, size)
            console.log("Created a new " + size + "x" + size + " grid...");
            
        } else {
            Swal.fire('Oke have fun! 🥹')
        }
    })
}