/* Суммирование значений свойств объекта

Напиши функцию countTotalSalary(employees) принимающую объект зарплат. 
Функция считает общую сумму зарплаты работников и возвращает ее. 
Каждое поле объекта, передаваемого в функцию, имеет вид "имя":"зарплата".
*/
console.log(`задание 4 *********************************************`);
const countTotalSalary = function (employees) {
  'use strict';
  // Write code under this line
  const values = Object.values(employees);
  // console.log(values);

  let total = 0;

  for (const value of values) {
    // console.log(value);
    total += value;
  }

  return total;
};

// Объекты и ожидаемый результат
const developers = {
  mango: 300,
  poly: 250,
  alfred: 450,
};
console.log(countTotalSalary(developers));
// 1000

const supports = {
  kiwi: 200,
  lux: 150,
  chelsy: 150,
};
console.log(countTotalSalary(supports));
// 500
