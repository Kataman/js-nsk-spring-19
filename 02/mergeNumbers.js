/**
 * Напишите функцию mergeNumbers(number), складывающую
 * все цифры числа number до тех пор, пока не получится
 * однозначный результат.
 *
 * Пример:
 * mergeNumbers(1) === 1
 * mergeNumbers(10001) === 2
 * mergeNumbers(15334232) === 5
 * mergeNumbers(50349814743854) === 2
 *
 * @param number
 */
export function mergeNumbers(number) {
    let arr = number.toString().split('');
    let sum = 0;
   
    for (let i=0; i<arr.length; i++) {
        sum = sum + parseInt(arr[i], 10);
    }
      
    if (sum >= 10) {
        return sum = mergeNumbers(sum);
    }
    else {
        return sum; 
    }
}