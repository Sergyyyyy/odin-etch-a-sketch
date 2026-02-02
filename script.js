const container = document.getElementById("main-container")

function createGrid(rows, columns) {
    area = rows * columns

    for (let i = 0; i < area; i++){
        const newDiv = document.createElement("div");
        newDiv.classList.add("myGrid")
        container.append(newDiv)
    }
}

createGrid(3, 3)

const element = document.querySelectorAll(".myGrid")

for (let i = 0; i < element.length; i++){
    let currentElement = element[i]
    currentElement.onmouseenter = function(){
        currentElement.style.backgroundColor = 'white'
    }
}
