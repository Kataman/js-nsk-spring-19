/**
 * Напишите функцию rle(input), реализующую примитивное RLE-сжатие входящей строки input.
 * Подробнее об RLE: https://ru.wikipedia.org/wiki/Кодирование_длин_серий
 *
 * Входящая строка сооттветствует regex паттерну /^[A-Z]+$/
 *
 * Пример:
 * rle('AAAB') === 'A3B'
 * rle('BCCDDDEEEE') === 'BC2D3E4'
 *
 * Больше примеров в тестах.
 *
 * @param  {string} input
 * @return {string}
 */
export function rle(input) {
    let result;
    let str = "";
    let last = input[0];
    let count = 1;
    for (let i = 1; i < input.length; i++) {
        if (input[i] === last) {
            count++;
        } 
        else { 
            str += last + count;
            last = input[i];
            count = 1;
        } 
    }
    result = (str + last + count).replace(/[1]/g, '');
    return result;
}