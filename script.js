let container = document.querySelector("#container");

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.style.display = "flex";
    row.style.margin = "0px";
    row.style.padding = "0px";
    for (let j = 0; j < 16; j++) {
        let square = document.createElement("div");
        square.style.aspectRatio = "1 / 1";
        square.style.flex = "1 1 20px";
        row.appendChild(square);
        square.addEventListener("mouseover", (e) => {
            square.style.backgroundColor = "black";
        });
    }
    container.appendChild(row);
}