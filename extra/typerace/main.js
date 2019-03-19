// Получаем элементы
let textElem = document.getElementById('text1');
let inputElem = document.getElementById('input1');
let speed = document.getElementById('speed1');
let timer = document.getElementById('timer1');


// Делаем текст (осмысленный набор слов) рандомным
// и время таймера, под каждый текст.
function showFragment() {
    let fragments = [
        'На твоей планете, - сказал Маленький принц, - люди выращивают в одном саду пять тысяч роз и не находят того, что ищут.',
        'Все взрослые сначала были детьми, только мало кто из них об этом помнит.',
        'У людей уже не хватает времени что-либо узнавать. Они покупают вещи готовыми в магазинах. Но ведь нет таких магазинов, где торговали бы друзьями, и потому люди больше не имеют друзей.',
        'Люди забираются в скорые поезда, но они уже сами не понимают, куда бегут.' ];
    
    function randomIndex(min, max) {
        let rand = min - 0.5 + Math.random() * (max - min + 1);
        return Math.round(rand);
    }
    textElem.innerHTML = fragments[randomIndex(0, fragments.length - 1)];
}
showFragment(); // рандомное появление текста-задания


// Сравниваем то, что ввел пользователь с нашим текст-заданием.
// Если текст не равен, то подкрашиваем текст поля ввода в красный.
const state = { textFromGamer:'' }; 

inputElem.oninput = function() {
    state.textFromGamer = inputElem.value // записываем в объект то, что вводит пользователь
    textElem.innerHTML.match(RegExp(`${state.textFromGamer}`, 'g')) ? inputElem.style.color = 'green' : inputElem.style.color = 'red'
}


// Добавляем подсчет скорости печати(введенных символов в минуту),
// обновление раз в 3 секунды.
// Добавляем Таймер, который бы ограничивал время игры. 
// После истечения времени выводим окно вопроса(confirm) "Начать заново?" 
// Если пользователь говорит, что да, то обновляем таймер и счетчик.
function showTime() {
    let textLength = textElem.innerHTML.split(' ').filter(item => item.length !== 0).length;
    let min = Math.floor(textLength * 2 / 60);
    let sec = textLength * 2 - min * 60;
    if (min.toString().length === 1) {
        min = `0${min}`;
    }
    if (sec.toString().length === 1) {
        sec = `0${sec}`;
    }
    timer.innerHTML = `${min}:${sec}`;
}
showTime(); // начальные показания счетчика времени для рандомного текста

function changeTime() { // функция обратного отсчета рандомного времени
    
    let numberOfSigns = 0;
    let newNumberOfSigns = 0;
    let changeSpeed = setInterval(function() { // счетчик скорости
            const signsFromGamer = state.textFromGamer.length;
            newNumberOfSigns = signsFromGamer; 
            newNumberOfSigns -= numberOfSigns;
            if (newNumberOfSigns < 0) {
                newNumberOfSigns = 0;
            }
            numberOfSigns = signsFromGamer;   
            speed.innerHTML = `${newNumberOfSigns * 20}`;                              
        }, 3000);

    let time = timer.innerHTML.split(':');
    let newMin = parseInt(time[0], 10);
    let newSec = parseInt(time[1], 10);

    let clock = setInterval(function() {
        newSec -= 1;     
        if (newSec <= 0 && newMin > 0) {
            newMin -= 1;
            newSec = 59;
        }      
        else if (newSec == 0 && newMin == 0) { // если время вышло
            const question = confirm('Упс! Время вышло. Попробовать ещё раз?');
                if (question) {
                    clearInterval(changeSpeed);
                    numberOfSigns = 0;
                    newNumberOfSigns = 0;
                    clearInterval(clock);
                    inputElem.value = "";
                    showFragment(); 
                    showTime();
                    changeTime();
                }
                else {
                    alert('Жаль! Будем рады видеть вас снова!');
                }
        }

        if (newMin.toString().length === 1) {
            newMin = `0${newMin}`;
        }
        if (newSec.toString().length === 1) {
            newSec = `0${newSec}`;
        }
        timer.innerHTML = `${newMin}:${newSec}`;
    }, 1000);     
}

inputElem.onclick = function() {
    changeTime(); // таймер начинает отсчет при начале ввода текста в поле
};