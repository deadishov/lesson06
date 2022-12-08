'use strict';



function guessNumber() {
    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
    console.log('Рандомное число: ', randomNumber);

    function checkNum(num) {
        let number = prompt('Угадай число от 0 до 100');
        if (number === null) {
            confirm('Игра окончена');
        } else if (!isNumber(number) || number === "") {
            alert('Введи число!');
            checkNum(num)
        } else if (number > num) {
            alert('Загаданное число меньше')
            checkNum(num)
        } else if (number < num) {
            alert('Загаданное число больше')
            checkNum(num)
        } else if (number == num) {
            confirm('Поздравляю, Вы угадали!!!');
        }
    }
    return checkNum(randomNumber);
}

guessNumber();