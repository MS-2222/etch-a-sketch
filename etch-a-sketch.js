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

