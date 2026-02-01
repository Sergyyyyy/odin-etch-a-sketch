const container = document.getElementById("main-container")

function createGrid(rows, columns) {
    area = rows * columns

    for (let i = 0; i < area; i++){
        const newDiv = document.createElement("div");
        const text = document.createElement("p")
        text.innerHTML = '0'
        newDiv.append(text)
        newDiv.classList.add("myGrid")
        container.append(newDiv)
    }
}

const element = document.querySelectorAll("myGrid")

for (let i = 0; i <= element.length; i++) {
    let el = element[i]

    el.onmouseenter = function () {
        this.style.backgroundColor = 'white'
    }
}


createGrid(3, 3)