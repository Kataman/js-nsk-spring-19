/**
 * Напишите функцию multiple(a, b), умножающую число a на число b,
 * не используя оператор "*" или метод Math.imul.
 *
 * Пример:
 * multiple(1, 1) === 1
 * multiple(1, 2) === 2
 * multiple(0, 0) === 0
 *
 * Больше примеров в тестах.
 *
 * @param  {number} a любое целое число
 * @param  {number} b любое целое число
 * @return {number}
 */
export function multiple(a, b) {
    let result = 0;
    let positiveNumber = true;
    let firstNumber = a;
    let secondNumber = b;
    
    if (a < 0) {
        firstNumber = -a;
        positiveNumber = !positiveNumber;
    }

    if (b < 0) {
        secondNumber = -b;
        positiveNumber = !positiveNumber;
    }

    for (let i = 0; i < firstNumber; i++) {
        result = result + secondNumber;
    }
    return positiveNumber ? result : -result;
}