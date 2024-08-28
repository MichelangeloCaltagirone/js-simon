function randomNumbers(max, totNums) {
    const numbers = [];
    while (numbers.length < totNums) {
        const number = Math.floor(Math.random() * max) + 1;
        if (!numbers.includes(number)) numbers.push(number);
    }
    return numbers;
}

function emptyGameField() {
    gameField.innerHTML = '';
}

function showMemoNubs(memoNumbs) {
    for(let i = 0; i < memoNumbs.length; i++) {
        let numb = memoNumbs[i] + ' ';
        gameField.innerHTML += numb;        
    }
}

function createNumInput(x, what, where) {
    
    for(let i = 0; i < x; i++) {
        const input = document.createElement(what);
        if(what = 'input') {
            input.type = 'number';
            input.setAttribute("required", '');
            input.setAttribute("min", '0');
            //input.setAttribute("max", '66');
        }
        where.appendChild(input);
    }
}