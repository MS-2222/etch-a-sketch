const container = document.querySelector('.container');
let num = 16;
makeGrid(num);
hover();

function makeGrid(num) {
    let size = num * num;
    for (let i = 0; i < size; i++) {
        let wide = 640 / num;
        let high = 640 / num;
        let square = document.createElement('div');
        square.classList.add('square');
        square.style.width = wide + 'px';
        square.style.height = high + 'px';
        container.appendChild(square);
    }
}

function hover() {
    let squares = document.querySelectorAll('.square');
    let squareArray = Array.from(squares);
    squareArray.forEach(square => {
        square.addEventListener('mouseover', () => {
            square.style.backgroundColor = 'black';
        })
    })
}
const change = document.querySelector('button');
change.addEventListener('click', () => {
    let num = prompt("Enter new size", "Max 100");
    if (num === null || num > 100) {
        alert("Enter Valid Size. Max 100!");
        return;
    }
    else {
        while (container.firstChild) {
            container.removeChild(container.firstChild);
        }
        makeGrid(num);
    }
    hover();
})

const clear = document.querySelector('.clear');
clear.addEventListener('click', () => {
    let squares = document.querySelectorAll('.square');
    let squareArray = Array.from(squares);
    squareArray.forEach(square => {
        square.style.backgroundColor = 'white';
    })
});