/*Вычисление суммы массива
*Напиши функцию reduceArray(array), которая принимает числовой массив array. Если массив array не пустой, 
*необходимо посчитать сумму всех элементов массива, используя цикл for. Для подсчета суммы используй переменную total. 
*Функция должна возвращать 0 если массив пустой и значение total в противном случае.
*/


function reduceArray(array) {
    'use strict';
    // console.log(array);
    let total = 0;
    // решение задачи №1 (пропустил БОТ)
    for (const arr of array) {
        // console.log(arr);
        total += arr;
    }

    //решение задачи №2 (пропустил БОТ)
    for (let i = 0; i < array.length; i += 1 ) {
    total += array[i];
    }
     
    return total;
  };
  console.log(`сумма чисел`, reduceArray([1, 2, 3, 55, 51, 45]));


//   console.log(reduceArray([1, 2, 3]));
//   // 6
  
//   console.log(reduceArray([-2, 0, 2]));
//   // 0
  
//   console.log(reduceArray([1, 2, 2.5]));
//   // 5.5

