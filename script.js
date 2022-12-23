const board = document.querySelector('#board');

const squares_number = 700;

for (let i = 0; i < squares_number; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    board.append(square);
    square.addEventListener('mouseover', () => {
        setColor(square);
    });

    square.addEventListener('mouseleave', () => {
        removeColor(square);
    });
};

const colors = [
    '#772222',
    '#772260',
    '#4d2277',
    '#222777',
    '#226277',
    '#22773b',
    '#1a5d2e',
    '#4ae879',
    '#91c905',
    '#d1e21b',
    '#b9ad00',
];

function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
};

function setColor(elem) {
    const color = getRandomColor();
    elem.style.backgroundColor = color;
    elem.style.boxShadow = `inset 2px 2px 3px #121212, inset -2px -2px 3px #303030 ${color}`;
};

function removeColor(elem) {
    elem.style.backgroundColor = '#212121';
    elem.style.boxShadow = `inset 2px 2px 3px #121212, inset -2px -2px 3px #303030`;
};