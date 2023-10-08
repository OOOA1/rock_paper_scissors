'use strict';

const play = document.querySelector('#play');
const titleH = document.querySelector('#game__title');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const playerScore = document.querySelector('#player__score');
const machineScore = document.querySelector('#machine__score');
const gameText = document.querySelector('#game__text');

//Обнуление очков у обоих игроков
let i = 0;
let e = 0;
let playerScore0 = playerScore.textContent = e;
let machineScore0 = machineScore.textContent = i;

//Логика для кнопки играть
play.addEventListener('click', function() {
    titleH.classList.add('hidden');
    play.classList.add('hidden');
    gameText.classList.remove('hidden');
    rock.classList.remove('hidden');
    paper.classList.remove('hidden');
    scissors.classList.remove('hidden');
});

const rockValue = rock.textContent // знаяение кнопки(словами)
const paperValue = paper.textContent // знаяение кнопки(словами)
const scissorsValue = scissors.textContent // знаяение кнопки(словами)

let arrValue = [rockValue, paperValue, scissorsValue];
const rock1 = arrValue[0].toLowerCase().trim().split(' ').join(' '); //rock
const paper1 = arrValue[1].toLowerCase().trim().split(' ').join(' '); //paper
const scissors1 = arrValue[2].toLowerCase().trim().split(' ').join(' '); //scissors
arrValue.splice([0,1,2]);//Очищение массива


//Значения для игрока
const rockChoice = 'камень';
const paperChoice = 'бумага';
const scissorsChoice = 'ножницы';

// let numberRandom = Math.floor(Math.random() * (3 - 0 + 0)) + 0; //Генерация слуайного числв от 0 до 3 (нужно для выбора значения из массива)
arrValue.push(rock1,paper1,scissors1); //Добавление всех 3 видов значения (камень, ножницы, бумага) (3) ['камень', 'бумага', 'ножницы']

//Логика кнопки камня
rock.addEventListener('click', function() {
    let numberRandom = Math.floor(Math.random() * (3 - 0 + 0)) + 0;
    let pcChoice = arrValue[numberRandom];

    if (pcChoice === scissorsChoice) {
        gameText.textContent = 'Игрок победил';

        playerScore0 = e++;
        playerScore0 = playerScore.textContent = e;
    } else if (pcChoice === paperChoice) {
        gameText.textContent = 'Машина победила';

        machineScore0 = i++;
        machineScore0 = machineScore.textContent = i;
    } else if (pcChoice === rockChoice) {
        gameText.textContent = 'Ничья';
    }
});


//Логика кнопки бумага
paper.addEventListener('click', function() {
    let numberRandom = Math.floor(Math.random() * (3 - 0 + 0)) + 0;
    let pcChoice = arrValue[numberRandom];

    if (pcChoice === 'камень') {
        gameText.textContent = 'Игрок победил';

        playerScore0 = e++;
        playerScore0 = playerScore.textContent = e;
    } else if (pcChoice === 'ножницы') {
        gameText.textContent = 'Машина победила';

        machineScore0 = i++;
        machineScore0 = machineScore.textContent = i;
    } else if (paperChoice === pcChoice) {
        gameText.textContent = 'Ничья';
    }
});

//Логика кнопки ножниц
scissors.addEventListener('click', function() {
    let numberRandom = Math.floor(Math.random() * (3 - 0 + 0)) + 0;
    let pcChoice = arrValue[numberRandom];
    if (pcChoice === paperChoice) {
        gameText.textContent = 'Игрок победил';

        playerScore0 = e++;
        playerScore0 = playerScore.textContent = e;
    } else if (pcChoice === rockChoice) {
        gameText.textContent = 'Машина победила';

        machineScore0 = i++;
        machineScore0 = machineScore.textContent = i;
    } else if (pcChoice === scissorsChoice) {
        gameText.textContent = 'Ничья';
    }
});





