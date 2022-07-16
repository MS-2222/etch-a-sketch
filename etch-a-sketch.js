const container = document.querySelector('.container');
let num = 16;
let size = num * num;
let wide = 640 / num;
let high = 640 / num;

let square;
for (let i = 0; i < size; i++) {
    square = document.createElement('div');
    square.classList.add('square');
    square.style.width = wide + 'px';
    square.style.height = high + 'px';
    container.appendChild(square);
}

const squares = document.querySelectorAll('.square');
let squareArray = Array.from(squares);
squareArray.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
    })
})
