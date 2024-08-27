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