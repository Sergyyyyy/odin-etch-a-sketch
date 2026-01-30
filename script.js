const container = document.getElementById("main-container")
const newDiv = document.createElement("div")

let currentSize = 16


size = 16

for (let c = 0; c <= size; c++) {
    for (let r = 0; r <= size; r++) {
        const newDiv = document.createElement("div")
        newDiv.classList.add("myGrid")
        container.append(newDiv)
    }
}