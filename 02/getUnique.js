/**
 * Напишите функцию getUnique(input), возвращающую новый массив,
 * состоящий из уникальных значений массива input. Результирующий
 * массив должен быть отсортирован по возрастанию.
 *
 * Не использовать Set().
 *
 * Пример:
 * getUnique([1, 1, 2, 6, 3, 6, 2]); // [1, 2, 3, 6]
 *
 * @param  {number[]} input исходный массив
 * @return {Set<any>} массив уникальных значений, отсортированный по возрастанию
 */
export function getUnique(input) {
    const symbols = {};
    let result = [];

    input.forEach((symbol) => {
        symbols[symbol] = symbols[symbol] || 0;
        symbols[symbol] = symbols[symbol] + 1;
    });   
        
    for (let a in symbols) {
        if (symbols[a] >= 1) {
            result.push(parseInt(a, 10));
        }
    } 
    return result.sort();
}