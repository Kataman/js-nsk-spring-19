/**
 * Напишите функцию getIntersection(first, second), возвращающую
 * массив из общих значений массивов first и second.
 *
 * Результирующий массив должен быть отсортирован по возрастанию.
 *
 * Пример:
 * getIntersection([1, 3, 5, 7, 9], [1, 2, 3, 4]); //  [1, 3]
 * getIntersection([1, 1, 2], [2, 1, 1, 1]); // [1, 1, 2]
 *
 * @param  {number[]} first исходные массивы
 * @param  {number[]} second исходные массивы
 * @return {number[]} массив значений, отсортированный по возрастанию
 */
export function getIntersection(first, second) {
    first.sort(function(a, b) {
        return a - b;
        });
    second.sort(function(a, b) {
        return a - b;
        });
    let numbers = [];
    
    for(let i=0; i < first.length; i++) {
        for(let j=0; j < second.length; j++) {
            if (second[j] === first[i]) {
                numbers.push(second[j]);
                break;
            } 
        }
    }
    // console.log(numbers);
    return numbers;
}