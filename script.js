'use strict';



function guessNumber() {
    const isNumber = function (n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    };
    let randomNumber = Math.floor(Math.random() * Math.floor(100)) + 1;
    console.log('Рандомное число: ', randomNumber);
    let attempts = 10
    function notNum() {
        attempts++
    }

    function checkNum(num) {
        if (attempts > 1 || attempts === 1) {
            let number = prompt('Угадай число от 0 до 100');
            attempts--
            if (number === null) {
                confirm('Игра окончена');
            } else if (!isNumber(number) || number === "") {
                notNum()
                alert('Введи число!');
                checkNum(num)
            } else if (attempts === 0) {
                let newGame = confirm('Попытки закончились, хотели бы сыграть еще?')
                if (newGame === true) {
                    guessNumber()
                } else if (newGame === false) {
                    alert('Игра окончена')
                }
            } else if (number > num) {
                alert('Загаданное число меньше, осталось попыток ' + attempts)
                checkNum(num)
            } else if (number < num) {
                alert('Загаданное число больше, осталось попыток ' + attempts)
                checkNum(num)
            } else if (number == num) {
                let again = confirm('Поздравляю, Вы угадали!!! Хотите сыграть еще?');
                if (again === true) {
                    guessNumber()
                } else if (again === false) {
                    alert('Игра окончена')
                }
            }
        }
    }
    return checkNum(randomNumber);
}

guessNumber();